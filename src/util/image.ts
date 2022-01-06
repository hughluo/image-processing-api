import sharp from 'sharp'
import fs from 'fs'
import { resolve } from 'path'

export const resize = async (
    filename: string,
    width: number,
    height: number,
) => {
    const outputDir = './assets/output'
    const outputFilename = `${outputDir}/${filename}.png`
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    await fs.writeFile(outputFilename, '', (err) => {
        if (err) {
            console.log(
                `failed to create output file ${outputFilename}: ${err}`,
            )
        }
    })
    await sharp(`./assets/${filename}`)
        .resize(width, height)
        .png()
        .toFile(outputFilename)
    return resolve(outputFilename)
}
