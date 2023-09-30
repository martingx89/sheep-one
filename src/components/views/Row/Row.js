import React from 'react';
import styles from './Row.module.scss';

function Row() {
  return (
    <div className={styles.wrapper}>
      <img src='map.jpg' alt='map' />
      <h2>Sample data</h2>
    </div>
  );
}

export default Row;
