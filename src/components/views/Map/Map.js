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

  // Dodajemy nowy stan do przechowywania czasu odświeżania
  const [refreshInterval, setRefreshInterval] = useState(1000); // 1 sekunda

  useEffect(() => {
    dispatch(fetchGPSData());
  }, [dispatch]);

  // Funkcja do rozpoczęcia odświeżania
  const startRefreshing = () => {
    const intervalId = setInterval(() => {
      dispatch(fetchGPSData()); // Pobieramy najnowszą pozycję GPS
    }, refreshInterval);

    // Zapisujemy identyfikator interwału w stanie komponentu
    setMapKey(mapKey + 1);
    setRefreshInterval(intervalId);
  };

  // Funkcja do zatrzymania odświeżania
  const stopRefreshing = () => {
    clearInterval(refreshInterval); // Zatrzymujemy interwał
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
      <button onClick={startRefreshing} className={styles['locate-button']}>
        Rozpocznij odświeżanie
      </button>
      <button onClick={stopRefreshing} className={styles['locate-button']}>
        Zatrzymaj odświeżanie
      </button>
    </div>
  );
};

export default Map;
