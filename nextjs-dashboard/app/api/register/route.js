import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { nombre, correo, contraseña, telefono } = await req.json();

  // Validation checks
  if (!nombre || !correo || !contraseña || !telefono) {
    return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
  }

  try {
    const db = await createConnection();

    // Check if email already exists
    const checkEmailSql = 'SELECT * FROM usuarios WHERE correo = ?';
    const [existingUser] = await db.query(checkEmailSql, [correo]);

    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'El correo ya tiene una cuenta' }, { status: 400 });
    }

    // Hash the password and insert the new user
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const insertUserSql = 'INSERT INTO usuarios (nombre, correo, contrasenia, telefono) VALUES (?, ?, ?, ?)';
    await db.query(insertUserSql, [nombre, correo, hashedPassword, telefono]);

    return NextResponse.json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Database query error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}