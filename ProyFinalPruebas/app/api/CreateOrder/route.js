import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { use } from 'react';

const uri = "mongodb+srv://gamadbadmin:gama2024@gamadb.cnrihgh.mongodb.net/?retryWrites=true&w=majority&appName=GamaDB";
const dbName = 'Gama';


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
    let nombre;
    let correo;
    let telefono;
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log('Token decodificado:', decoded);
      usuarioId = decoded.id; // Ajusta esto si el ID del usuario está bajo la clave id
      nombre = decoded.nombre;
      correo = decoded.correo;
      telefono = decoded.telefono;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return new Response(
        JSON.stringify({ error: 'Token inválido o expirado' }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Verificar y establecer valores a null si están indefinidos
    const cotizacion = {
      usuario_id: usuarioId ?? null,
      nombre: nombre ?? null,
      correo: correo ?? null,
      telefono: telefono ?? null,
      servicio: servicio ?? null,
      fecha_hora: fecha_hora ?? null,
      concepto: concepto ?? null,
      cantidad_unidad: cantidad_unidad ?? null,
      cantidad_docena: cantidad_docena ?? null,
      cantidad_kilos: cantidad_kilos ?? null,
      observaciones: observaciones ?? null,
      precio_estimado: precio_estimado ?? null,
      fecha_estimada: fecha_estimada ?? null,
      terminado: false, // Por defecto
    };

    // Crear conexión a MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('Ordenes');

    // Insertar en la base de datos
    const result = await collection.insertOne(cotizacion);

    // Cerrar la conexión
    await client.close();

    return new Response(
      JSON.stringify({ message: 'Pedido creado con éxito', orderId: result.insertedId }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    return new Response(
      JSON.stringify({ error: 'Error al crear el pedido' }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}