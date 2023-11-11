//App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import 'react-toastify/dist/ReactToastify.css';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
