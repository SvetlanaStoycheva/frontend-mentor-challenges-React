import React from 'react';
import { useGlobalContext } from './context';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMap = () => {
  const { currentIPData } = useGlobalContext();
  // console.log(currentIPData);

  const { lat, lng } = currentIPData;

  if (lat && lng) {
    return (
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  } else return [];
};

export default MyMap;
//Sofia 42.69751, 23.32415
//London 51.505, -0.09
