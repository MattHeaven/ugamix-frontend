import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapComponent from '../components/MapComponent';


function Order() {

  return (

    <section className="bg-black text-white py-16 px-4">
      {/* Section 1: Availability */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Available <span className="text-[#ffe67b]">Where</span> You Are!
        </h2>
        <div className="mt-6">
          <img 
            src="hero-background.png" 
            alt="UgaMix Device" 
            className="w-full rounded-lg"
          />
        </div>
        <p className="mt-4 text-gray-300 text-sm">
          UgaMix is manufactured in collaboration with leading home appliance brands, ensuring high quality and reliability. Our devices are available through a network of distributors and service centers across the country.
        </p>
        <p className="mt-2 text-gray-300 text-sm">
          Need support? Visit one of our service points or contact our customer care team.
        </p>
      </div>

      {/* Section 2: Find in Shops */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          In a shop <span className="text-[#ffe67b]">near you!</span>
        </h2>
        <div className="mt-6 w-full h-96 rounded-lg overflow-hidden">
          {/* OpenStreetMap Integration */}
           <MapComponent />
        </div>
        <p className="mt-4 text-gray-300 text-sm">
          Experience the convenience, sustainability, and quality of UgaMix today.
        </p>
        <p className="mt-2 text-gray-300 text-sm">
          Need support? Visit one of our service points or contact our customer care team.
        </p>
      </div>
    </section>
  )
}

export default Order