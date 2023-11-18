import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CAROUSEL_SET } from '../../../constants/pageSetup';
import { getBikesData } from '../../../redux/reducers/bikesRedux';
import { useSelector } from 'react-redux';
import { Tile, TileImage, TileContent } from '../Tile/Tile';

const Carousel = () => {
  const bikes = useSelector(getBikesData);
  const settings = CAROUSEL_SET;

  return (
    <Slider {...settings}>
      {bikes.map((bike, index) => (
        <Tile key={index}>
          <TileImage src={bike.image_small} alt={`${bike.brand} ${bike.model}`} />
          <TileContent>
            <h3>{bike.brand}</h3>
            <h4>{bike.model}</h4>
          </TileContent>
        </Tile>
      ))}
    </Slider>
  );
};

export default Carousel;
