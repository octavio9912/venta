import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousell = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Sony-PlayStation-3-CECHA01-wController-L.jpg/1280px-Sony-PlayStation-3-CECHA01-wController-L.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>Original model</h5>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sony-PlayStation-3-2001A-wController-L.jpg/1280px-Sony-PlayStation-3-2001A-wController-L.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Slim model</h5>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sony-PlayStation-3-4001B-wController-L.jpg/1280px-Sony-PlayStation-3-4001B-wController-L.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Super Slim model</h5>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>

  )
}

export default Carousell