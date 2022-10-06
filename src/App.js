import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
