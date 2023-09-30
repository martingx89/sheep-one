import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss'; // Zaimportuj odpowiednie style, jeśli są wymagane.
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { dataCarousel } from '../../../constants/dataCarousel';

const Carousel = () => {
  const settings = {
    // Konfiguracja ustawień Carousel
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayinterval: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
