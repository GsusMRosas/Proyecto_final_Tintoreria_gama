import React from 'react';
import AppnameLi from "../components/appnameLi.js";


function Signin()
{
    return(
        <div>
            <AppnameLi/>
            <div className='bg-blue-50 flex items-center justify-center m-0'>
                    <div className=' text-center bg-gray-200 mx-60 my-20 px-60 py-20 rounded-xl'>
                        <h1 className='pb-10 font-bungee text-3xl text-backgroundBlue'>Crear cuenta</h1>
                        <form className='flex flex-col space-y-4 items-center'>
                            <label>Nombre</label>
                            <input type="text" name="nombre" />
                            <label>Correo</label>
                            <input type="text" name="correo" />
                            <label>Telefono</label>
                            <input type="text" name="telefono" />
                            <label>Contraseña</label>
                            <input type="password" name="contraseña" />
                            <label>Confirmar contraseña</label>
                            <input type="password" name="confcontraseña" />
                            <button class="button" type="submit" className="w-40 bg-white">Crear cuenta</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Signin;