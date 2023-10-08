import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGPSData } from '../../../redux/userPositionRedux';
import { INITIAL_COORDS } from '../../../constants/initialData';
import LocateButton from '../../common/LocateButton/LocateButton';
import styles from './Map.module.scss';

const Map = () => {
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.userPosition);
  const zoomLevel = 13;
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    dispatch(fetchGPSData());
  }, [dispatch]);

  const refreshMap = () => {
    setMapKey(mapKey + 1);
  };

  return (
    <div className={styles['map-wrapper']}>
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
      <div className={styles['map-controls']}>
        <LocateButton onClick={refreshMap}>Where I'm</LocateButton>
      </div>
    </div>
  );
};

export default Map;
