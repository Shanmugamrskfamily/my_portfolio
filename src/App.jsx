import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Portfolio/>
    </div>
  );
}

export default App;
