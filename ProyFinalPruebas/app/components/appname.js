"use client"
import React from 'react'

function Appname() {
    return(
        <div className=' flex-auto font-bungee bg-backgroundBlue container px-16 h-30 content-center' >
            <div className='flex flex-row pt-5'>
                < h1 className='text-white text-6xl '>GAMA</h1>
                <img className="max-w-32" src="/imagenes/logo.png" alt="Tintoreria Gama Logo"></img>
            </div>
            <h2 className='text-white text-xl pb-5'>Tintoreria, lavanderia y planchado</h2>
        </div>
    )
}

export default Appname