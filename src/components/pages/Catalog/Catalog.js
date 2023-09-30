import React from 'react';
import PageSubTitle from '../../common/PageSubTitle/PageSubTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import Carousel from '../../views/Carousel/Carousel';
import Column from '../../views/Column/Column';
import styles from './Catalog.module.scss'; // Import stylów SCSS

const Catalog = () => {
  return (
    <>
      <PageTitle className={styles.wrapper}>Trasy rowerowe</PageTitle>
      <PageSubTitle>w twojej okolicy</PageSubTitle>
      <Carousel />
      <Column />
    </>
  );
};

export default Catalog;
