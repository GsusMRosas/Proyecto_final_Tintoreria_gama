"use client";

import Appname from "./components/appname";
import Navbar from "./components/navbar";
import Servicios from "./components/servicios";
import Ubicacion from "./components/ubicacion";
import Map from "./components/map";
import Pie from "./components/pie";
import { useEffect } from "react";

 // <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />

export default function Home() {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/users");
        const response = await data.json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className=" bg-backgroundBlue " >
      <div className="flex">
        <Appname/>
        <Navbar/>
      </div>
    <Servicios />
    <Ubicacion/>
    
    <Pie/>
  
    </div>
  )
}