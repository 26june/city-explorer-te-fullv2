import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function MyMap({ currentSearch }) {
  const { lat, lon } = currentSearch;

  function ChangeView({ lat, lon, zoom }) {
    const map = useMap();
    map.flyTo([lat, lon], zoom, { animate: true });
    return null;
  }

  return (
    <main className="myMapContainer">
      <MapContainer
        id="myMap"
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[lat, lon]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <ChangeView lat={lat} lon={lon} zoom={13}></ChangeView>
      </MapContainer>
    </main>
  );
}
