// components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css'; // Importa un archivo CSS

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© Tintorería GAMA 2024. Todos los Derechos Reservados</p>
      <nav className={styles.nav}>
        <Link href="#" className={styles.link}>Política de Privacidad</Link>
        <span className={styles.separator}>|</span>
        <Link href="#" className={styles.link}>Términos de Uso</Link>
      </nav>
    </footer>
  );
}
