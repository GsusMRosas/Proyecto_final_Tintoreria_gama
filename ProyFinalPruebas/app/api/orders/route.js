import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

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

    const db = await createConnection();
    let query = '';
    if (type === 'current') {
      query = 'SELECT * FROM cotizaciones WHERE usuario_id = ? AND terminado = 0';
    } else if (type === 'history') {
      query = 'SELECT * FROM cotizaciones WHERE usuario_id = ? AND terminado = 1';
    } else {
      console.error('Tipo de cotización no especificado');
      return NextResponse.json({ error: 'Tipo de cotización no especificado' }, { status: 400 });
    }

    const [cotizaciones] = await db.query(query, [usuarioId]);
    console.log(`Consultas obtenidas:`, cotizaciones);

    return NextResponse.json(cotizaciones);
  } catch (error) {
    console.error('Error obteniendo cotizaciones:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
