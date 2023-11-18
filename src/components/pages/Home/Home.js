import React from 'react';
import { Box } from '@mui/material';
import Intro from '../../views/Intro/Intro';
import Catalog from '../../views/Catalog/Catalog';
import Shop from '../../views/Shop/Shop';
import Contact from '../../views/Contact/Contact';

const Home = () => {
  return (
    <Box component='section'>
      <Intro />
      <Shop />
      <Catalog />
      <Contact />
    </Box>
  );
};

export default Home;
