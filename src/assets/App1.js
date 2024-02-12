import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {

    return (
        <div className="App">
            <Header></Header>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
