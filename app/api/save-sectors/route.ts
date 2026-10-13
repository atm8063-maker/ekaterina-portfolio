import { NextResponse } from 'next/server'
import fs from 'fs'

const MAX_BODY_BYTES = 64 * 1024

export async function POST(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 })
  }

  const contentLength = Number(req.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ success: false, error: 'Payload too large' }, { status: 413 })
  }

  try {
    const text = await req.text()
    if (text.length > MAX_BODY_BYTES) {
      return NextResponse.json({ success: false, error: 'Payload too large' }, { status: 413 })
    }

    const data = JSON.parse(text) as { sectors?: unknown[] }
    const savePath = 'C:\\Users\\Екатерина\\Downloads\\selected_sectors.json'
    fs.writeFileSync(savePath, JSON.stringify(data, null, 2), 'utf-8')
    return NextResponse.json({ success: true, count: data.sectors?.length })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
