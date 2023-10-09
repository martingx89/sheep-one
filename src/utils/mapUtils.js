import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';
import LocateButton from '../components/common/LocateButton/LocateButton';

const FindUserPosition = ({ userPosition, ZOOM_LEVEL }) => {
  const map = useMap();

  useEffect(() => {
    const refreshMap = () => {
      map.flyTo([userPosition[0], userPosition[1]], ZOOM_LEVEL);
    };

    if (!map) return;

    const buttonControl = L.control({
      position: 'bottomright',
    });

    buttonControl.onAdd = () => {
      buttonControl._div = L.DomUtil.create('div', 'myControl');

      const customButton = (
        <LocateButton onClick={refreshMap}>
          <MdGpsFixed />
        </LocateButton>
      );
      ReactDOM.render(customButton, buttonControl._div);

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
