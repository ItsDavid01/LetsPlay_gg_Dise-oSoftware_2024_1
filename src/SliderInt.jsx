import React, { useState, useEffect } from "react";
import "./SliderInt.css";
import axios from 'axios';

const Slider = () => {
  const [data, setData] = useState([{ gameUser: 'HEX Hello' , nombreR: 'David' , color: 'Azul' , game: 'Valorant'}]);
  useEffect(() => {
    // Realizar la solicitud al servidor Express
    axios.get('http://localhost:3000/nombres')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      console.log(data)
  }, []);

  //const slides = data
  let slides = [
    { title: 'Slide 1', content: 'Contenido del slide 1' },
    { title: 'Slide 2', content: 'Contenido del slide 2' },
    { title: 'Slide 3', content: 'Contenido del slide 3' },
    { title: 'Slide 4', content: 'Contenido del slide 4' },
    { title: 'Slide 5', content: 'Contenido del slide 5' },
    // Agrega más objetos para más slides
  ];

  slides = data
  console.log(slides)
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
            <div className="slide slide4">
              <div className="slide-content">
                <p>In Game Username: {slides[currentSlide].gameUser}</p>
                <p>Nombre: {slides[currentSlide].nombreR}</p>
                <p>Color favorito {slides[currentSlide].color}</p>
                <p>Juego favorito {slides[currentSlide].game}</p>
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
