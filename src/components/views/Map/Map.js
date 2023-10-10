import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ZOOM_LEVEL } from '../../../constants/mapSettings';
import styles from './Map.module.scss';
import { UserPosition } from '../../features/UserPosition';
import FindUserPosition from '../../../utils/mapUtils';
import { useSelector } from 'react-redux';

const Map = () => {
  const newCoordinates = useSelector((state) => state.userData);

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={newCoordinates} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={newCoordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <FindUserPosition />
      </MapContainer>
      <UserPosition />
    </div>
  );
};

export default Map;
