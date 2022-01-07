import { resize } from '../util/image'
import { resolve } from 'path'
import sharp from 'sharp'
import fs from 'fs'

describe('Test image resize', () => {
  afterEach(() => {
    const outputDir = resolve('./assets/output')
    fs.rmdirSync(outputDir, { recursive: true })
  })

  it('success with right metadata width and height', async () => {
    const inputFile = 'parrot.jpeg'
    const gotOutput = await resize(inputFile, 200, 200)
    const expectOutput = resolve('./assets/output/parrot.jpeg.png')
    expect(gotOutput).toBe(expectOutput)
    const metadata = await sharp(gotOutput).metadata()
    expect(metadata.width).toBe(200)
    expect(metadata.height).toBe(200)
  })

  it('failed with non-existing file', async () => {
    await expectAsync(resize('non-existing', 200, 200)).toBeRejected()
  })
})
