import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGPSData } from '../../../redux/userPositionRedux';
import { INITIAL_COORDS } from '../../../constants/initialData';
import { ZOOM_LEVEL } from '../../../constants/mapSettings';
import LocateButton from '../../common/LocateButton/LocateButton';
import styles from './Map.module.scss';
import L from 'leaflet';
import { MdGpsFixed } from 'react-icons/md';

const Map = () => {
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.userPosition);

  useEffect(() => {
    dispatch(fetchGPSData());
  }, [dispatch]);

  const CustomButtonControl = () => {
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
    }, [map]); // Removed unnecessary dependencies here

    return null;
  };

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={userPosition || INITIAL_COORDS} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={userPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <CustomButtonControl />
      </MapContainer>
    </div>
  );
};

export default Map;
