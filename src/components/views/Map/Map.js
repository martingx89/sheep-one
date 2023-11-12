import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import MapControls from '../../features/MapControls';
import { getMapData } from '../../../redux/reducers/mapRedux';
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { INITIAL_COORDS, ZOOM_LEVEL } from '../../../constants/pageSetup';
import styled from 'styled-components';

const MapContainerWrapper = styled(MapContainer)`
  height: 320px;

  @media (min-width: 600px) {
    height: 400px;
  }
`;

const Map = () => {
  const map = useSelector(getMapData);
  const routes = useSelector(getRoutesData);

  const coordinates = [
    map.userPosition ? map.userPosition.latitude : INITIAL_COORDS[0],
    map.userPosition ? map.userPosition.longitude : INITIAL_COORDS[1],
  ];

  const center = coordinates;

  return (
    <div>
      <MapContainerWrapper center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={false}>
        <MapControls ZOOM_LEVEL={ZOOM_LEVEL} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {routes.map((route, index) => (
          <Polyline key={index} positions={route.gpx_track} color='red' />
        ))}
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainerWrapper>
    </div>
  );
};

export default Map;
