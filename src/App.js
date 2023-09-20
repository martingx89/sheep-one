import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/dataRedux';
import Home from './components/pages/Home/Home';
import News from './components/pages/News/News';
import Catalog from './components/pages/Catalog/Catalog';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import BlankPage from './components/pages/BlankPage/BlankPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData(), [dispatch]));

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/news' element={<News />}></Route>
      <Route path='/catalog' element={<Catalog />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<BlankPage />}></Route>
    </Routes>
  );
};

export default App;
