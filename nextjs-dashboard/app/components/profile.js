"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import AppnameLi from "../components/appnameLi.js";

const SECRET_KEY = process.env.JWT_PRIVATE_KEY || 'your-private-key';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No se encontró el token en localStorage.');
      setError('No se encontró el token. Por favor, inicia sesión.');
      router.push('/LogIn');
      return;
    }

    console.log('Token encontrado:', token);
    console.log('Clave secreta:', SECRET_KEY);

    try {
      if (typeof SECRET_KEY !== 'string' || SECRET_KEY.trim() === '') {
        throw new Error('SECRET_KEY is not a valid string');
      }

      const decoded = jwt.decode(token, { complete: true });
      console.log('Token decodificado:', decoded);
      setUser(decoded.payload);
    } catch (error) {
      console.error('Error al decodificar el token:', error.message);
      console.error('Error stack:', error.stack);
      setError('Sesión expirada o inválida. Por favor, inicia sesión de nuevo.');
      localStorage.removeItem('token');
      router.push('/LogIn');
    }
  }, [router]);

  return (
    <div>
      <AppnameLi />
      <div className="bg-blue-50 flex items-center justify-center m-0">
        <div className="bg-gray-200 p-20 mx-10 my-20 space-y-6 text-center">
          <h1 className="pb-10 font-bungee text-3xl text-backgroundBlue">Perfil</h1>
          {error ? (
            <p>{error}</p>
          ) : user ? (
            <>
              <p>Nombre: {user.nombre}</p>
              <p>Correo: {user.correo}</p>
              <p>Teléfono: {user.telefono}</p>
              <button type="button" className="w-40 bg-white">Actualizar perfil</button>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="bg-gray-200 px-20 py-20 my-20 mx-10">
          <div>
            <h1 className="pb-10 font-bungee text-xl text-backgroundBlue">Pedido actual</h1>
          </div>
          <div>
            <h1 className="pb-10 font-bungee text-xl text-backgroundBlue">Historial de pedidos</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
