import React from 'react'; 
import AppnameLi from "../components/appnameLi.js"; 
import Link from "next/link";

function Login() {
    return(
            <div>
                <AppnameLi/>
                <div className='bg-blue-50 flex items-center justify-center m-0'>
                    <div className=' text-center bg-gray-200 mx-60 my-20 px-60 py-20 rounded-xl'>
                        <h1 className='pb-10 font-bungee text-3xl text-backgroundBlue'>Inicio de sesión</h1>
                        <form className='flex flex-col space-y-4 items-center'>
                            <label>Correo</label>
                            <input type="text" name="correo" />
                            <label>Contraseña</label>
                            <input type="password" name="contraseña" />
                            <button type="submit" className="w-40 bg-white">Iniciar sesión</button>
                            <Link href="">¿No tienes una cuenta? Regístrate</Link>
                        </form>
                    </div>
                </div>
            </div>
               
    );
}

export default Login
