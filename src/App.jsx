//App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
