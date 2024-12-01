"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Signin() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, contraseña, telefono }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        alert('Usuario registrado exitosamente');
        router.push('/LogIn');
      }
    } catch (error) {
      setError('Error al registrar usuario');
    }
  };

  return (
    <div>
      <hr className='bg-backgroundWhite h-1 border-0'/>
      <hr className='bg-aquaLine h-1 border-0'/>
      <div className="bg-blue-50 flex items-center justify-center m-0 min-h-screen">
        <div className='text-center bg-gray-200 mx-60 my-20 px-60 py-20 rounded-xl'>
          <h1 className='font-bungee text-backgroundBlue text-4xl flex justify-center py-9'>Crear cuenta</h1>
          <form className='flex flex-col space-y-4 items-center' onSubmit={handleSubmit}>
            <label className='font-alegreyaMedium'>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label className='font-alegreyaMedium'>Correo</label>
            <input
              type="text"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label className='font-alegreyaMedium'>Telefono</label>
            <input
              type="text"
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label className='font-alegreyaMedium'>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button type="submit" className="text-white bg-backgroundBlue hover:bg-darkaquaLine focus:ring-4
                focus:ring-blue-300 font-alegreyaMedium rounded-lg text-base px-5 py-2.5 me-2 mb-2
                dark:bg-aquaLine dark:bg-aquaLine focus:outline-none dark:focus:ring-cyan-800">Registrar</button>
            <Link href="/LogIn" className='font-alegreyaMedium'>¿Ya tienes una cuenta? Inicia sesión</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
