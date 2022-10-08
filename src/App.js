import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import { useState } from 'react';

function App() {
  
  //category selection setter and getter. sets the current category to 'about' as the default
  const [otherSelected, setOtherSelected] = useState('About')

  return (
    <div className="App">
      <Header 
        // passing the category selection getter and setter into the header
        otherSelected={ otherSelected }
        setOtherSelected={ setOtherSelected }
      ></Header>
      <main>
        {/* conditionally rendering the pages based on the navigation selection */}
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
