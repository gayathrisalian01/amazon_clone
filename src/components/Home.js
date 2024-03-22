import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "./Home.css";
import BasicExample from "./card";

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
 <p> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="https://www.amazon.in">Click here to go to amazon.in</a> </p>
</div>
<BasicExample></BasicExample>
<div className="carousel-container">
<Carousel>
  
        <img
          className="book__image"
          src="https://m.media-amazon.com/images/I/81VP1+CNyWL._AC_SY200_.jpg"
          alt=""
        />
    
        <img
          className="book__image"
          src="https://m.media-amazon.com/images/I/81TmnPZWb0L._AC_SY200_.jpg"
          alt=""
        />
    
  
        <img
          className="book__image"
          src="https://m.media-amazon.com/images/I/8136u75+kkL._AC_SY200_.jpg"
          alt=""
        />
    
        <img
          className="book__image"
          src="https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY200_.jpg"
          alt=""
        />
    
        <img
          className="book__image"
          src="https://m.media-amazon.com/images/I/81EmtXw0mrL._AC_SY200_.jpg"
          alt=""
        />
    
  
        <img
          className="book__image"
          src="https://m.media-amazon.com/images/I/71x3UZ18tmL._AC_SY200_.jpg"
          alt=""
        />
    
    </Carousel>
    </div>
    </div>
  );
};

export default Home;