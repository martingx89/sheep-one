import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { incrementCounter, decrementCounter } from '../../../redux/actions/counterActions';
import { Box, Button, Typography } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Card() {
  const routes = useSelector(getRoutesData);
  const dispatch = useDispatch();

  const [selectedRoute, setSelectedRoute] = useState(1);

  const handleIncrement = useCallback(() => {
    if (selectedRoute < routes.length) {
      setSelectedRoute(selectedRoute + 1);
      dispatch(incrementCounter());
    }
  }, [selectedRoute, routes, dispatch]);

  const handleDecrement = useCallback(() => {
    if (selectedRoute > 1) {
      setSelectedRoute(selectedRoute - 1);
      dispatch(decrementCounter());
    }
  }, [selectedRoute, dispatch]);

  const currentRoute = routes.find((route) => route.route_id === selectedRoute);

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Button onClick={handleDecrement} disabled={selectedRoute === 1}>
        <FaArrowLeft />
      </Button>
      <Box>
        <Typography variant='h2'>Numer trasy: {selectedRoute}</Typography>
        <Typography variant='h3'>Tytuł trasy: {currentRoute ? currentRoute.route_name : ''}</Typography>
      </Box>
      <Button onClick={handleIncrement} disabled={selectedRoute === routes.length}>
        <FaArrowRight />
      </Button>
    </Box>
  );
}

export default Card;
