import React, { useRef, useEffect } from 'react';
import './Images.css';
import { gsap } from 'gsap';

const Images = ({ timeline, ease }) => {
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);

  useEffect(() => {
    const images = [image1.current, image2.current, image3.current];

    // Set initial state (visible)
    gsap.set(images, { opacity: 1, y: 0 });

    // Animation
    timeline.fromTo(
      image1.current,
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
      image2.current,
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
      image3.current,
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
  }, [timeline, ease]);

  return (
    <div>
      <div className="images">
        <div className="box1" ref={image1}></div>
        <div className="box2" ref={image2}></div>
        <div className="box3" ref={image3}></div>
      </div>
    </div>
  );
};

export default Images;
