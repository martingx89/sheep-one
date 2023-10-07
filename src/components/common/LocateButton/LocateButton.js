import React from 'react';
import styles from './LocateButton.module.scss';

const LocateButton = ({ onClick, children }) => {
  return (
    <button type='button' onClick={onClick} className={styles['locate-button']}>
      {children}
    </button>
  );
};

export default LocateButton;
