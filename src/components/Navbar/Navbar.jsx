import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#landing">Landing</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login">Login | Register</a>
        <div />
        <a href="/">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu 
          color="#fff" 
          fontSize={27} 
          onClick={() =>setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom flex__center">
            <MdOutlineRestaurantMenu 
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#pages">Pages</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#landing">Landing</a></li>
            </ul>
          </div>
        )}
        
        
      </div>
    </nav>
  )
}

export default Navbar;
