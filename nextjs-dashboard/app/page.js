import Appname from "./components/appname";
import Navbar from "./components/navbar";
import Servicios from "./components/servicios";
import Ubicacion from "./components/ubicacion";
import Map from "./components/map";
import Pie from "./components/pie";

 // <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />

export default function Home() {
  return (

    <div className=" bg-backgroundBlue " >
    <Navbar/>
    <Appname/>
    <Servicios />
    <Ubicacion/>
    <Pie/>
  
    </div>
  )
}