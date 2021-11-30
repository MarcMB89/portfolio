import React from 'react';
import NavBar from './components/NavigationBar/NavigationBar';
import CV from './components/CV/Curriculum';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App = function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="construction">UNDER CONSTRUCTION</h2>
      <About id="about" />
      <Projects id="projects" />
      <CV id="cv" />
      <Contact id="contact" />
    </div>
  );
};

export default App;
