import React from 'react';
import NavBar from './components/Header/NavigationBar';
import CV from './components/CV/Curriculum';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Project-List/Projects';
import Footer from './components/Footer/Footer';

const App = function App() {
  return (
    <div className="App">
      <NavBar />
      <About id="about" />
      <Projects id="projects" />
      <CV id="cv" />
      <Contact id="contact" />
      <Footer is="footer" />
    </div>
  );
};

export default App;
