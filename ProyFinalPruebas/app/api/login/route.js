import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_PRIVATE_KEY;

export async function POST(req) {
  const { correo, contraseña } = await req.json();

  if (!SECRET_KEY || SECRET_KEY.trim() === '') {
    console.error('La clave privada JWT no está configurada correctamente.');
    return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
  }

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

    const token = jwt.sign(
      {
        id: user.id,
        correo: user.correo,
        nombre: user.nombre,
        telefono: user.telefono
      },
      SECRET_KEY,  // Clave privada para firmar el token
      { expiresIn: '1h' }  // El token expirará en 1 hora
    );

    await db.end();

    return NextResponse.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error en el login API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
