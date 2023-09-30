import React from 'react';
import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles['card-container']}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/map_1/LSK-track_01.png`} alt='map' />
      <div className={styles['card-wrapper']}>
        <h2>Źródełka</h2>
        <p>Leskie źródełka w bardzo urokliwej okolicy</p>
        <a href='https://pl.wikipedia.org/wiki/Owca_domowa'>Link</a>
      </div>
    </div>
  );
}

export default Card;
