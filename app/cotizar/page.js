// page.js
import Header from '../components/Header';
import CotizarForm from '../components/CotizarForm';
import Footer from '../components/Footer';

export default function Cotizar() {
  return (
    <div style={{ backgroundColor: '#F6FDFF', margin: 0, padding: 0, }}>
      <Header />
      <CotizarForm />
      <Footer />
    </div>
  );
}
