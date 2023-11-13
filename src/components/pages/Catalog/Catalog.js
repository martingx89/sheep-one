import React from 'react';
import Card from '../../views/Card/Card';
import Map from '../../views/Map/Map';
import { Grid } from '@mui/material';

const Catalog = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Map />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default Catalog;
