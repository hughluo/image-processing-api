import sharp from 'sharp'
import fs from 'fs'
import { resolve } from 'path'

export const resize = async function (
  filename: string,
  width: number,
  height: number,
): Promise<string> {
  const outputDir = './assets/output'
  const outputFilename = `${outputDir}/${filename}.png`

  // naive caching
  if (fs.existsSync(outputFilename)) {
    const metadata = await sharp(outputFilename).metadata()
    if (
      metadata.width == width &&
      metadata.height == height &&
      metadata.format == 'png'
    ) {
      return resolve(outputFilename)
    }
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }
  await fs.writeFile(outputFilename, '', (err) => {
    if (err) {
      console.log(`failed to create output file ${outputFilename}: ${err}`)
    }
  })
  await sharp(`./assets/${filename}`)
    .resize(width, height)
    .png()
    .toFile(outputFilename)
  return resolve(outputFilename)
}
