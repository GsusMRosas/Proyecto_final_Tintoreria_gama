"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        console.log('Token recibido:', data.token);
        alert('Inicio de sesión exitoso');
        
        // Guardar token en localStorage
        localStorage.setItem('token', data.token);

        // Redirigir a perfil
        router.push('/Profile');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div>
      <hr className='bg-backgroundWhite h-1 border-0'/>
      <hr className='bg-aquaLine h-1 border-0'/>
      <div className="bg-backgroundWhite flex items-center justify-center m-0 min-h-screen">
        <div className="text-center bg-gray-200 mx-60 my-20 px-60 py-20 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className='font-bungee text-backgroundBlue text-4xl flex justify-center py-9'>Inicio de sesión</h1>
          <form className="flex flex-col space-y-4 items-center" onSubmit={handleSubmit}>
            <label className='font-alegreyaMedium'>Correo</label>
            <input
              type="text"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label className='font-alegreyaMedium'>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="text-white bg-backgroundBlue hover:bg-darkaquaLine focus:ring-4
                focus:ring-blue-300 font-alegreyaMedium rounded-lg text-base px-5 py-2.5 me-2 mb-2
                dark:bg-aquaLine dark:bg-aquaLine focus:outline-none dark:focus:ring-cyan-800">Iniciar sesión</button>
            <Link href="/SignIn" className='font-alegreyaMedium'>¿No tienes una cuenta? Regístrate</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
