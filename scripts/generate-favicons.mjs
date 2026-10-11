import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const LOGO = path.join(ROOT, 'public', 'logo.webp')

/** Matches `app/globals.css` — `--color-primary: #14F1D9` */
const PRIMARY = { r: 20, g: 241, b: 217 }

/**
 * Treat logo.webp like the header CSS mask: shape from dark pixels / alpha,
 * fill with primary, fully transparent outside the mark.
 */
async function primaryLogoPng(targetInner) {
  const { data, info } = await sharp(LOGO)
    .resize(targetInner, targetInner, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  /** logo.png alpha peaks ~178 (Figma export); normalize so the mark reads solid primary */
  const ALPHA_PEAK = 178

  const out = Buffer.alloc(data.length)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const a = data[i + 3]

    const lum = 0.299 * r + 0.587 * g + 0.114 * b
    const fromLuma = Math.max(0, Math.min(255, 255 - lum))
    const fromAlpha = Math.min(255, Math.round((a / ALPHA_PEAK) * 255))
    const shapeAlpha = Math.round(Math.max(fromAlpha, fromLuma * (a / 255)))

    if (shapeAlpha < 4) continue

    out[i] = PRIMARY.r
    out[i + 1] = PRIMARY.g
    out[i + 2] = PRIMARY.b
    out[i + 3] = shapeAlpha
  }

  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer()
}

async function squareIcon(size, paddingRatio = 0.14) {
  const padding = Math.round(size * paddingRatio)
  const inner = size - padding * 2
  const logoBuf = await primaryLogoPng(inner)

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png()
    .toBuffer()
}

async function main() {
  const appDir = path.join(ROOT, 'app')
  const publicDir = path.join(ROOT, 'public')

  const icon32 = await squareIcon(32)
  const icon16 = await squareIcon(16, 0.1)
  const apple180 = await squareIcon(180)
  const pwa192 = await squareIcon(192)
  const pwa512 = await squareIcon(512)

  await writeFile(path.join(appDir, 'icon.png'), icon32)
  await writeFile(path.join(appDir, 'apple-icon.png'), apple180)
  await writeFile(path.join(publicDir, 'favicon-16x16.png'), icon16)
  await writeFile(path.join(publicDir, 'favicon-32x32.png'), icon32)
  await writeFile(path.join(publicDir, 'apple-touch-icon.png'), apple180)
  await writeFile(path.join(publicDir, 'icon-192.png'), pwa192)
  await writeFile(path.join(publicDir, 'icon-512.png'), pwa512)

  const ico = await pngToIco([icon16, icon32])
  await writeFile(path.join(appDir, 'favicon.ico'), ico)
  await writeFile(path.join(publicDir, 'favicon.ico'), ico)

  console.log('Favicons generated: transparent bg + primary (#14F1D9) logo')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
