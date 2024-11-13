"use client";

import React, { useState } from 'react';
import AppnameLi from "../components/appnameLi.js";
import Link from "next/link";

function Signin() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
        setSuccess('Usuario registrado exitosamente');
      }
    } catch (error) {
      setError('Error al registrar usuario');
    }
  };

  return (
    <div>
      <AppnameLi />
      <div className='bg-blue-50 flex items-center justify-center m-0'>
        <div className='text-center bg-gray-200 mx-60 my-20 px-60 py-20 rounded-xl'>
          <h1 className='pb-10 font-bungee text-3xl text-backgroundBlue'>Crear cuenta</h1>
          <form className='flex flex-col space-y-4 items-center' onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label>Correo</label>
            <input
              type="text"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label>Telefono</label>
            <input
              type="text"
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button type="submit" className="w-40 bg-white">Registrar</button>
            <Link href="/LogIn">¿Ya tienes una cuenta? Inicia sesión</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;