import React from 'react';
import './aboutStyle.css';

const About = function about() {
  return (
    <section className="about__container" id="about">
      <h2 className="about__title">About</h2>
      <article className="about__description-article">
        Hi, my name is Marc, I'm a freelance web developer currently based in Barcelona, Spain.
        <p>
          After many years exploring different careers, I came across web development around 2019
          and I realized that is the job I always wanted.
        </p>
        Since then I started studying my myself, reading documentation, practicing,
        taking online courses
        until I decided to take a step further and I joint Skylab Coders Academy (now
        <a href="https://isdicoders.com/ca/full-time-format-bootcamp-barcelona_5278"> ISDI Coders</a>
        ), one of the
        <a href="https://www.switchup.org/rankings/best-bootcamps-barcelona">best bootcamps in Barcelona (according to SwitchUp).</a>
        <p>
          These are some of my favourite technologies that I've been using recently:
        </p>
        <ul>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>NodeJS</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React-Native</li>
          <li>Redux</li>
        </ul>
        <p>
          Apart from those, I also use Figma for the design phase of any project
        </p>
      </article>
    </section>
  );
};

export default About;
