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
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 1',
    description: 'Opis 1',
  },
  {
    id: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 2',
    description: 'Opis 2',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/18/13/46/beach-8260614_1280.jpg',
    title: 'Tytuł 3',
    description: 'Opis 3',
  },
  // Dodaj więcej danych kafelków według potrzeb
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {dataCarousel.map((item) => (
          <div className='carousel-tile' key={item.id}>
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
