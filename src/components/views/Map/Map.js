import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ZOOM_LEVEL } from '../../../constants/mapSettings';
import { INITIAL_COORDS } from '../../../constants/initialData';
import { getMapData } from '../../../redux/reducers/mapRedux';
import FindUserPosition from '../../../utils/FindUserPosition';
import styles from './Map.module.scss';

const Map = () => {

  const map = useSelector(getMapData);
  console.log(map);

  
  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={INITIAL_COORDS} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={INITIAL_COORDS}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <FindUserPosition userPosition={INITIAL_COORDS} ZOOM_LEVEL={ZOOM_LEVEL}/>
      </MapContainer>
    </div>
  );
};

export default Map;
