import React from 'react';
import { Box, Typography } from '@mui/material';

const Card = ({ selectedRoute }) => {
  console.log(selectedRoute);
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Typography variant='h2'>{selectedRoute.route_id}</Typography>
      <Typography variant='h3'>{selectedRoute.route_name}</Typography>
      <Typography variant='p'>{selectedRoute.description}</Typography>
    </Box>
  );
};

export default Card;
