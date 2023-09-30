import React from 'react';
import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.wrapper}>
      <img src='map.jpg' alt='map' />
      <h2>Sample data</h2>
    </div>
  );
}

export default Card;
