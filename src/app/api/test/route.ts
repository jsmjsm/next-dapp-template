import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	return NextResponse.json({ code: 0, msg: 'success' })
}
