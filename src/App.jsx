import React from 'react';
import NavBar from './components/NavigationBar/NavigationBar';
import CV from './components/CV/Curriculum';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const App = function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Marc Martín Barrios</h1>
      <CV id="cv" />
      <About id="about" />
      <Contact id="contact" />
    </div>
  );
};

export default App;
