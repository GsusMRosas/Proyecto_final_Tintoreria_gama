import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { nombre, correo, contraseña, telefono } = await req.json();

  try {
    const db = await createConnection();
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const sql = 'INSERT INTO usuarios (nombre, correo, contrasenia, telefono) VALUES (?, ?, ?, ?)';
    await db.query(sql, [nombre, correo, hashedPassword, telefono]);

    return NextResponse.json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}