import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      // Wykorzystujemy funkcję customPaging do dostosowania kropek nawigacyjnych
      return <button className={styles['custom-dot']} />;
    },
    appendDots: function (dots) {
      // Ograniczamy liczbę kropek do 10
      return (
        <ul>
          {dots.slice(0, 10).map((dot, index) => (
            <li key={index}>{dot}</li>
          ))}
        </ul>
      );
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselData = [
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 1',
      description: 'Krótki opis kafelka 1',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 2',
      description: 'Krótki opis kafelka 2',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg',
      title: 'Tytuł Kafelka 3',
      description: 'Krótki opis kafelka 3',
    },
  ];

  return (
    <div className={styles['carousel-container']}>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className={styles['carousel-tile']}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
