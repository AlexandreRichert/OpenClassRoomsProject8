import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
