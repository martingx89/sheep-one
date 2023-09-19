import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../redux/dataRedux';

const Home = () => {
  const data = useSelector(getAllData);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
