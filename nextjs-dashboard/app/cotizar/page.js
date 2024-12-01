import Navbar from "../components/navbar";
import Appname from "../components/appname";
import Pie from '../components/pie';
import CotizarForm from '../components/cotizarForm';

export default function Cotizar() {
  return (
    <div style={{ backgroundColor: '#F6FDFF'}}>
      <Navbar />
      <Appname />
      <hr className='bg-backgroundLBlue h-1 border-0'/>
      <hr className='bg-aquaLine h-1 border-0'/>
      <CotizarForm />
      <Pie />
    </div>
  );
}
