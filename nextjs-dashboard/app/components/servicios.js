"use client"
import React from 'react'

function Servicios(){
    return (
        <div >
            <hr className='bg-backgroundLBlue h-1 border-0'/>
            <hr className='bg-aquaLine h-1 border-0'/>
            <h1 className='bg-backgroundLBlue font-bungee text-backgroundBlue text-4xl flex justify-center py-9'>Nuestros Servicios</h1>

            <div className=" bg-backgroundLBlue flex flex-col sm:flex-row justify-center space-x-36 p-4">
                <div className='flex flex-col text-center max-w-xs p-4'>
                    <img className="h-auto " src="/imagenes/lavanderiac.png" alt="Lavandedria"></img>
                    <figcaption className='font-alegreyaMedium'> Una lavandería es un negocio que se dedica a lavar, secar y planchar la ropa y otros textiles de sus clientes. 
                    En este texto exploraremos cómo funciona y cómo se organiza una lavandería.</figcaption>
                </div>
            

                <div className='flex flex-col text-center max-w-xs p-4'>
                    <img className="h-auto " src="/imagenes/tintoreriaC.png" alt="Lavandedria"></img>
                    <figcaption className='font-alegreyaMedium'> Una lavandería es un negocio que se dedica a lavar, secar y planchar la ropa y otros textiles de sus clientes. 
                    En este texto exploraremos cómo funciona y cómo se organiza una lavandería.</figcaption>
                </div>
            

                <div className='flex flex-col text-center max-w-xs p-4'>
                    <img className="h-auto " src="/imagenes/PlanchadoC.png" alt="Lavandedria"></img>
                    <figcaption className='font-alegreyaMedium'> Una lavandería es un negocio que se dedica a lavar, secar y planchar la ropa y otros textiles de sus clientes. 
                    En este texto exploraremos cómo funciona y cómo se organiza una lavandería.</figcaption>
                </div>
            </div>

            <div className='bg-backgroundLBlue flex justify-center py-9'>
                <button type="button" className=" text-white bg-backgroundBlue hover:bg-blue-800 focus:ring-4
                focus:ring-blue-300 font-alegreyaMedium rounded-lg text-base px-5 py-2.5 me-2 mb-2
                dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Cotizar Servicios</button>

            </div>



        </div>

    )
}

export default Servicios