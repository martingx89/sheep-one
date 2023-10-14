import React from 'react';
import styles from './StatusGPS.module.scss';

const StatusGPS = ({ message, error }) => {
  const textClass = error ? 'redText' : 'greenText';

  return (
    <div className={styles.gpsStatus}>
      <p className={`${styles.gpsStatus} ${styles[textClass]}`}>{message}</p>
    </div>
  );
};

export default StatusGPS;
