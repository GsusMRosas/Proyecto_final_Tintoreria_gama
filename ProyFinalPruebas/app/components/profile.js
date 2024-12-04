"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import Link from "next/link";
import AppnameLi from "../components/appnameLi.js";

const SECRET_KEY = process.env.JWT_PRIVATE_KEY || 'your-private-key';

function Profile() {
  const [user, setUser] = useState(null);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
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
  
    try {
      const decoded = jwt.decode(token, { complete: true });
      setUser(decoded.payload);
      
      fetchCurrentOrders(decoded.payload.id);
      fetchOrderHistory(decoded.payload.id);  
      
      const interval = setInterval(() => {
        fetchCurrentOrders(decoded.payload.id);
        fetchOrderHistory(decoded.payload.id);
      }, 300000); 

      return () => clearInterval(interval);
    } catch (error) {
      console.error('Error al decodificar el token:', error.message);
      setError('Sesión expirada o inválida. Por favor, inicia sesión de nuevo.');
      localStorage.removeItem('token');
      router.push('/LogIn');
    }
  }, [router]);

  const fetchCurrentOrders = async (usuarioId) => { 
    try {
      const response = await fetch(`/api/orders?usuarioId=${usuarioId}&type=current`); 
      if (!response.ok) throw new Error(`Error fetching current orders: ${response.statusText}`); 
      const data = await response.json(); 
      setCurrentOrders(data); 
    } catch (error) { 
      console.error('Error fetching current orders:', error); 
      setError('Error fetching current orders: ' + error.message); 
    } 
  };
  
  const fetchOrderHistory = async (usuarioId) => { 
    try { 
      const response = await fetch(`/api/orders?usuarioId=${usuarioId}&type=history`); 
      if (!response.ok) throw new Error(`Error fetching order history: ${response.statusText}`); 
      const data = await response.json(); 
      setOrderHistory(data); 
    } catch (error) { 
      console.error('Error fetching order history:', error); 
      setError('Error fetching order history: ' + error.message); 
    }
  };
  
  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    setUser(null);
    setCurrentOrders([]);
    setOrderHistory([]);
    router.push('/LogIn');
  };

  return (
    <div>
      <div className="flex bg-backgroundBlue">
        <AppnameLi />
        <div className="w-full text-white container py-5 font-alegreyaMedium flex-1 flex space-x-4 justify-end text-xl pr-10">
          <Link href="/cotizar" className='hover:text-aquaLine'>Cotizar</Link>
          <Link href="/" className='hover:text-aquaLine' onClick={handleLogout}>Cerrar sesión</Link>
        </div>
      </div>
      <hr className='bg-backgroundWhite h-1 border-0'/>
      <hr className='bg-aquaLine h-1 border-0'/>
      <div className="bg-backgroundLBlue flex items-center justify-center min-h-screen">
        <div className="bg-gray-200 p-20 mx-10 my-20 space-y-6 text-center rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="pb-10 font-bungee text-3xl text-backgroundBlue">Perfil</h1>
          { user ? (
            <>
              <p className='font-alegreyaMedium'>Nombre: {user.nombre}</p>
              <p className='font-alegreyaMedium'>Correo: {user.correo}</p>
              <p className='font-alegreyaMedium'>Teléfono: {user.telefono}</p>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="bg-gray-200 px-20 py-20 my-20 mx-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <h1 className="pb-10 font-bungee text-xl text-backgroundBlue">Pedido actual</h1>
            <div className='bg-white items-center justify-center mb-5 rounded-lg shadow-lg overflow-hidden'>
              {currentOrders.length > 0 ? (
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-backgroundBlue text-white text-left">
                      <th className="py-4 px-6 border-b">Servicio</th>
                      <th className="py-4 px-6 border-b">Fecha Entrega</th>
                      <th className="py-4 px-6 border-b">Concepto</th>
                      <th className="py-4 px-6 border-b">Precio Estimado</th>
                      <th className="py-4 px-6 border-b">Fecha Estimada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrders.map((order, index) => (
                      <tr
                        key={order.id}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                        <td className="py-4 px-6 border-b">{order.servicio}</td>
                        <td className="py-4 px-6 border-b">{order.fecha_hora}</td>
                        <td className="py-4 px-6 border-b">{order.concepto}</td>
                        <td className="py-4 px-6 border-b">{order.precio_estimado}</td>
                        <td className="py-4 px-6 border-b">{order.fecha_estimada}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-500">No tienes pedidos actuales.</p>
              )}
            </div>
          </div>
          <div>
            <h1 className="pb-10 font-bungee text-xl text-backgroundBlue mt-10">Historial de pedidos</h1>
            <div className='bg-white items-center justify-center mb-5 rounded-lg shadow-lg overflow-hidden'>
              {orderHistory.length > 0 ? (
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-backgroundBlue text-white text-left">
                      <th className="py-4 px-6 border-b">Servicio</th>
                      <th className="py-4 px-6 border-b">Fecha Entrega</th>
                      <th className="py-4 px-6 border-b">Concepto</th>
                      <th className="py-4 px-6 border-b">Precio Estimado</th>
                      <th className="py-4 px-6 border-b">Fecha Estimada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order, index) => (
                      <tr
                        key={order.id}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                        <td className="py-4 px-6 border-b">{order.servicio}</td>
                        <td className="py-4 px-6 border-b">{order.fecha_hora}</td>
                        <td className="py-4 px-6 border-b">{order.concepto}</td>
                        <td className="py-4 px-6 border-b">{order.precio_estimado}</td>
                        <td className="py-4 px-6 border-b">{order.fecha_estimada}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-500">No tienes historial de pedidos.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
