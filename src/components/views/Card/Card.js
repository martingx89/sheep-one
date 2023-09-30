import React from 'react';
import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.wrapper}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/map_1/LSK-track_01.png`} alt='map' />
      <div>
        <h2>Źródełka</h2>
        <p>Leskie źródełka</p>
        <a href='https://pl.wikipedia.org/wiki/Owca_domowa'>Link</a>
      </div>
    </div>
  );
}

export default Card;
