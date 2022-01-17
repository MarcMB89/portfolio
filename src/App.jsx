import React from 'react';

import {
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/Header/NavigationBar';
import About from './components/About/About';
import Projects from './components/Project-List/Projects';
import CV from './components/CV/Curriculum';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GoBackButton from './components/ScrollBackToTop/ScrollBack';

const App = function App() {
  return (
    <Router>
      <Header />
      <About />
      <Projects />
      <CV />
      <Contact />
      <GoBackButton />
      <Footer />
    </Router>
  );
};

export default App;
