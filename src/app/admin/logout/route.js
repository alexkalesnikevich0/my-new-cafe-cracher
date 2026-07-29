import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  const cookiesStore = await cookies()
  cookiesStore.delete('admin_token')
  return NextResponse.json({ ok: true }) 
}