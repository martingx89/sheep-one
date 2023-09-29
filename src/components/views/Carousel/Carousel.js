import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { dataCarousel } from '../../../constants/dataCarousel';

const Carousel = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Wyświetlaj 3 slajdy na raz na większych ekranach
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
    responsive: [
      {
        breakpoint: 768, // Na ekranach o szerokości 768px lub mniejszej
        settings: {
          slidesToShow: 2, // Wyświetlaj 2 slajdy na raz
        },
      },
      {
        breakpoint: 576, // Na ekranach o szerokości 576px lub mniejszej
        settings: {
          slidesToShow: 1, // Wyświetlaj 1 slajd na raz
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {dataCarousel.map((item, index) => (
          <div className={styles['carousel-tile']} key={index}>
            {/* Użyj index jako klucza */}
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
