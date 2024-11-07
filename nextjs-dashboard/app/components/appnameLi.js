"use client"
import React from 'react'
import Link from "next/link";

function AppnameLi() {
    return(
        <div className=' flex-auto font-bungee bg-backgroundBlue container px-16 py-3 h-50 content-center' > 
            <Link href="/" className="hover:text-aquaLine">
                <h1 className='text-white text-5xl '>GAMA</h1>
                <h2 className='text-white text-xl'>Tintoreria, lavanderia y planchado</h2>
            </Link>
        </div>
    )
}

export default AppnameLi