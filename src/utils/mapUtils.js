import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';
import LocateButton from '../components/common/LocateButton/LocateButton';
import { createRoot } from 'react-dom/client';
import { FLY_TO_SETUP } from '../constants/mapSettings';
import { useDispatch } from 'react-redux';
import { usePosition } from 'use-position';
import { requestGetGPS } from '../redux/userPositionRedux';

const FindUserPosition = ({ ZOOM_LEVEL }) => {
  const dispatch = useDispatch();
  const watch = false;
  const { latitude, longitude } = usePosition(watch);
  const map = useMap();

  useEffect(() => {
    const updateGPSData = () => {
      dispatch(requestGetGPS(latitude, longitude));
      map.flyTo([latitude, longitude], ZOOM_LEVEL, FLY_TO_SETUP);
    };

    if (!map) return;

    const buttonControl = L.control({
      position: 'bottomright',
    });

    buttonControl.onAdd = () => {
      buttonControl._div = L.DomUtil.create('div', 'myControl');

      const button = (
        <LocateButton onClick={updateGPSData}>
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
  }, [map, latitude, longitude, dispatch, ZOOM_LEVEL]);

  return null;
};

export default FindUserPosition;
