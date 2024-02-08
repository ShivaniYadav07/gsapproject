import React, { useRef, useEffect } from "react";
import "./ImgEffect.css";
import People from "./assets/pexels-photo-20079900.webp"
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Reveal = () => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4
    });
  });

  return (
    <section className="main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="container_second" ref={el => (container = el)}>
        <>
          <div className="img-container">
            <img
              ref={el => {
                image = el;
              }}
              src={People}
              alt={People}
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Reveal;