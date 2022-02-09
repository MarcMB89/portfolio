import React from 'react';
import './aboutStyle.css';
import jsLogo from '../../styles/images/tech-logos/js-logo.svg';
import html5Logo from '../../styles/images/tech-logos/html5-logo.svg';
import css3Logo from '../../styles/images/tech-logos/css3-logo.svg';
import nodejsLogo from '../../styles/images/tech-logos/nodejs-logo.svg';
import reactLogo from '../../styles/images/tech-logos/react-logo.svg';
import figmaLogo from '../../styles/images/tech-logos/figma-logo.svg';
import typescriptLogo from '../../styles/images/tech-logos/typescript-logo.svg';
import reduxLogo from '../../styles/images/tech-logos/redux-logo.svg';

const About = function about() {
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <h2 className="about__title">About</h2>
        <article className="about__description-article">
          <p>
            Hi, my name is Marc, I'm a freelance web developer currently based in Barcelona, Spain.
          </p>
          <p>
            After many years exploring different careers, I came across web development around 2019
            and I realized that is the job I always wanted.
          </p>
          <p>
            Since then I started studying my myself, reading documentation, practicing,
            taking online courses
            until I decided to take a step further and I joint Skylab Coders Academy (now
            <a href="https://isdicoders.com/ca/full-time-format-bootcamp-barcelona_5278"> ISDI Coders</a>
            ), one of the
            <a href="https://www.switchup.org/rankings/best-bootcamps-barcelona">best bootcamps in Barcelona (according to SwitchUp)</a>
            .
          </p>
          <p>
            These are some of my favourite technologies that I've been using recently:
          </p>
          <ul>
            <li>
              <img src={jsLogo} alt="javascript-logo" className="about__tech-logos" />
              <p>Javascript</p>
            </li>
            <li>
              <img src={html5Logo} alt="html5-logo" className="about__tech-logos" />
              <p>HTML5</p>
            </li>
            <li>
              <img src={css3Logo} alt="css3-logo" className="about__tech-logos" />
              <p>CSS3</p>
            </li>
            <li>
              <img src={nodejsLogo} alt="nodejs-logo" className="about__tech-logos" />
              <p>NodeJS</p>
            </li>
            <li>
              <img src={typescriptLogo} alt="typescript-logo" className="about__tech-logos" />
              <p>TypeScript</p>
            </li>
            <li>
              <img src={reactLogo} alt="react-logo" className="about__tech-logos" />
              <p>React</p>
            </li>
            <li>
              <img src={reactLogo} alt="react-native-logo" className="about__tech-logos" />
              <p>React Native</p>
            </li>
            <li>
              <img src={reduxLogo} alt="redux-logo" className="about__tech-logos" />
              <p>Redux</p>
            </li>
            <li>
              <img src={figmaLogo} alt="figma-logo" className="about__tech-logos" />
              <p>Figma</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
