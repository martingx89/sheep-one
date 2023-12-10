import React, { useState, useEffect } from 'react';
import Card from '../../common/Card/Card';
import Map from '../Map/Map';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { getRouteById } from '../../../redux/reducers/routesRedux';
import useCounter from '../../../hooks/useCounter';
import { Wrapper } from '../../common/Wrapper/Wrapper';
import AppButton from '../../common/Button/AppButton';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Catalog = () => {
  const maxCount = useSelector((state) => state.routes.length);

  const [selectedID, setSelectedID] = useState(1);
  const route = useSelector((state) => getRouteById(state, selectedID));

  const { count, increment, decrement } = useCounter(1);
  const [middlePoint, setMiddlePoint] = useState(null);

  useEffect(() => {
    if (route && route.gpx_track && route.gpx_track.length > 0) {
      const trackPoints = route.gpx_track;
      const totalPoints = trackPoints.length;

      const middleIndex = Math.floor(totalPoints / 2);

      const middleCoordinates = [trackPoints[middleIndex][0], trackPoints[middleIndex][1]];

      setMiddlePoint(middleCoordinates);
    }
  }, [route]);

  console.log(middlePoint);

  const handleIncrement = () => {
    if (count < maxCount) {
      increment();
      setSelectedID(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      decrement();
      setSelectedID(count - 1);
    }
  };

  return (
    <Wrapper component={'section'}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Map gpxTrack={route.gpx_track} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card selectedRoute={route} />
          <AppButton onClick={handleIncrement}>
            <FaPlus />
          </AppButton>
          <AppButton onClick={handleDecrement}>
            <FaMinus />
          </AppButton>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Catalog;
