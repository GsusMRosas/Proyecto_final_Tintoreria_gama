"use client";

import Appname from "./components/appname";
import Navbar from "./components/navbar";
import Pie from "./components/pie";
import Servicios from "./components/servicios";
import Ubicacion from "./components/ubicacion";
import { useEffect } from "react";

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
    <Navbar/>
    <Appname/>
    <Servicios />
    <Ubicacion/>
    <Pie/>
  
    </div>
  )
}