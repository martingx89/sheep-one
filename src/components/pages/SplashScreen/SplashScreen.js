import React from 'react';
import { MdGpsFixed } from 'react-icons/md';
import PageSubtitle from '../../common/PageSubTitle/PageSubTitle';
import styles from './SplashScreen.module.scss';
import { PAGE_TITLE_LONG } from '../../../constants/pageSetup';

const SplashScreen = () => {
  return (
    <div className={styles['splash-wrapper']}>
      <PageSubtitle>
        <span>
          <MdGpsFixed />
        </span>
        {PAGE_TITLE_LONG}
      </PageSubtitle>
      <PageSubtitle>Loading...</PageSubtitle>
    </div>
  );
};

export default SplashScreen;
