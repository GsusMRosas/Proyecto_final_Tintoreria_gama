import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb+srv://gamadbadmin:gama2024@gamadb.cnrihgh.mongodb.net/?retryWrites=true&w=majority&appName=GamaDB"; // Asegúrate de definir esta variable de entorno
const dbName = 'Gama'; // Reemplaza con el nombre de tu base de datos

export async function GET(req) {
  console.log('Solicitud recibida en el endpoint /api/orders');
  try {
    const { searchParams } = new URL(req.url);
    const usuarioId = searchParams.get('usuarioId');
    const type = searchParams.get('type');

    console.log(`Recibida solicitud GET: usuarioId=${usuarioId}, type=${type}`);

    if (!usuarioId) {
      console.error('Usuario no especificado');
      return NextResponse.json({ error: 'Usuario no especificado' }, { status: 400 });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('Ordenes');

    // Construir el filtro basado en el tipo de consulta
    let filter = { usuario_id: parseInt(usuarioId, 10) };
    if (type == 'current') {
      filter.terminado = false; // Cotizaciones actuales (no terminadas)
    } else if (type === 'history') {
      filter.terminado = true; // Cotizaciones históricas (terminadas)
    } else {
      console.error('Tipo de cotización no especificado');
      await client.close();
      return NextResponse.json({ error: 'Tipo de cotización no especificado' }, { status: 400 });
    }

    const cotizaciones = await collection.find(filter).toArray();

    await client.close();

    return NextResponse.json(cotizaciones);
  } catch (error) {
    console.error('Error obteniendo cotizaciones:', error.message);
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}