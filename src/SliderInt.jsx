import React, { useState } from "react";
import "./SliderInt.css";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 4;

  const handleNext = () => {
    setActiveSlide((prev) => (prev % totalSlides) + 1);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div id="slider">
      <div id="slides">
        <div id="overflow">
          <div
            className="inner"
            style={{ marginLeft: `-${(activeSlide - 1) * 100}%` }}
          >
            <div className="slide slide1">
              <div className="slide-content">
                <p>Content for Slide 1</p>
              </div>
            </div>
            <div className="slide slide2">
              <div className="slide-content">
                <p>Content for Slide 2</p>
              </div>
            </div>
            <div className="slide slide3">
              <div className="slide-content">
                <p>Content for Slide 3</p>
              </div>
            </div>
            <div className="slide slide4">
              <div className="slide-content">
                <p>Content for Slide 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <button
          id="control-left"
          onClick={handlePrev}
          className="control-left"
          aria-label="Previous Slide"
        >
          ◄
        </button>
        <button
          id="control-right"
          onClick={handleNext}
          className="control-right"
          aria-label="Next Slide"
        >
          ►
        </button>
      </div>
    </div>
  );
};

export default Slider;
