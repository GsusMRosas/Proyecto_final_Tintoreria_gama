// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Título */}
      <div className={styles.navigation}> 
        <h1 className={styles.title}>GAMA</h1>

        {/* Navegación */}
        <nav className={styles.nav}>
          <Link href="#" className={styles.link}>Inicio</Link>
          <Link href="../cotizar" className={styles.link}>Cotizar</Link>
          <Link href="#" className={styles.link}>Contacto</Link>
        </nav>
      </div>

      {/* Sección destacada */}
      <div className={styles.highlightSection}>
        <h1>¡LOS MEJORES SERVICIOS PARA TI Y PARA TU ROPA!</h1>

        {/* Contenedor de botones */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>INICIAR</button>
          <Link href="../consideraciones">
            <button className={`${styles.button} ${styles.secondary}`}>MÁS</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
