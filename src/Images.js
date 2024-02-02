import React, { useRef, useEffect } from 'react';
import './Images.css';
import { gsap } from 'gsap';

const Images = ({ timeline, ease }) => {
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);

  useEffect(() => {
    // Set initial state (visible)
    gsap.set([image1, image2, image3], { opacity: 1, y: 0 });
  
    // Animation
    timeline.fromTo(
      image1,
      {
        y: 1200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: ease,
        duration: 1.2,
      }
    );
  
    timeline.fromTo(
      image2,
      {
        y: 1200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: ease,
        duration: 1.2,
      },
      "-=1"
    );
  
    timeline.fromTo(
      image3,
      {
        y: 1200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: ease,
        duration: 1.2,
      },
      "-=1"
    );
  }, [timeline, ease, image1, image2, image3]);
  
  

  return (
    <div>
      <div className="images">
        <div className="box1" ref={(el) => (image1 = el)}></div>
        <div className="box2" ref={(el) => (image2 = el)}></div>
        <div className="box3" ref={(el) => (image3 = el)}></div>
      </div>
    </div>
  );
};

export default Images;
