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

  const coordinates = [map.userPosition.latitude, map.userPosition.longitude];

  console.log(coordinates)

  const center = coordinates || INITIAL_COORDS;
  
  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <FindUserPosition ZOOM_LEVEL={ZOOM_LEVEL}/>
      </MapContainer>
    </div>
  );
};

export default Map;
