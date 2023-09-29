import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

// Definicja danych kafelków
const dataCarousel = [
  {
    id: 1,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 1',
    description: 'Opis 1',
  },
  {
    id: 2,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 2',
    description: 'Opis 2',
  },
  {
    id: 3,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 4,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 4',
    description: 'Opis 4',
  },
  {
    id: 5,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 5',
    description: 'Opis 5',
  },
  {
    id: 6,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 6',
    description: 'Opis 6',
  },
  {
    id: 7,
    imageUrl:
      'https://pixabay.com/get/gf42532286d870bc7379756a552ca86a6e30c7cd87253401f8c359e33157e2bb117117d8342321f888b29bebf785d3fc6eb7edbbcb65334e01c40605080526f39b2fc8e583853bc94448333b3cbe42689_640.jpg',
    title: 'Tytuł 7',
    description: 'Opis 7',
  },
  // Dodaj więcej danych kafelków według potrzeb
];

const Carousel = () => {
  const settings = {
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
            {' '}
            {/* Użyj index jako klucza */}
            <img src={item.imageUrl} alt={`Opis obrazka ${item.id}`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
