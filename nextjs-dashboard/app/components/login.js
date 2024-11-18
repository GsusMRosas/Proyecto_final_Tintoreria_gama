"use client";

import React, { useState } from 'react';
import AppnameLi from "../components/appnameLi.js";
import Link from "next/link";
import { useRouter } from 'next/navigation';

function Login() {
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
      <AppnameLi />
      <div className="bg-blue-50 flex items-center justify-center m-0">
        <div className="text-center bg-gray-200 mx-60 my-20 px-60 py-20 rounded-xl">
          <h1 className="pb-10 font-bungee text-3xl text-backgroundBlue">Inicio de sesión</h1>
          <form className="flex flex-col space-y-4 items-center" onSubmit={handleSubmit}>
            <label>Correo</label>
            <input
              type="text"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="w-40 bg-white">Iniciar sesión</button>
            <Link href="/SignIn">¿No tienes una cuenta? Regístrate</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;