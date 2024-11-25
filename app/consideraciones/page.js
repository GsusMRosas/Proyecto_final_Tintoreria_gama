// page.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Consideraciones from '../components/Consideraciones'

export default function Considerar() {
  return (
    <div style={{ backgroundColor: '#F6FDFF', margin: 0, padding: 0, }}>
      <Header />
      <Consideraciones />
      <Footer />
    </div>
  );
}
