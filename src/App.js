import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Template from './components/template.js';

function App() {
  return (
    <div className="App scroll-assist bg-dark">
      <Navbar />
      <Template />
    </div>
  );
}

export default App;
