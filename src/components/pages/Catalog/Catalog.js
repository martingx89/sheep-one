import React from 'react';
import PageSubTitle from '../../common/PageSubTitle/PageSubTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import Column from '../../views/Column/Column';
import Map from '../../views/Map/Map';
import styles from './Catalog.module.scss'; // Import stylów SCSS

const Catalog = () => {
  return (
    <>
      <PageTitle className={styles.wrapper}>Trasy rowerowe</PageTitle>
      <PageSubTitle>w twojej okolicy</PageSubTitle>
      <Map />
      <Column />
    </>
  );
};

export default Catalog;
