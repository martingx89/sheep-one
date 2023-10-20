import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { CAROUSEL_SET } from '../../../constants/pageSetup';
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const routes = useSelector(getRoutesData);
  const settings = CAROUSEL_SET;
  console.log(routes);

  return (
    <Slider {...settings}>
      {routes.map((route, index) => (
        <div className={styles['carousel-tile']} key={index}>
          <div className={styles['image-container']}>
            <img src={route.gallery_paths} alt='img' />
            <div className={styles['text-overlay']}>
              <h3>{route.route_name}</h3>
              <p>Dystans: {route.distance}</p>
              <p>Czas: {route.duration}</p>
              <p>Poziom: {route.difficulty_level}</p>
              <p>{route.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
