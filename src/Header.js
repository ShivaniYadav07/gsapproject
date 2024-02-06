import React, { useRef, useEffect } from 'react';
import './Header.css';
import { gsap } from 'gsap';

function Header({ timeline, ease }) {
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);

  useEffect(() => {
    // Initial state (visible)
    gsap.set([logo, menu_item1, menu_item2, menu_item3], { opacity: 1, y: 0 });
  
    // Animation for logo
    timeline.fromTo(
      logo,
      {
        opacity: 0,
        y: '100',
      },
      {
        opacity: 1,
        y: 0,
        ease: ease,
        duration: 1,
      }
    );
  
    // Animation for menu items
    timeline.fromTo(
      [menu_item1, menu_item2, menu_item3],
      {
        opacity: 0,
        y: '-200',
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: ease,
        duration: 2,
      },
      "-=0.6" // Adjust this value based on the desired timing between logo and menu items
    );
  }, [timeline, ease, logo, menu_item1, menu_item2, menu_item3]);
  
  
  

  return (
    <div>
      <div className="header">
        <div className="logo" ref={(el) => (logo = el)}>
          Logo
        </div>
        <div className="menu">
          <div className="menu-item" ref={(el) => (menu_item1 = el)}>
            About
          </div>
          <div className="menu-item" ref={(el) => (menu_item2 = el)}>
            Journal
          </div>
          <div className="menu-item" ref={(el) => (menu_item3 = el)}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
