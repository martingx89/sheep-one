import React from 'react';
import styles from './StatusGPS.module.scss';

const StatusGPS = ({ message }) => {
  return (
    <div className={styles['topright-status-gps']}>
      <p className={styles['gps-status']}>{message}</p>
    </div>
  );
};

export default StatusGPS;
