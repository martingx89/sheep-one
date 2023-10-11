import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ZOOM_LEVEL } from '../../../constants/mapSettings';
import { INITIAL_COORDS } from '../../../constants/initialData';
import { getMapData } from '../../../redux/reducers/mapRedux';
import styles from './Map.module.scss';
import { useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';
import LocateButton from '../../common/LocateButton/LocateButton';
import { createRoot } from 'react-dom/client';
import { FLY_TO_SETUP } from '../../../constants/mapSettings';
import { setUserPosition } from '../../../redux/actions/mapActions';

const getGPSLocation = (successCallback, errorCallback) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        successCallback({ latitude, longitude });
      },
      (error) => {
        errorCallback(error);
      }
    );
  } else {
    errorCallback({ message: 'Geolocation is not available' });
  }
};

const FindUserPosition = ({ ZOOM_LEVEL }) => {
  const [error, setError] = useState(null);
  const map = useMap();
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.map.userPosition);

  useEffect(() => {
    const refreshMap = () => {
      getGPSLocation(
        ({ latitude, longitude }) => {
          dispatch(setUserPosition({ latitude, longitude }));
          map.flyTo([latitude, longitude], ZOOM_LEVEL, FLY_TO_SETUP);
        },
        (error) => {
          setError(error);
        }
      );
    };

    if (!map) return;

    const buttonControl = L.control({
      position: 'bottomright',
    });

    buttonControl.onAdd = () => {
      buttonControl._div = L.DomUtil.create('div', 'myControl');

      const button = (
        <LocateButton onClick={refreshMap}>
          <MdGpsFixed />
        </LocateButton>
      );

      const root = createRoot(buttonControl._div);
      root.render(button);

      return buttonControl._div;
    };

    buttonControl.addTo(map);

    return () => {
      map.removeControl(buttonControl);
    };
  }, [map, userPosition, ZOOM_LEVEL, dispatch]);

  if (error) {
    return console.log(error.message);
  }

  return null;
};

const Map = () => {
  const map = useSelector(getMapData);
  console.log(map);

  const coordinates = [map.userPosition.latitude, map.userPosition.longitude];

  console.log(coordinates);

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
        <FindUserPosition ZOOM_LEVEL={ZOOM_LEVEL} />
      </MapContainer>
    </div>
  );
};

export default Map;
