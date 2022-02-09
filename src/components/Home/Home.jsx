import React from 'react';
import './homeStyle.css';

const Home = function home() {
  return (
    <section className="home__container" id="home">
      <div className="home__content">
        <section className="home__title-section">
          <h2
            className="home__title-greeting"
          >
            Hi, my name is
          </h2>
          <h1 className="home__title-name">Marc Martín Barrios</h1>
          <h2 className="home__title-job">Front End Web Developer</h2>
        </section>
        <section className="home_section_description">
          <p>
            I'm a web developer, specializing in building Mobile Apps
            and websites, creating a great User Interface and Experience.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Home;
