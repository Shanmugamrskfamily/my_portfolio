//App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import 'react-toastify/dist/ReactToastify.css';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
