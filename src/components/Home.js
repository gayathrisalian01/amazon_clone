import React from "react";
import { Carousel } from 'react-bootstrap';
import "./Home.css";

function Home() {
  return (
    <div className="home"> {/* Apply the home class here */}
      <Carousel>
        <Carousel.Item>
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
