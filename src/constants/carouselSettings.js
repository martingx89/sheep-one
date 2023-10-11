import MagicSliderDots from 'react-magic-slider-dots';

export const CAROUSEL_SET = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
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
