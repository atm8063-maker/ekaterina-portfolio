import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const savePath = 'C:\\Users\\Екатерина\\Downloads\\selected_sectors.json';
    fs.writeFileSync(savePath, JSON.stringify(data, null, 2), 'utf-8');
    return NextResponse.json({ success: true, count: data.sectors?.length });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
