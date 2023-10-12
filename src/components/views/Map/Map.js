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
import { FLY_TO_SETUP, HIGH_ACCURACY, TIMEOUT, ZOOM_LEVEL } from '../../../constants/mapSettings'; // Import FLY_TO_SETUP
import { getRoutesData } from '../../../redux/reducers/routesRedux';

const getGPSLocation = (successCallback, errorCallback) => {
  if ('geolocation' in navigator) {
    const options = {
      enableHighAccuracy: HIGH_ACCURACY,
      timeout: TIMEOUT
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        successCallback({ latitude, longitude });
      },
      (error) => {
        errorCallback(error);
      },
      options
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
  console.log(routes);

  const coordinates = [
    map.userPosition ? map.userPosition.latitude : INITIAL_COORDS[0],
    map.userPosition ? map.userPosition.longitude : INITIAL_COORDS[1],
  ];

  console.log(coordinates);

  const center = coordinates;

  const polylineCoordinates = [
    [49.469095, 22.350578],
    [49.4691, 22.350588],
    [49.469153, 22.350551],
    [49.469182, 22.350534],
    [49.469211, 22.350534],
    [49.469246, 22.350534],
    [49.469287, 22.350542],
    [49.469351, 22.350588],
    [49.469433, 22.350632],
    [49.469503, 22.350659],
    [49.469533, 22.350659],
    [49.469585, 22.350659],
    [49.469667, 22.350659],
    [49.469783, 22.350651],
    [49.469871, 22.350641],
    [49.470303, 22.350569],
    [49.470367, 22.350561],
    [49.47042, 22.350542],
    [49.470495, 22.350515],
    [49.470548, 22.350471],
    [49.470595, 22.350435],
    [49.470624, 22.350398],
    [49.470665, 22.350335],
    [49.470723, 22.350219],
    [49.470851, 22.349886],
    [49.470962, 22.349617],
    [49.471015, 22.3495],
    [49.47105, 22.349393],
    [49.471097, 22.34923],
    [49.471143, 22.34906],
    [49.471231, 22.348817],
    [49.471289, 22.348656],
    [49.471336, 22.348557],
    [49.471423, 22.348431],
    [49.471511, 22.348314],
    [49.471611, 22.348161],
    [49.47171, 22.348001],
    [49.47178, 22.347857],
    [49.471873, 22.347668],
    [49.471937, 22.347542],
    [49.472077, 22.347345],
    [49.472206, 22.347219],
    [49.472358, 22.347066],
    [49.472451, 22.346932],
    [49.472591, 22.346725],
    [49.472685, 22.346607],
    [49.472825, 22.34649],
    [49.472912, 22.346419],
    [49.473023, 22.346347],
    [49.473158, 22.346284],
    [49.473315, 22.346177],
    [49.473402, 22.346114],
    [49.473654, 22.345916],
    [49.473799, 22.345827],
    [49.474243, 22.345557],
    [49.474383, 22.345324],
    [49.474488, 22.345081],
    [49.474535, 22.345009],
    [49.47457, 22.344946],
    [49.474593, 22.344882],
    [49.474623, 22.344811],
    [49.474704, 22.344595],
    [49.474727, 22.344515],
    [49.474745, 22.344461],
    [49.474763, 22.344362],
    [49.474768, 22.344219],
    [49.474768, 22.344083],
    [49.474763, 22.344012],
    [49.474733, 22.343922],
    [49.474675, 22.343814],
    [49.47457, 22.343437],
    [49.474547, 22.34341],
    [49.474547, 22.34341],
    [49.47433, 22.343114],
    [49.474132, 22.342951],
    [49.474021, 22.342888],
    [49.473706, 22.342861],
    [49.473361, 22.342853],
    [49.473052, 22.342628],
    [49.473005, 22.342584],
    [49.472819, 22.342475],
    [49.472638, 22.342385],
    [49.472247, 22.342125],
    [49.471949, 22.341829],
    [49.471692, 22.341433],
    [49.471517, 22.341011],
    [49.471418, 22.340706],
    [49.471359, 22.340508],
    [49.471301, 22.339898],
    [49.471289, 22.339592],
    [49.471295, 22.339313],
    [49.471289, 22.339143],
    [49.471295, 22.338837],
    [49.471313, 22.338469],
    [49.471354, 22.338001],
    [49.471377, 22.33767],
    [49.471412, 22.337185],
    [49.471423, 22.337005],
    [49.471482, 22.336592],
    [49.471523, 22.33625],
    [49.471529, 22.33616],
    [49.471523, 22.336053],
    [49.47147, 22.335496],
    [49.47147, 22.335424],
    [49.471436, 22.33511],
    [49.4714, 22.33475],
    [49.471342, 22.334282],
    [49.471336, 22.334158],
    [49.47133, 22.334076],
    [49.471336, 22.333969],
    [49.471359, 22.333726],
    [49.471377, 22.333573],
    [49.471377, 22.33351],
    [49.471377, 22.33342],
    [49.471365, 22.333205],
    [49.471342, 22.332881],
    [49.471342, 22.332881],
    [49.471342, 22.332827],
    [49.471342, 22.332774],
    [49.471348, 22.33272],
    [49.471359, 22.332674],
    [49.471371, 22.33264],
  ];

  return (
    <div className={styles['map-wrapper']}>
      <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
        <FindUserPosition ZOOM_LEVEL={ZOOM_LEVEL} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Polyline positions={polylineCoordinates} color='red' />
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
