import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PageTitle from '../../common/PageTitle/PageTitle';
import Carousel from '../../views/Carousel/Carousel';

const Home = () => {
  return (
    <Container>
      <PageTitle>Oferta</PageTitle>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Carousel />
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum laudantium totam itaque mollitia
              molestiae consequatur. Autem, obcaecati dolor vel voluptates, est sit, nam sint saepe veritatis ipsum
              reiciendis esse?
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
