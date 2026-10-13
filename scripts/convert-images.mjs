/**
 * Convert portfolio JPG/PNG files to WebP with sharp (libvips).
 *
 * Do not send these files through ezgif. That site is a manual uploader,
 * and the same encoders are already available locally via the `sharp` dependency.
 *
 * WebP is the format to store and serve. This project's browserslist includes
 * Safari 15.4, which has WebP and does not have AVIF (AVIF starts in Safari 16.4).
 * A second AVIF file only helps when every <img>, next/image, and CSS url
 * becomes a <picture> with an AVIF source and a WebP fallback. Next image
 * optimization is off (`images.unoptimized: true`), so it will not negotiate
 * formats for us.
 *
 *   node scripts/convert-images.mjs                      # every JPG/PNG in public/
 *   node scripts/convert-images.mjs --referenced        # only files the site references
 *   node scripts/convert-images.mjs --referenced --write
 *   node scripts/convert-images.mjs --write --avif       # also write .avif (not wired into the site)
 *   node scripts/convert-images.mjs --referenced --write --update-refs
 *   node scripts/convert-images.mjs --referenced --write --update-refs --delete-originals
 *
 * Favicons, the app icons, SVG, GIF, and `_backups` are left alone.
 */

import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')
const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png'])
const SKIP_DIR_NAMES = new Set([
  'node_modules',
  '.next',
  '.git',
  '_backups',
  'word',
  'мебель_исходники',
])

const args = process.argv.slice(2)
const write = args.includes('--write')
const referencedOnly = args.includes('--referenced')
const alsoAvif = args.includes('--avif')
const updateRefs = args.includes('--update-refs')
const deleteOriginals = args.includes('--delete-originals')
const force = args.includes('--force')

const qualityFlag = args.find((arg) => arg.startsWith('--quality='))
const webpQuality = qualityFlag ? Number(qualityFlag.split('=')[1]) : 80
if (!Number.isFinite(webpQuality) || webpQuality < 1 || webpQuality > 100) {
  console.error('--quality must be a number from 1 to 100')
  process.exit(1)
}

/** Icons must stay PNG for the web manifest, Apple touch icon, and Next metadata files. */
function isKeptAsPng(relPosix) {
  const base = path.posix.basename(relPosix).toLowerCase()
  return (
    base.startsWith('favicon') ||
    base.startsWith('apple-touch-icon') ||
    base.startsWith('apple-icon') ||
    base === 'icon.png' ||
    base === 'icon-16x16.png' ||
    base === 'icon-32x32.png' ||
    base === 'icon-192.png' ||
    base === 'icon-512.png'
  )
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIR_NAMES.has(ent.name)) continue
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

function relPublic(file) {
  return path.relative(PUBLIC_DIR, file).split(path.sep).join('/')
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / (1024 * 1024)).toFixed(1)} MB`
}

function replaceToken(text, from, to) {
  const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`(?<![\\p{L}\\p{N}_@.-])${escaped}(?![\\p{L}\\p{N}_@.-])`, 'gu')
  let count = 0
  const next = text.replace(re, () => {
    count += 1
    return to
  })
  return { text: next, count }
}

async function encode(input, output, format) {
  const isPng = path.extname(input).toLowerCase() === '.png'
  let pipeline = sharp(input, { failOn: 'none', animated: false }).rotate()
  if (format === 'webp') {
    // PNG graphics, masks, and screenshots stay lossless. JPEG photos use lossy WebP.
    pipeline = pipeline.webp(
      isPng
        ? { lossless: true, effort: 4 }
        : { quality: webpQuality, effort: 4, smartSubsample: true }
    )
  } else {
    // AVIF's quality scale is harsher than WebP. ~50 lines up with WebP 80 on photos.
    pipeline = pipeline.avif({
      quality: Math.max(40, Math.round(webpQuality * 0.62)),
      effort: 4,
    })
  }
  await pipeline.toFile(output)
}

function referencedKeys() {
  const textExt = new Set(['.tsx', '.ts', '.jsx', '.js', '.css', '.json', '.html', '.mjs'])
  const roots = ['app', 'components', 'lib', 'public'].map((dir) => path.join(ROOT, dir))
  const quotedRe = /["']([^"']+\.(?:png|jpe?g))["']/gi
  const urlRe = /url\(\/?([^)'"]+\.(?:png|jpe?g))\)/gi
  const full = new Set()
  const bare = new Set()

  const addToken = (raw, fileDir) => {
    let token = raw
    try {
      token = decodeURIComponent(raw)
    } catch {
      /* keep the raw token */
    }
    if (token.startsWith('/')) token = token.slice(1)
    if (token.startsWith('assets/')) {
      const fromPublic = path.relative(PUBLIC_DIR, fileDir).split(path.sep).join('/')
      full.add(`${fromPublic}/${token}`)
      return
    }
    if (token.includes('/')) full.add(token)
    else bare.add(token)
  }

  for (const root of roots) {
    if (!fs.existsSync(root)) continue
    for (const file of walk(root)) {
      if (!textExt.has(path.extname(file).toLowerCase())) continue
      const text = fs.readFileSync(file, 'utf8')
      const fileDir = path.dirname(file)
      for (const match of text.matchAll(quotedRe)) addToken(match[1], fileDir)
      for (const match of text.matchAll(urlRe)) addToken(match[1], fileDir)
    }
  }
  return { full, bare }
}

const allImages = walk(PUBLIC_DIR).filter((file) => {
  const ext = path.extname(file).toLowerCase()
  if (!SOURCE_EXT.has(ext)) return false
  return !isKeptAsPng(relPublic(file))
})

let files = allImages
if (referencedOnly) {
  const { full, bare } = referencedKeys()
  const bareHits = new Map()
  for (const file of allImages) {
    const base = path.basename(file)
    const list = bareHits.get(base) || []
    list.push(file)
    bareHits.set(base, list)
  }
  const casesDir = path.join(PUBLIC_DIR, 'Кейсы')
  if (fs.existsSync(casesDir)) {
    for (const slug of fs.readdirSync(casesDir)) {
      const dir = path.join(casesDir, slug)
      if (!fs.statSync(dir).isDirectory()) continue
      for (const name of fs.readdirSync(dir)) {
        const ext = path.extname(name).toLowerCase()
        if (!SOURCE_EXT.has(ext) || name.toLowerCase().includes('mockup.png')) continue
        full.add(`Кейсы/${slug}/${name}`)
      }
    }
  }

  files = allImages.filter((file) => full.has(relPublic(file)) || bare.has(path.basename(file)))
  const missingBare = [...bare].filter((base) => !bareHits.has(base) && !isKeptAsPng(base))
  if (missingBare.length) {
    console.log(`${missingBare.length} referenced filenames were not found in public/:`)
    for (const name of missingBare) console.log(`  ${name}`)
  }
}

const planned = []
const failed = []
let skippedAnimated = 0
let skippedExisting = 0

for (const file of files) {
  let meta
  try {
    meta = await sharp(file, { failOn: 'none' }).metadata()
  } catch (err) {
    failed.push({
      rel: relPublic(file),
      message: err instanceof Error ? err.message : String(err),
    })
    continue
  }
  if ((meta.pages || 1) > 1) {
    skippedAnimated += 1
    continue
  }
  const webp = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const avif = file.replace(/\.(png|jpe?g)$/i, '.avif')
  const webpExists = fs.existsSync(webp)
  const avifExists = !alsoAvif || fs.existsSync(avif)
  if (!force && webpExists && avifExists) {
    skippedExisting += 1
    continue
  }
  planned.push({
    file,
    rel: relPublic(file),
    bytes: fs.statSync(file).size,
    webp,
    avif,
  })
}

const sourceBytes = planned.reduce((sum, item) => sum + item.bytes, 0)
console.log(
  `${write ? 'Converting' : 'Would convert'} ${planned.length} images in public/ ` +
    `(${formatBytes(sourceBytes)})${alsoAvif ? ' to WebP and AVIF' : ' to WebP'}.`
)
if (skippedExisting) console.log(`Skipped ${skippedExisting} that already have an output (${force ? 'ignored, --force' : 'pass --force to redo'}).`)
if (skippedAnimated) console.log(`Skipped ${skippedAnimated} multi-page or animated files.`)

if (!write) {
  if (failed.length) {
    console.error(`Unreadable ${failed.length}:`)
    for (const item of failed) console.error(`  ${item.rel}: ${item.message}`)
  }
  console.log('Dry run. Re-run with --write to create files. Originals stay in place.')
  process.exit(failed.length ? 1 : 0)
}

const concurrency = 4
let done = 0
let webpBytes = 0
let avifBytes = 0
const converted = []

async function worker(start) {
  for (let i = start; i < planned.length; i += concurrency) {
    const item = planned[i]
    try {
      if (force || !fs.existsSync(item.webp)) await encode(item.file, item.webp, 'webp')
      webpBytes += fs.statSync(item.webp).size
      if (alsoAvif && (force || !fs.existsSync(item.avif))) {
        await encode(item.file, item.avif, 'avif')
        avifBytes += fs.statSync(item.avif).size
      }
      converted.push(item)
    } catch (err) {
      failed.push({ rel: item.rel, message: err instanceof Error ? err.message : String(err) })
    }
    done += 1
    if (done % 25 === 0 || done === planned.length) {
      console.log(`${done}/${planned.length}`)
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, (_, index) => worker(index)))

console.log(
  `Wrote ${converted.length} WebP files, ${formatBytes(webpBytes)} ` +
    `(sources were ${formatBytes(converted.reduce((sum, item) => sum + item.bytes, 0))}).`
)
if (alsoAvif) console.log(`AVIF output: ${formatBytes(avifBytes)}. These files are not referenced by the site.`)
if (failed.length) {
  console.error(`Failed ${failed.length}:`)
  for (const item of failed) console.error(`  ${item.rel}: ${item.message}`)
}

if (updateRefs) {
  const refDirs = ['app', 'components', 'lib', 'public'].map((dir) => path.join(ROOT, dir))
  const textExt = new Set(['.tsx', '.ts', '.jsx', '.js', '.css', '.json', '.html', '.mjs'])
  const textFiles = refDirs.flatMap((dir) =>
    walk(dir).filter((file) => textExt.has(path.extname(file).toLowerCase()))
  )

  const byBase = new Map()
  for (const item of converted) {
    const base = path.posix.basename(item.rel)
    const list = byBase.get(base) || []
    list.push(item.rel)
    byBase.set(base, list)
  }
  const publicCount = new Map()
  for (const file of allImages) {
    const base = path.basename(file)
    publicCount.set(base, (publicCount.get(base) || 0) + 1)
  }

  let filesTouched = 0
  let replacements = 0
  const byLength = [...converted].sort((a, b) => b.rel.length - a.rel.length)
  for (const textFile of textFiles) {
    let text = fs.readFileSync(textFile, 'utf8')
    const original = text
    for (const item of byLength) {
      const fromExt = path.posix.extname(item.rel)
      const toRel = item.rel.slice(0, -fromExt.length) + '.webp'
      const pairs = [
        [item.rel, toRel],
        [encodeURI(item.rel), encodeURI(toRel)],
      ]
      const base = path.posix.basename(item.rel)
      const everyCopyConverted = publicCount.get(base) === byBase.get(base)?.length
      if (everyCopyConverted) {
        const toBase = path.posix.basename(toRel)
        pairs.push([base, toBase], [encodeURIComponent(base), encodeURIComponent(toBase)])
      }
      for (const [from, to] of pairs) {
        if (!from || from === to || !text.includes(from)) continue
        const replaced = replaceToken(text, from, to)
        replacements += replaced.count
        text = replaced.text
      }
    }
    if (text !== original) {
      fs.writeFileSync(textFile, text)
      filesTouched += 1
    }
  }
  console.log(`Updated ${replacements} references in ${filesTouched} source files.`)

  const ambiguous = [...byBase.entries()].filter(([base, list]) => list.length > 1 && publicCount.get(base) !== list.length)
  if (ambiguous.length) {
    console.log(
      `${ambiguous.length} filenames exist in more than one folder and not every copy was converted. Only their full paths were rewritten.`
    )
  }
}

if (deleteOriginals) {
  if (!updateRefs) {
    console.error('Refusing to delete originals without --update-refs. Case folders would show each photo twice.')
    process.exit(1)
  }
  for (const item of converted) {
    if (!fs.existsSync(item.webp) || fs.statSync(item.webp).size === 0) continue
    fs.unlinkSync(item.file)
  }
  console.log(`Deleted ${converted.length} original JPG/PNG files.`)
}

if (failed.length) process.exit(1)
