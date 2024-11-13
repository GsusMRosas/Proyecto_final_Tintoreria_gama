"use client";

import React, { useEffect, useState } from "react";
import AppnameLi from "../components/appnameLi.js";

function Profile() {
    return (
        <div>
            <AppnameLi />
            <div className="bg-blue-50 flex">
                <div className="bg-gray-200 p-20 mx-10 my-20 space-y-6 text-center">
                    <h1 className='pb-10 font-bungee text-3xl text-backgroundBlue'>Perfil</h1>
                    <p>Nombre: </p>
                    <p>Correo: </p>
                    <p>Telefono: </p>
                    <button type="submit" className="w-40 bg-white">Actualizar perfil</button>
                </div>
                <div className="bg-gray-200 px-20 py-20 my-20 mx-10">
                    <div>
                        <h1 className="pb-10 font-bungee text-xl text-backgroundBlue">Pedido actual</h1>
                    </div>
                    <div>
                        <h1 className="pb-10 font-bungee text-xl text-backgroundBlue">Historial de pedidos</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;