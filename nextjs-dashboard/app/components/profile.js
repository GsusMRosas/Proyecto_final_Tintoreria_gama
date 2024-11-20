"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import Link from "next/link";
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

  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    router.push('/LogIn');
  };

  return (
    <div>
      <div className="flex bg-backgroundBlue">
        <AppnameLi />
        <div className="w-full text-white container py-5
          font-alegreyaMedium flex-1 flex space-x-4 justify-end text-xl pr-10">
          <Link  href="/" className='hover:text-aquaLine' onClick={handleLogout}>Cerrar sesión</Link>
        </div>
       
      </div>
      <div className="bg-blue-50 flex items-center justify-center m-0 min-h-screen">
        <div className="bg-gray-200 p-20 mx-10 my-20 space-y-6 text-center rounded-xl">
          <h1 className="pb-10 font-bungee text-3xl text-backgroundBlue">Perfil</h1>
          {error ? (
            <p>{error}</p>
          ) : user ? (
            <>
              <p className='font-alegreyaMedium'>Nombre: {user.nombre}</p>
              <p className='font-alegreyaMedium'>Correo: {user.correo}</p>
              <p className='font-alegreyaMedium'>Teléfono: {user.telefono}</p>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="bg-gray-200 px-20 py-20 my-20 mx-10 rounded-xl">
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
