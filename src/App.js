import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import { useState } from 'react';

function App() {

  const [otherSelected, setOtherSelected] = useState('About')

  return (
    <div className="App">
      <Header 
        otherSelected={ otherSelected }
        setOtherSelected={ setOtherSelected }
      ></Header>
      <main>
        {otherSelected === 'About' ? (
          <About></About>
        ) : otherSelected === 'Portfolio' ? (
          <Project></Project>
        ) : (
          <p>Hellloooooo</p>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
