import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Map.module.scss';

const Map = () => {
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.userPosition);
  const [mapCenter, setMapCenter] = useState([49.4666648, 22.333332]); // Default center coordinates
  const zoomLevel = 13;

  useEffect(() => {
    const getUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch({ type: 'SET_USER_LOCATION', payload: [latitude, longitude] });
            setMapCenter([latitude, longitude]); // Update the map center based on user's location
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not available in this browser.');
      }
    };
    getUserLocation();
  }, [dispatch]);

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>
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
