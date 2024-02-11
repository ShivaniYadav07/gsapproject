import React, { Fragment } from 'react';
import './App.css';
import Header from './Header';
import Content from "./Content"
import Images from './Images';
// import Reveal from './Reveal'

import {gsap, Power3} from 'gsap';
function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    
    <Fragment>
    <div className="hero" >
      <Header timeline = {tl} ease= {ease}/>

    <div className='container'>
      <Content timeline={tl}/>
      <Images timeline={tl} ease={ease}/>
    </div>
   </div>
    {/* <div className='container'>
    <h2 className='homeHeading'>Image Reveal</h2>
      <Reveal />
    </div> */}
    </Fragment>
  );
}

export default App;
