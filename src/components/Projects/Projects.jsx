import React from 'react';
import './projects.css';

const Projects = function projects() {
  return (
    <section className="projects__container" id="projects">
      <div className="projects__content">
        <h2 className="projects__title">Projects</h2>
        <p>
          These are some of the projects I've worked or am currently working on:
        </p>
        <section className="projects__project-list">
          <h4>Plantdroid</h4>
          <p>
            Plantdroid is a Mobile App created from scratch, that allows you to check
            vital info about how to take care of your plants at home. It uses a database in which
            there's stored all the info you might need.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Projects;
