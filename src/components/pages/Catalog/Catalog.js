import React from 'react';
import Card from '../../views/Card/Card';
import Map from '../../views/Map/Map';
import styles from './Catalog.module.scss'; // Import stylów SCSS

const Catalog = () => {
  return (
    <div className={styles['catalog-wrapper']}>
      <Map className='item1' />
      <Card className='item2' />
    </div>
  );
};

export default Catalog;
