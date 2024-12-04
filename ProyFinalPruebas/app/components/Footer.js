// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
  <div className="flex justify-between items-center bg-backgroundBlue text-white p-5  text-sm">
    <p className="m-0">© Tintorería GAMA 2024. Todos los Derechos Reservados</p>
    <nav className="flex gap-2">
      <Link href="#" className="text-white no-underline transition-colors duration-300 hover:text-[#53A7BF]">Política de Privacidad</Link>
      <span className="text-white">|</span>
      <Link href="#" className="text-white no-underline transition-colors duration-300 hover:text-[#53A7BF]">Términos de Uso</Link>
    </nav>
  </div>

  );
}
