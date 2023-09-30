import React from 'react';
import Carousel from '../../views/Carousel/Carousel';
import Column from '../../views/Column/Column';
import styles from './Catalog.module.scss'; // Import stylów SCSS

const Catalog = () => {
  return (
    <>
      <Carousel />
      <Column />
    </>
  );
};

export default Catalog;
