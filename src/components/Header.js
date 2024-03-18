import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const Header = () => {
  return (
    <header className="header">
      <div className="header__logo" src="https://www.amazon.com/ref=nav_logo">Amazon</div>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <FaSearch className="header__searchIcon"/>
        
      </div>
      <div className="header__nav">
      <div className="header__nav__options">
        <div className="header__nav__option1">Hello, sign in</div>
        <div className="header__nav__option2">Accounts & Lists</div>
      </div>

      <div className="header__nav__options">
        <div className="header__nav__option1">Returns</div>
        <div className="header__nav__option2">& Orders</div>
      </div>

        <div className="header__optionBasket">
        <FaCartShopping />
            <span className="header__optionLineTwo header__basketCount">
              Cart
            </span>
          </div>
          </div>
    </header>
  );
};

export default Header;
