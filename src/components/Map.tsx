"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import { useEffect } from "react";

// Corriger les icônes manquantes
delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const Map = () => {
  return (
    <MapContainer
      center={[3.848, 11.5021]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[3.848, 11.5021]}>
        <Popup>Yaoundé, Cameroun</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
