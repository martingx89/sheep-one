import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { CAROUSEL_SET } from '../../../constants/carouselSettings';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { dataCarousel } from '../../../constants/dataCarousel';

const Carousel = () => {
  const settings = CAROUSEL_SET;

  return (
    <div className='center-carousel'>
      {' '}
      {/* Dodaj klasę center-carousel */}
      <Slider {...settings}>
        {dataCarousel.map((item, index) => (
          <div className={styles['carousel-tile']} key={index}>
            <div className={styles['image-container']}>
              <img src={item.imageUrl} alt={`Opis obrazka ${item.id}`} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
