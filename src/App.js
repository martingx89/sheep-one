import React from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/tilesRedux';
import Home from './components/pages/Home/Home';
// import News from './components/pages/News/News';
import Catalog from './components/pages/Catalog/Catalog';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import BlankPage from './components/pages/BlankPage/BlankPage';
import Container from './components/views/Container/Container';
import Navbar from './components/views/Navbar/Navbar';
import Footer from './components/views/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData(), [dispatch]));

  return (
    <main>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/news' element={<News />}></Route> */}
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<BlankPage />}></Route>
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
