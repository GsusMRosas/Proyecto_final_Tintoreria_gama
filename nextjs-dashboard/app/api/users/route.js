// app/api/users/route.js
import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await createConnection();
    const sql = 'SELECT * FROM usuarios';
    const [rows] = await db.query(sql);
    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}