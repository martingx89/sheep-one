import React from 'react';
import { MdGpsFixed } from 'react-icons/md';
import PageTitle from '../../common/PageTitle/PageTitle';
import PageSubtitle from '../../common/PageSubTitle/PageSubTitle';
import styles from './SplashScreen.module.scss';

const SplashScreen = () => {
  return (
    <div className={styles['splash-wrapper']}>
      <PageTitle>
        <span>
          <MdGpsFixed />
        </span>
        all2wheel
      </PageTitle>
      <PageSubtitle>Loading...</PageSubtitle>
    </div>
  );
};

export default SplashScreen;
