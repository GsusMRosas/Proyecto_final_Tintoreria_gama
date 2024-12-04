import { createConnection } from "@/lib/db";
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      servicio,
      fecha_hora,
      concepto,
      cantidad_unidad,
      cantidad_docena,
      cantidad_kilos,
      observaciones,
      precio_estimado,
      fecha_estimada,
    } = body;

    // Obtener el token de los headers de la solicitud
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
      console.error('Token no proporcionado en la solicitud');
      return new Response(
        JSON.stringify({ error: 'Token no proporcionado' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const SECRET_KEY = process.env.JWT_PRIVATE_KEY; // Asegúrate de que esta clave esté configurada en tus variables de entorno
    if (typeof SECRET_KEY !== 'string' || SECRET_KEY.trim() === '') {
      throw new Error('SECRET_KEY no es una cadena válida');
    }

    let usuarioId;
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log('Token decodificado:', decoded);
      usuarioId = decoded.id; // Ajusta esto si el ID del usuario está bajo la clave `id`
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return new Response(
        JSON.stringify({ error: 'Token inválido o expirado' }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Verificar y establecer valores a null si están indefinidos
    const values = [
      usuarioId ?? null,
      servicio ?? null,
      fecha_hora ?? null,
      concepto ?? null,
      cantidad_unidad ?? null,
      cantidad_docena ?? null,
      cantidad_kilos ?? null,
      observaciones ?? null,
      precio_estimado ?? null,
      fecha_estimada ?? null,
      0,
    ];

    // Crear conexión a la base de datos
    const db = await createConnection();

    // Inserción en la base de datos
    const query = `
      INSERT INTO cotizaciones 
      (usuario_id, servicio, fecha_hora, concepto, cantidad_unidad, cantidad_docena, cantidad_kilos, observaciones, precio_estimado, fecha_estimada, terminado)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, values);

    return new Response(
      JSON.stringify({ message: "Pedido creado con éxito", orderId: result.insertId }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    return new Response(
      JSON.stringify({ error: "Error al crear el pedido" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}