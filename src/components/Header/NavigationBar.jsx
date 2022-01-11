import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBarStyle.css';

const Header = function navBar() {
  return (
    <header className="header__desktop">
      <nav className="header__navigation">
        <h1 className="header__navigation-title">
          <a href="http://localhost:3000/portfolio">
            MARC MARTÍN BARRIOS
          </a>
        </h1>
        <ul className="header__navigation-list">
          <Link
            to="/about"
            key={1}
          >
            About
          </Link>
          <Link
            to="/projects"
            key={2}
          >
            Projects
          </Link>
          <Link
            to="/cv"
            key={3}
          >
            CV
          </Link>
          <Link
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
