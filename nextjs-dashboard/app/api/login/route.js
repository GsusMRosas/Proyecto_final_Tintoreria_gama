// app/api/login/route.js
import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { correo, contraseña } = await req.json();

  try {
    const db = await createConnection();
    const sql = 'SELECT * FROM usuarios WHERE correo = ?';
    const [rows] = await db.query(sql, [correo]);

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 401 });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(contraseña, user.contrasenia);


    if (!isPasswordValid) {
        return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
      }

    // Here you can generate a token or set a session
    return NextResponse.json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}