import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';

const Map = () => {
  const position = [49.4701, 22.33042]; // [latitude, longitude]
  const zoomLevel = 13;

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eum!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
