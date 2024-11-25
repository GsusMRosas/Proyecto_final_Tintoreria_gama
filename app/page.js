// page.js
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F6FDFF', margin: 0, padding: 0, }}>
      <Header />
      <Link href="/cotizar">Cotizar</Link>
      <Link href="/consideraciones">Consideraciones</Link>
      <Footer />
    </div>
  );
}
