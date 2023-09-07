import './App.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/features/Navbar';
import Home from './components/pages/Home';
import BlankPage from './components/pages/BlankPage';

const App =()=> {
  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/blank' exact component={BlankPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
