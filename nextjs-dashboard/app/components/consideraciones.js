import styles from './consideraciones.module.css';

export default function Consideraciones() {
  return (
    <section>
      <h1 className='font-bungee text-backgroundBlue text-4xl flex justify-center py-9'>CONSIDERACIONES</h1>
      <div className={styles.card}>
        <h2 className='font-bungee text-2xl text-backgroundBlue'>PARA ROPA EN GENERAL:</h2>
        <br />
        <ul className={styles.list}>
          <li className='font-alegreyaMedium  text-gray-700'>
            No se recibirá ropa que venga con un exceso de pelo proveniente de algún animal, como perros o gatos. Esto debido a temas de salubridad.
          </li>
          <br />
          <li className='font-alegreyaMedium  text-gray-700'>
            El costo de servicio para prendas individuales podrá cambiar dependiendo de las condiciones en las que se reciba dicha prenda. Pues el servicio se podría ver modificado.
          </li>
          <br />
          <li className='font-alegreyaMedium  text-gray-700'>
            Si alguna prenda requiere de procesos o cuidados específicos, el cliente deberá hacerlo saber en el apartado de “Observaciones”. De lo contrario, el negocio no se hará responsable de cualquier tipo de daño a la prenda.
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <h2 className='font-bungee text-2xl text-backgroundBlue'>PARA ROPA INTERIOR:</h2>
        <br />
        <ul className={styles.list}>
          <li className='font-alegreyaMedium  text-gray-700'>
            Por temas de seguridad y de salud, no se recibirá ningún tipo de ropa interior, independientemente de cualquier característica de las prendas.
          </li>
          <br />
          <li className='font-alegreyaMedium  text-gray-700'>
            Si alguna prenda de ropa interior es ocultada por el cliente, se optará alguna de las siguientes opciones:
            <ul className={styles.sublist}>
              <li className='font-alegreyaMedium  text-gray-700'>No se realizará el servicio y se devolverá la ropa al cliente.</li>
              <li className='font-alegreyaMedium  text-gray-700'>Se realizará el servicio pero se cobrará una comisión extra.</li>
            </ul>
          </li>
          <br />
        </ul>
      </div>
    </section>
  );
}
