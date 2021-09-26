import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
function MyMap({ x, y }) {
  return (
    <MapContainer center={[x, y]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[x, y]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
//Sofia 42.69751, 23.32415
//London 51.505, -0.09
