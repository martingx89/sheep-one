import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/pages/Home';
import BlankPage from './components/pages/BlankPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<BlankPage />}></Route>
    </Routes>
  );
};

export default App;
