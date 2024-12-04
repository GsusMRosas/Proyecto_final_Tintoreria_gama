import React from 'react';

export default function Consideraciones() {
  return (
    <section>
      <h1 className="text-center text-2xl font-bold mt-10 text-backgroundBlue font-bungee">CONSIDERACIONES</h1>

      {/* Sección para ropa en general */}
      <div className="mx-20 bg-gray-200 p-8 my-8 mx-auto rounded-lg shadow-md ">
        <h2 className="pb-10 font-bungee text-xl text-aquaLine">PARA ROPA EN GENERAL:</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg font-alegreyaMedium">
          <li className="mb-4 font-alegreyaMedium">
            No se recibirá ropa que venga con un exceso de pelo proveniente de algún animal, como perros o gatos. Esto debido a temas de salubridad.
          </li>
          <li className="mb-4 font-alegreyaMedium">
            El costo de servicio para prendas individuales podrá cambiar dependiendo de las condiciones en las que se reciba dicha prenda. Pues el servicio se podría ver modificado.
          </li>
          <li className="mb-4 font-alegreyaMedium">
            Si alguna prenda requiere de procesos o cuidados específicos, el cliente deberá hacerlo saber en el apartado de “Observaciones”. De lo contrario, el negocio no se hará responsable de cualquier tipo de daño a la prenda.
          </li>
        </ul>
      </div>

      {/* Sección para ropa interior */}
      <div className="bg-gray-200 p-8 my-8 mx-auto rounded-lg shadow-md mx-20">
        <h2 className="pb-10 font-bungee text-xl text-aquaLine">PARA ROPA INTERIOR:</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg font-alegreyaMedium">
          <li className="mb-4 font-alegreyaMedium">
            Por temas de seguridad y de salud, no se recibirá ningún tipo de ropa interior, independientemente de cualquier característica de las prendas.
          </li>
          <li className="mb-4">
            Si alguna prenda de ropa interior es ocultada por el cliente, se optará alguna de las siguientes opciones:
            <ul className="list-circle pl-5 text-gray-600">
              <li className="mb-4 font-alegreyaMedium">No se realizará el servicio y se devolverá la ropa al cliente.</li>
              <li className="mb-4 font-alegreyaMedium">Se realizará el servicio pero se cobrará una comisión extra.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
