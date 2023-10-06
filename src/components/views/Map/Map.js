import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_COORDS } from '../../../constants/initialData';
import styles from './Map.module.scss';
import { fetchGPSData } from '../../../redux/userPositionRedux';

const Map = () => {
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.userPosition);
  const zoomLevel = 13;
  const [mapKey, setMapKey] = useState(0);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    dispatch(fetchGPSData());
  }, [dispatch]);

  const toggleRefreshing = () => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
      setRefreshInterval(null);
    } else {
      const intervalId = setInterval(() => {
        refreshMap();
        dispatch(fetchGPSData());
      }, 1000); // Odświeżanie co 1 sekundę
      setRefreshInterval(intervalId);
    }
  };

  const refreshMap = () => {
    setMapKey(mapKey + 1);
  };

  return (
    <div className={styles['map-container']}>
      <MapContainer key={mapKey} center={userPosition || INITIAL_COORDS} zoom={zoomLevel} scrollWheelZoom={true}>
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
      <button onClick={toggleRefreshing} className={styles['locate-button']}>
        {refreshInterval ? 'Zatrzymaj odświeżanie' : 'Rozpocznij odświeżanie'}
      </button>
      <button onClick={refreshMap} className={styles['locate-button']}>
        Zlokalizuj mnie
      </button>
    </div>
  );
};

export default Map;
