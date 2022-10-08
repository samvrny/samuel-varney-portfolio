import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
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
        ) : otherSelected === 'Contact' ? (
          <Contact></Contact>
        ) : (
          <Resume></Resume>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
