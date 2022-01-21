import React from 'react';
import './homeStyle.css';

const Home = function home() {
  return (
    <section className="home__container">
      <section className="home__title-section">
        <h2
          className="home__title-greeting"
          id="home"
        >
          Hi, my name is
        </h2>
        <h1 className="home__title-name">Marc Martín Barrios</h1>
        <h2 className="home__title-job">Full Stack Web Developer</h2>

      </section>
      <section className="home_section_description">
        <section className="home_section_description-first">
          <p>
            I'm a web developer, specializing in building Mobile Apps
            and websites, creating a great User Interface and Experience.
          </p>
        </section>
        <section className="home_section_description-second">
          <p>
            I'm currently working as a freelancer, always aiming to improve,
            gain experience and collaborate in awesome projects.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Home;
