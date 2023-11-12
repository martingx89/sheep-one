import React from 'react';
import { useSelector } from 'react-redux';
import { getRouteById } from '../../../redux/reducers/routesRedux';
import { Box } from '@mui/material';

const Card = ({ routeId }) => {
  const route = useSelector((state) => getRouteById(state, routeId));
  console.log(route);

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      {/* Render content based on the selected route */}
    </Box>
  );
};

export default Card;
