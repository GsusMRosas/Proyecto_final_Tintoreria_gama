"use client"
import React from 'react';
import Link from "next/link";

export default function Navbar() {
    return(
        <div className=" bg-backgroundBlue " >
            <div className='w-full text-white container py-5
          font-alegreyaMedium flex-1 flex space-x-4 justify-end text-xl'>
                <Link  href="/" className='hover:text-aquaLine'>Inicio</Link>
                <Link href="/cotizar" className='hover:text-aquaLine' >Cotizar</Link>
                <Link href="/consideraciones">Consideraciones</Link>
                <Link href="/LogIn" className='hover:text-aquaLine'>Cuenta</Link>
            </div>
        </div>
    )
};
