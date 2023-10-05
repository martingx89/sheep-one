import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_COORDS } from '../../../constants/initialData';
import styles from './Map.module.scss';
import { fetchGPSData } from '../../../redux/userPositionRedux';

const Map = () => {
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.userPosition);
  const zoomLevel = 13;

  useEffect(() => {
    dispatch(fetchGPSData());
  }, [dispatch]);

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={userPosition || INITIAL_COORDS} zoom={zoomLevel} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {userPosition && (
          <Marker position={userPosition}>
            <Popup>Your current location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
