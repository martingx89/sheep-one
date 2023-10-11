import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';
import LocateButton from '../components/common/LocateButton/LocateButton';
import { createRoot } from 'react-dom/client';
import { usePosition } from 'use-position';
import { FLY_TO_SETUP } from '../constants/mapSettings';
import { setUserPosition } from '../redux/actions/mapActions'

const FindUserPosition = ({ ZOOM_LEVEL }) => {
  const watch = true;
  const { latitude, longitude } = usePosition(watch);

  const map = useMap();
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.map.userPosition);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(setUserPosition({ latitude, longitude }));
    }
  }, [latitude, longitude, dispatch]);

  useEffect(() => {
    if (!map) return;

    const refreshMap = () => {
      map.flyTo([userPosition.latitude, userPosition.longitude], ZOOM_LEVEL, FLY_TO_SETUP);
    };

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
  }, [map, userPosition, ZOOM_LEVEL]);

  return null;
};

export default FindUserPosition;