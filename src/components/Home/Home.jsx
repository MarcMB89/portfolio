import React from 'react';
import './homeStyle.css';

const Home = function home() {
  return (
    <section className="home__container">
      <section className="home__title-section">
        <h2
          className="home__title-greeting home__title"
          id="home"
        >
          Hi, my name is
        </h2>
        <h1 className="home__title-name home__title">Marc Martín Barrios</h1>
        <h2 className="home__title-job home__title">Full Stack Web Developer</h2>

      </section>
      <section className="home_first-section_description">
        <article>
          I'm a passionate for software development
          I'm specially interested in Mobile App and web development
          I specialize in Javascript, React and React-Native. I use MERN technologies.
        </article>
      </section>
    </section>
  );
};

export default Home;
