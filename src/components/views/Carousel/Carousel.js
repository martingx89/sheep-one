import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { CAROUSEL_SET } from '../../../constants/carouselSettings';
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const routes = useSelector(getRoutesData);
  const settings = CAROUSEL_SET;
  console.log(routes);

  return (
    <div className='center-carousel'>
      <Slider {...settings}>
        {routes.map((route, index) => (
          <div className={styles['carousel-tile']} key={index}>
            <h3>{route.route_name}</h3>
            <p>Distance: {route.distance}</p>
            <p>Duration: {route.duration}</p>
            <p>Difficulty: {route.difficulty_level}</p>
            <p>{route.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
