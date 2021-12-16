import React from 'react';

const NavBar = function NavBar() {
  return (
    <header>
      <nav className="header_navigation">
        <h1 className="header_navigation_title">MARC MARTÍN BARRIOS</h1>
        <ul className="header_navigation_list">
          <li className="header_navigation_list_item"><a href="http://localhost:3000/portfolio">About</a></li>
          <li className="header_navigation_list_item"><a href="http://localhost:3000/portfolio">Projects</a></li>
          <li className="header_navigation_list_item"><a href="http://localhost:3000/portfolio">CV</a></li>
          <li className="header_navigation_list_item"><a href="http://localhost:3000/portfolio">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
