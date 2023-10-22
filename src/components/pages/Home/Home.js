import PageTitle from '../../common/PageTitle/PageTitle';
import Carousel from '../../views/Carousel/Carousel';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home-wrapper']}>
      <PageTitle>Oferta</PageTitle>
      <Carousel />
    </div>
  );
};

export default Home;
