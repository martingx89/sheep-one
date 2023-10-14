import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';
import { setUserPosition } from '../../redux/actions/mapActions';
import { getGPSLocation } from '../../utils/locationReguest';
import LocateButton from '../common/LocateButton/LocateButton';
import StatusGPS from '../common/StatusGPS/StatusGPS';
import { FLY_TO_SETUP } from '../../constants/mapSettings';

const MapControls = ({ ZOOM_LEVEL }) => {
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
          setError(null);
        },
        (error) => {
          setError(error);
        }
      );
    };

    if (!map) return;

    const statusGPSControl = L.control({
      position: 'topright',
    });

    const buttonControl = L.control({
      position: 'bottomright',
    });

    statusGPSControl.onAdd = () => {
      statusGPSControl._div = L.DomUtil.create('div', 'status-gps-control');
      const statusGPS = <StatusGPS message={error ? error.message : 'Status OK'} error={error} />;
      const root = createRoot(statusGPSControl._div);
      root.render(statusGPS);
      return statusGPSControl._div;
    };

    buttonControl.onAdd = () => {
      buttonControl._div = L.DomUtil.create('div', 'locate-control');
      const button = (
        <LocateButton onClick={refreshMap}>
          <MdGpsFixed />
        </LocateButton>
      );
      const root = createRoot(buttonControl._div);
      root.render(button);
      return buttonControl._div;
    };

    statusGPSControl.addTo(map);
    buttonControl.addTo(map);

    return () => {
      map.removeControl(statusGPSControl);
      map.removeControl(buttonControl);
    };
  }, [map, userPosition, ZOOM_LEVEL, dispatch, error]);

  return null;
};

export default MapControls;
