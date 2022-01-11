import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

import Header from './components/Header/NavigationBar';
import About from './components/About/About';
import Projects from './components/Project-List/Projects';
import CV from './components/CV/Curriculum';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/Not-found/Not-found';

const App = function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
