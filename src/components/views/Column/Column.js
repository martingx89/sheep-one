import React from 'react';
import Card from '../Card/Card';
import styles from './Column.module.scss';

const Column = () => {
  return (
    <div className={styles.Column}>
      <Card />
    </div>
  );
};

export default Column;
