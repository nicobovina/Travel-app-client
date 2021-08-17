import React from 'react';
import { Link } from 'react-router-dom';


import landing from './LandingPage.module.css';


export function LandingPage(props) {
  return (
    <div className={landing.main}>
      <h1 className={landing.title}>TRAVEL APP</h1>
      <Link className={landing.button} to={'/Home'} >INGRESAR</Link>
    </div>
  )
};


export default LandingPage;