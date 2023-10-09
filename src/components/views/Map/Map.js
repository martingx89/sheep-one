import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import FindUserPosition from '../../../utils/mapUtils';
import { INITIAL_COORDS } from '../../../constants/initialData';
import { ZOOM_LEVEL } from '../../../constants/mapSettings';
import styles from './Map.module.scss';

const Map = () => {
  const userPosition = useSelector((state) => state.userPosition);

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={userPosition || INITIAL_COORDS} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={userPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <FindUserPosition userPosition={userPosition} ZOOM_LEVEL={ZOOM_LEVEL} />
      </MapContainer>
    </div>
  );
};

export default Map;
