import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CAROUSEL_SET } from '../../../constants/pageSetup';
import { getBikesData } from '../../../redux/reducers/bikesRedux';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import styled from 'styled-components';

const Tile = styled(Box)({
  position: 'relative',
  height: '300px',
  width: 'auto',
  padding: '5px',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '3px',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.25)',
});

const Content = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '20px',
});

const Carousel = () => {
  const bikes = useSelector(getBikesData);
  const settings = CAROUSEL_SET;

  return (
    <Slider {...settings}>
      {bikes.map((bike, index) => (
        <Tile key={index}>
          <Image src={bike.image_small} alt={`${bike.brand} ${bike.model}`} />
          <Content>
            <h3>{bike.brand}</h3>
            <h4>{bike.model}</h4>
          </Content>
        </Tile>
      ))}
    </Slider>
  );
};

export default Carousel;
