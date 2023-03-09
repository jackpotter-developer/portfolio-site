import React from "react"
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills'
import Scrollbar from './components/Scrollbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div>
          <Navbar />
          {/* <Scrollbar /> */}
          <Hero />
          {/* <About /> */}
          <Skills />
          <Projects />
          <Contact />
      </div>
    </HashRouter>
  );
}

export default App;
