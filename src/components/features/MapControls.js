import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { setUserPosition } from '../../redux/actions/mapActions';
import { getGPSLocation } from '../../utils/locationReguest';
import LocateButton from '../common/LocateButton/LocateButton';
import { FLY_TO_SETUP } from '../../constants/mapSettings';
import { MdGpsFixed } from 'react-icons/md';

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

export default MapControls;
