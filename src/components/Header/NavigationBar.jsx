import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navigationBarStyle.css';
import logo from './logo.svg';

const Header = function navBar() {
  let previousScrollPosition = window.pageYOffset;

  window.onscroll = function hideNavbar() {
    const currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-50px';
    }
    previousScrollPosition = currentScrollPosition;
  };

  return (
    <header>
      <nav className="header__navigation-desktop" id="navbar">
        <img src={logo} alt="M" className="header__navigation-title" />
        <ul className="header__navigation-list">
          <Link
            className="header__navigation-list-item"
            smooth
            to="#about"
            key={1}
          >
            About
          </Link>
          <Link
            className="header__navigation-list-item"
            smooth
            to="#projects"
            key={2}
          >
            Projects
          </Link>
          <Link
            className="header__navigation-list-item"
            smooth
            to="#contact"
            key={4}
          >
            Contact
          </Link>
        </ul>
        <section className="navbar__burguer-menu-portrait">
          <span className="navbar__burguer-menu--dash1" />
          <span className="navbar__burguer-menu--dash2" />
          <span className="navbar__burguer-menu--dash3" />
        </section>
      </nav>
    </header>

  );
};

export default Header;
