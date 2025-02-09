import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <MapContainer
        center={[-1.286389, 36.817223]} // Nairobi coordinates
        zoom={12}
        style={{ width: "100%", height: "100%" }} // Ensure it takes full height
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
