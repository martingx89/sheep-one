import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Catalog from './components/pages/Catalog';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import BlankPage from './components/pages/BlankPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/news' element={<Home />}></Route>
      <Route path='/catalog' element={<Home />}></Route>
      <Route path='/about' element={<Home />}></Route>
      <Route path='/contact' element={<Home />}></Route>
      <Route path='*' element={<BlankPage />}></Route>
    </Routes>
  );
};

export default App;
