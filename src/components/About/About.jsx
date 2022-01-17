import React from 'react';
import './aboutStyle.css';

const About = function About() {
  return (
    <section className="about__container">
      <h2>Under construction</h2>
      <h2
        className="about__title"
        id="about"
      >
        About
      </h2>

      <article className="about_first-section_description">
        My name is Marc, I'm 32 years old and a passionate for software development
      </article>

      <section className="about_second-section">
        <article className="about_second-section_interests">
          I'm specially interested in Mobile App and web development
        </article>
      </section>

      <section className="about_third-section">
        <article>
          I specialize in Javascript, React and React-Native. I use MERN technologies.
        </article>
      </section>

    </section>
  );
};

export default About;
