"use client"
import React from "react"

export default function Pie(){
    return(
        <div className="h-80" style={{ backgroundColor: '#223A5C'}}>
            <hr className='bg-backgroundBlue h-1 border-0'/>
            <hr className='bg-backgroundWhite h-1 border-0'/>
            <h1 className="font-bungee text-white px-10 text-2xl py-6">¡Visítanos!</h1>
            <p className="px-16 py-1 font-alegreyaMedium text-white">San Agustín del Retablo 163, El Retablo, 76150 Santiago de Querétaro, Qro. </p>
           
            <h1 className="font-bungee text-white px-10 text-2xl py-6">¡Contáctanos!</h1>
            <p className="px-16 py-1 font-alegreyaMedium text-white">tintoreriacontacto@gama.com</p>
            <p className="px-16 py-1 font-alegreyaMedium text-white">TEL. +52 442 216 2412</p>
            <br />
            <p className="px-16 py-1 font-alegreyaMedium text-white">© Tintorería GAMA 2024. Todos los Derechos Reservados</p>
        </div>

    )
}
