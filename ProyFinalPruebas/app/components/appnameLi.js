"use client"
import React from 'react'
import Link from "next/link";

function AppnameLi() {
    return(
        <div>
             <div className='flex flex-col md:flex-row items-center font-bungee bg-backgroundBlue px-4 py-3 md:px-16 h-50'> 
            <Link href="/"> 
            <div className='flex flex-row'>
                <h1 className='text-white text-3xl md:text-5xl '>GAMA</h1> 
                <img className="max-w-28" src="/imagenes/logo.png" alt="Tintoreria Gama Logo"></img>

            </div>
            <h2 className='text-white text-lg md:text-xl'>Tintoreria, lavanderia y planchado</h2> 
            </Link> 
           
            </div>
        </div>
       
        
    )
}

export default AppnameLi