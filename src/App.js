import React from 'react';


import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Template from './components/footer.js';
import Profile from './components/Profile/profile.js';
import About from '../src/components/Aboutme/about.js';
import Myskills from './components/Myskills/skiils.js';
import Studies from '../src/components/Studies/studies.js';
import Project from '../src/components/Project/project.js';

function App() {
  return (
    <div className="App scroll-assist bg-dark">
      <Navbar />
      <Profile/>
      <About/>
      <Myskills/>
      <Studies/>
      <Project />
      <Template />
      
    </div>
  );
}

export default App;
