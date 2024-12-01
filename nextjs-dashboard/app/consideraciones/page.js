// page.js
import Navbar from "../components/navbar";
import Appname from "../components/appname";
import Pie from '../components/pie';
import Consideraciones from '../components/consideraciones'

export default function Considerar() {
  return (
    <div style={{ backgroundColor: '#F6FDFF', margin: 0, padding: 0, }}>
      <Navbar />
      <Appname />
      <hr className='bg-backgroundLBlue h-1 border-0'/>
      <hr className='bg-aquaLine h-1 border-0'/>
      <Consideraciones />
      <Pie />
    </div>
  );
}
