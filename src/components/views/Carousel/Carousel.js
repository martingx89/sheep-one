import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { CAROUSEL_SET } from '../../../constants/pageSetup';
import { getBikesData } from '../../../redux/reducers/bikesRedux';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

const Carousel = () => {
  const bikes = useSelector(getBikesData);
  const settings = CAROUSEL_SET;

  return (
    <Slider {...settings}>
      {bikes.map((bike, index) => (
        <Box className={styles['carousel-container']} key={index}>
          <div className={styles['carousel-wrapper']}>
            <h2>{bike.brand}</h2>
            <h3>{bike.model}</h3>
            <img src={bike.image_small} alt='img' />
            <div className={styles['carousel-text-overlay']}>
              <p>Rodzaj: {bike.type}</p>
              <p>Rama: {bike.frame_size}</p>
            </div>
          </div>
        </Box>
      ))}
    </Slider>
  );
};

export default Carousel;
