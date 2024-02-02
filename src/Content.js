import React, { useEffect, useRef } from 'react'
import "./Content.css";
import { gsap } from 'gsap';
const Content = ({timeline}) => {
  let h1 = useRef(null);
  let pText = useRef(null);
  let btn = useRef(null);

  useEffect(() => {
    // Set initial state (visible)
    gsap.set([h1.children, pText, btn], { opacity: 1, y: 0, skewY: 0 });
  
    // Animation
    timeline.fromTo(
      [h1.children, pText, btn],
      {
        opacity: 0,
        y: '100',
        skewY: 10,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        stagger: 0.4,
        duration: 1, // Adjust the duration as needed
      },
      "-=1"
    );
  }, [timeline, h1, pText, btn]);
  
  
  
  
  return (
    <div>
      <div className="content">
        <h1 className="content-inner-bold" ref = {el => h1 = el}>
            <div>Lorem ipsum dolor sit.</div>
            <br />
            <div>Lorem ipsum dolor, sit amet consectetur.</div>
        </h1>
        <p ref = {el => pText = el}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptatibus eveniet sequi.
        </p>
        <button ref ={el => btn = el}>
            Explore
        </button>
      </div>
    </div>
  )
}

export default Content
