import React from 'react';
import { useSelector } from 'react-redux';
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { Box } from '@mui/material';

function Card() {
  const routes = useSelector(getRoutesData);
  return <Box display='flex' alignItems='center' justifyContent='space-between'></Box>;
}

export default Card;
