"use client";
import React from "react";

function Ubicacion(){
    return (
        <div>
            <hr className='bg-backgroundBlue h-1 border-0'/>
            <hr className='bg-backgroundWhite h-1 border-0'/>
            <hr className='bg-aquaLine h-1 border-0'/>

            
            <h1 className='bg-backgroundWhite font-bungee text-backgroundBlue text-4xl flex justify-center py-9'>UBICACIÓN</h1>

                 <div className=' text-center  p-4 bg-backgroundWhite flex flex-row justify-center space-x-36'>
                    <div>
                        <img className=" h-auto max-w-md rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]" src="/imagenes/ubicacion.png" alt="Ubicacion"></img>
                        <figcaption className='font-alegreyaMedium  text-gray-700'>San Agustín del Retablo 163,
                             El Retablo, 76150 Santiago de Querétaro, Qro.</figcaption>

                    </div>

                    <div className='bg-backgroundWhite flex justify-center items-center'>
                        <a href="https://www.google.com/maps/place/Tintorer%C3%ADa+Gama/@20.5975493,-100.4112486,17z/data=!3m1!4b1!4m6!3m5!1s0x85d35acfaf465925:0x31af3a98fddaed77!8m2!3d20.5975493!4d-100.4086737!16s%2Fg%2F1tcxq07v?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <button  type="button"  className=" text-white bg-backgroundBlue hover:bg-darkaquaLine focus:ring-4
                         focus:ring-blue-300 font-alegreyaMedium rounded-lg text-base px-5 py-2.5 me-2 mb-2
                         dark:bg-aquaLine dark:bg-aquaLine focus:outline-none dark:focus:ring-cyan-800 h-12 " >Ver en Mapas</button>
                         </a>

                     </div>



                </div>
        </div>
    )
}

export default Ubicacion