import React from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="inner-header">
      <div className="header__logo">
        <a href="https://www.amazon.com/" className="header__logoLink">
          Amazon
        </a>
      </div>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search" />
        <FaSearch className="header__searchIcon"/>
      </div>
      
      <div className="header__nav">
        <div className="header__nav__options">
          <div className="header__nav__option1">Hello, Sign in</div>
          <div className="header__nav__option2">Accounts & Lists</div>
        </div>
        
        <div className="header__nav__options">
          <div className="header__nav__option1">Returns</div>
          <div className="header__nav__option2">& Orders</div>
        </div>
        
        <div className="header__optionBasket">
          <FaShoppingCart />
          <span className="header__optionLineTwo header__basketCount">
            Cart
          </span>
        </div>
      </div>
      </div>
      <div className="header__nav2">
        <a href="#" className="header__navLink">Departments</a>
        <a href="#" className="header__navLink">Today's Deals</a>
        <a href="#" className="header__navLink">Gift Cards</a>
        <a href="#" className="header__navLink">Sell</a>
      </div>
    </header>
  );
};

export default Header;
