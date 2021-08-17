import React from 'react';

import { Route } from "react-router";

import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetails/CountryDetail';
import Activities from './components/Activities/Activities';
import NavBar from './components/NavBar/NavBar'

import app from './app.module.css';

export function App() {
  return (
    <div className={app.main}>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={NavBar} />
      <Route path='/activities' component={NavBar} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/country/:idCountry' component={CountryDetail} />
      <Route exact path='/activities' component={Activities} />
    </div>
  );
}

export default App;
