"use client"
import React from 'react'
import Link from "next/link";

function AppnameLi() {
    return(
        <div className='flex flex-col md:flex-row items-center font-bungee bg-backgroundBlue px-4 py-3 md:px-16 h-50'> 
            <Link href="/"> 
            <h1 className='text-white text-3xl md:text-5xl '>GAMA</h1> 
            <h2 className='text-white text-lg md:text-xl'>Tintoreria, lavanderia y planchado</h2> 
            </Link> 
        </div>
    )
}

export default AppnameLi