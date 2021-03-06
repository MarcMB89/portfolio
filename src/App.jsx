import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/NavBar/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GoBackButton from './components/ScrollBackToTop/ScrollBack';

const App = function App() {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <GoBackButton />
      <Footer />
    </Router>
  );
};

export default App;
