import React from 'react';
import './aboutStyle.css';

const About = function About() {
  return (
    <div className="about__container">
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
        <img
          className="about_plantdroid-gif"
          src="https://user-images.githubusercontent.com/78495996/141802054-7074be9f-db4c-4dcb-88e7-0db344eead0c.gif"
          alt="Plantdroid App gif"
        />
      </section>
      <section className="about_third-section">
        <article>
          I specialize in Javascript, React and React-Native. I use MERN technologies.
        </article>
      </section>
    </div>
  );
};

export default About;
