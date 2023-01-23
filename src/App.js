import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { useState } from 'react';
import loadWebFont from './utils/webfont';

function App() {
  
  //category selection setter and getter. sets the current category to 'about' as the default
  const [otherSelected, setOtherSelected] = useState('About')

  loadWebFont('Urbanist')

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
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
