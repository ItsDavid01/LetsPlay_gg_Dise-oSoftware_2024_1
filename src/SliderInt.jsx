import React, { useState } from "react";
import "./SliderInt.css";

const Slider = () => {

  const slides = [
    { title: 'Slide 1', content: 'Contenido del slide 1' },
    { title: 'Slide 2', content: 'Contenido del slide 2' },
    { title: 'Slide 3', content: 'Contenido del slide 3' },
    { title: 'Slide 4', content: 'Contenido del slide 4' },
    { title: 'Slide 5', content: 'Contenido del slide 5' },
    // Agrega más objetos para más slides
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div id="slider">
      <div id="slides">
        <div id="overflow">
          <div
            className="inner"
            style={{ marginLeft: `-${(currentSlide - slides.length) * 100}%` }}
            >
            <div className="slide slide1">
              <div className="slide-content">
                <p>{slides[currentSlide].title}</p>
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
        ></button>
        <button
          id="control-right"
          onClick={handleNext}
          className="control-right"
          aria-label="Next Slide"
        ></button>
      </div>
    </div>
  );
};

export default Slider;
