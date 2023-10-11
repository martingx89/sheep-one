import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';
import LocateButton from '../components/common/LocateButton/LocateButton';
import { createRoot } from 'react-dom/client';
import { usePosition } from 'use-position';
import { FLY_TO_SETUP } from '../constants/mapSettings';


const FindUserPosition = ({ userPosition, ZOOM_LEVEL }) => {

  const watch = true;
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } = usePosition(watch);

  console.log(latitude, longitude);

  const map = useMap();

  useEffect(() => {
    const refreshMap = () => {
      map.flyTo([latitude, longitude], ZOOM_LEVEL, FLY_TO_SETUP);
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
  }, [map, latitude, longitude, ZOOM_LEVEL]);

  return null;
};

export default FindUserPosition;
