import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "./Home.css";

function Home() {
  return (
    <div className="home">
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
    <div class="textlinkstrip">
 <p> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click <a href="https://www.amazon.in">here</a> to go to amazon.in</p>
</div>
    </div>
  );
};

export default Home;