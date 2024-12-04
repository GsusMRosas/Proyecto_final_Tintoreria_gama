"use client"
import React from 'react';
import Link from "next/link";

function Navbar() {
    return(
        <div className='w-full text-white container py-5
          font-alegreyaMedium flex-1 flex space-x-4 justify-end text-xl '>
            
                <Link  href="/" className='hover:text-aquaLine'>Inicio</Link>
                <Link href="/cotizar" className='hover:text-aquaLine' >Cotizar</Link>
                <Link href="/Profile" className='hover:text-aquaLine'>Cuenta</Link>
                <h1>  </h1>


        </div>
    )
}

export default Navbar