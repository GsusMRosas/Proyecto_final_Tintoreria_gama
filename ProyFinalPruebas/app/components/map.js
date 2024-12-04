"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);
  
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      
      // Crea el mapa si el contenedor `mapRef` está disponible
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Realiza la geocodificación de la dirección
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error("Geocode no fue exitoso: " + status);
        }
      });
    });
  }, [address]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
}

export default Map;
