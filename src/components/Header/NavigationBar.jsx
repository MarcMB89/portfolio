import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBarStyle.css';

const Header = function navBar() {
  return (
    <header className="header__desktop">
      <nav className="header__navigation">
        <Link
          className="header__navigation-title"
          to="/"
          key={0}
        >
          MARC MARTÍN BARRIOS
        </Link>
        <ul className="header__navigation-list">
          <Link
            className="header__navigation-list-item"
            to="/about"
            key={1}
          >
            About
          </Link>
          <Link
            className="header__navigation-list-item"
            to="/projects"
            key={2}
          >
            Projects
          </Link>
          <Link
            className="header__navigation-list-item"
            to="/cv"
            key={3}
          >
            CV
          </Link>
          <Link
            className="header__navigation-list-item"
            to="/contact"
            key={4}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
