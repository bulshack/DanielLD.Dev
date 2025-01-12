import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import './App.css';
import Resume from './Components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
