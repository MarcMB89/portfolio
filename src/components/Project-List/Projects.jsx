import React from 'react';/*
import './projects.css'; */
import plantdroid from './plantdroid_screenshot.jpg';

const Projects = function projects() {
  return (
    <div id="projects" className="projects__section">
      <h2 className="projects__title">Projects</h2>
      <article>
        These are some of the projects I've worked or am currently working on:
      </article>
      <section>
        <h4>Plantdroid</h4>
        <p>
          Plantdroid is a Mobile App created from scratch, that allows you to check
          vital info about how to take care of your plants at home. It uses a database in which
          there's stored all the info you might need.
        </p>
        <img className="projects__plantdroid-img" src={plantdroid} alt="Plantdroid" />
      </section>
    </div>

  );
};

export default Projects;
