"use client"
import React from "react"
import Footer from "./Footer";

function Pie(){
    return(
        <div>
            <hr className='bg-backgroundBlue h-1 border-0'/>
            <hr className='bg-backgroundWhite h-1 border-0'/>
            <div className="h-70 flex bg-backgroundBlue jusitfy-between">
                <h1 className="font-bungee text-white px-10 text-2xl py-10">Dirección</h1>
                    <p className="px-16 py-1 font-alegreyaMedium text-white content-center">San Agustín del Retablo 163, El Retablo, 76150 Santiago de Querétaro, Qro. </p>
            
                <h1 className="font-bungee text-white px-10 text-2xl py-10">Contactanos!</h1>
                    <p className="px-16 py-1 font-alegreyaMedium text-white content-center">correo@gmail.com</p>
                    <p className="px-16 py-1 font-alegreyaMedium text-white content-center">TEL. +524422162412</p>        
            </div>
            <div>
                <Footer/>
            </div>

        </div>
        
    )
}

export default Pie;
