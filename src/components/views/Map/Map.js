import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import { INITIAL_COORDS } from '../../../constants/initialData';
import { getMapData } from '../../../redux/reducers/mapRedux';
import styles from './Map.module.scss';
import { useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import L from 'leaflet';
import LocateButton from '../../common/LocateButton/LocateButton';
import { setUserPosition } from '../../../redux/actions/mapActions';
import { MdGpsFixed } from 'react-icons/md';
import { createRoot } from 'react-dom/client';
import { FLY_TO_SETUP, ZOOM_LEVEL } from '../../../constants/mapSettings'; // Import FLY_TO_SETUP
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { getGPSLocation } from '../../../utils/locationReguest';

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
          map.flyTo([latitude, longitude], ZOOM_LEVEL, FLY_TO_SETUP); // Use FLY_TO_SETUP from constants
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
  const routes = useSelector(getRoutesData);

  const coordinates = [
    map.userPosition ? map.userPosition.latitude : INITIAL_COORDS[0],
    map.userPosition ? map.userPosition.longitude : INITIAL_COORDS[1],
  ];

  console.log(coordinates);

  const center = coordinates;

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={false}>
        <FindUserPosition ZOOM_LEVEL={ZOOM_LEVEL} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Polyline positions={routes[8].gpx_track} color='red' />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
