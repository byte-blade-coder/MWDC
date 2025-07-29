import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Dummy points
const dummyPoints = [
  { lat: 33.6844, lng: 73.0479, title: "Islamabad" },
  { lat: 24.8607, lng: 67.0011, title: "Karachi" },
  { lat: 31.5204, lng: 74.3587, title: "Lahore" }
];

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

const MapView = () => {
  return (
    <div>
    <MapContainer center={[30.3753, 69.3451]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dummyPoints.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]}>
          <Popup>{point.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default MapView;
