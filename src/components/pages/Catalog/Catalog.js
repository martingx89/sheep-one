import React, { useState } from 'react';
import Card from '../../views/Card/Card';
import Map from '../../views/Map/Map';
import { Grid, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getRouteById } from '../../../redux/reducers/routesRedux';
import useCounter from '../../../hooks/useCounter';

const Catalog = () => {
  const maxCount = useSelector((state) => state.routes.length);

  const [selectedID, setSelectedID] = useState(1);
  const { count, increment, decrement } = useCounter();

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

  const route = useSelector((state) => getRouteById(state, selectedID));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Map gpxTrack={route.gpx_track} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card selectedRoute={route} />
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement}>-</Button>
      </Grid>
    </Grid>
  );
};

export default Catalog;
