import { sm, md, lg } from './breakpoints';

export const PAGE_TITLE_SHORT = '2SB';
export const PAGE_TITLE_LONG = '2sladybieszczady';
export const ZOOM_LEVEL = 15;
export const FLY_TO_SETUP = {
  duration: 1, // Animation duration in seconds
  easeLinearity: 0.25, // Easing linearity (adjust as needed)
  noMoveStart: false, // Fire the move event at the start of the animation
  animate: true, // Smooth animation
  maxZoom: 18, // Maximum zoom level during the animation
  easeOutPower: 3, // Power of the easing out (higher values for more abrupt stops)
  panInsideBounds: true, // Ensure the destination is within the map's bounds
  maxBounds: [
    [50, -180],
    [-50, 180],
  ], // Maximum bounds for panning
  paddingTopLeft: [0, 0], // Padding from the top-left corner of the map container
  paddingBottomRight: [0, 0], // Padding from the bottom-right corner of the map container
};
export const HIGH_ACCURACY = true;
export const TIMEOUT = 10000;
export const INITIAL_COORDS = [51.505, -0.09];
export const INITIAL_MAP_STATE = {
  userPosition: {
    latitude: null,
    longitude: null,
  },
};
export const CAROUSEL_SET = {
  arrows: false,
  // dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: lg,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: sm,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const EMAIL_API_KEY = 'Okrq-645seco624jb';
export const EMAIL_SERVICE_ID = 'service_wne9ssc';
export const EMAIL_TEMPLATE_ID = 'template_wjjfawn';
