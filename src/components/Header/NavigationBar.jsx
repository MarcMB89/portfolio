import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navigationBarStyle.css';

const Header = function navBar() {
  return (
    <header className="header__desktop">
      <nav className="header__navigation">
        <h1 className="header__navigation-title">
          UNDER CONSTRUCTION
        </h1>
        <ul className="header__navigation-list">
          <Link
            className="header__navigation-list-item"
            smooth
            to="#home"
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
            to="#cv"
            key={3}
          >
            CV
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
      </nav>
    </header>
    /*
      <div className="navbar__burguer-menu" hidden>
      <span className="navbar__burguer-menu--dash1" />
      <span className="navbar__burguer-menu--dash2" />
      <span className="navbar__burguer-menu--dash3" />
    </div>
    */
  );
};

export default Header;
