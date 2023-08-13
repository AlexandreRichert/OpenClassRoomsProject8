import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Main />
      <Portfolio />
      <Contact />
    </HashRouter>  );
}

export default App;
