import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Endpoint /api/test reached');
  return NextResponse.json({ message: 'Test endpoint reached successfully' });
}
