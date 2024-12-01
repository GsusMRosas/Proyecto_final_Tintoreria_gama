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
                    <img className="h-auto  " src="/imagenes/lavanderiac.png" alt="Lavanderia"></img>
                    <figcaption className='font-bungee text-2xl text-backgroundBlue'>LAVANDERIA</figcaption>
                    <figcaption className='font-alegreyaMedium  text-gray-700'>Olvídate de las preocupaciones del lavado diario. Nos encargamos de tu ropa con el máximo cuidado, utilizando detergentes premium y procesos que protegen tus tejidos mientras eliminan las manchas más difíciles.</figcaption>

                </div>
            

                <div className='flex flex-col text-center max-w-xs p-4'>
                    <img className="h-auto " src="/imagenes/tintoreriaC.png" alt="Lavandedria"></img>
                    <figcaption className='font-bungee text-2xl text-backgroundBlue'>TINTORERIA</figcaption>
                    <figcaption className='font-alegreyaMedium  text-gray-700'>Dale un cuidado especial a tus prendas delicadas con nuestro servicio de tintorería. Usamos técnicas y productos de alta calidad para garantizar que tus trajes, vestidos y telas finas luzcan impecables. </figcaption>

                </div>
            

                <div className='flex flex-col text-center max-w-xs p-4'>
                    <img className="h-auto " src="/imagenes/PlanchadoC.png" alt="Lavandedria"></img>
                    <figcaption className='font-bungee text-2xl text-backgroundBlue'>PLANCHADO</figcaption>
                    <figcaption className='font-alegreyaMedium text-gray-700'>Ten tu ropa siempre lista para lucir perfecta. Nuestro servicio de planchado profesional deja tus prendas suaves, sin arrugas y con un acabado impecable, ideal para cualquier ocasión. </figcaption>

                </div>
            </div>

            <div className='bg-backgroundLBlue flex justify-center py-9'>
                <a href='/cotizar'>
                    <button type="button" className=" text-white bg-backgroundBlue hover:bg-darkaquaLine focus:ring-4
                    focus:ring-blue-300 font-alegreyaMedium rounded-lg text-base px-5 py-2.5 me-2 mb-2
                    dark:bg-aquaLine dark:bg-aquaLine focus:outline-none dark:focus:ring-cyan-800" >Cotizar Servicios</button>
                </a>
            </div>



        </div>

    )
}

export default Servicios