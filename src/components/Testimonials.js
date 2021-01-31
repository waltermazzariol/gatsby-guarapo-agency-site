import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import Fade from 'react-reveal/Fade'
function ControlledCarousel({ data }) {
  return (
    <div className="col-12">
        <Fade>
      <Carousel controls={false}>
        {data.map((key, index) =>
          <Carousel.Item key={index}>
            <Carousel.Caption>
              <p className="carousel-item--text">{key.description}</p>
              <h3 className="carousel-item--name">{key.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>)}
      </Carousel></Fade></div>)
}

export default ControlledCarousel;