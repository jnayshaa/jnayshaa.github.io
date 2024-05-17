import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const appStyle = {
    fontFamily: 'Helvetica, sans-serif',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Home />
      </div>
      <div id="about" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#111' }}>
        <About />
      </div>
      <div id="experience" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#222' }}>
        <Experience />
      </div>
      <div id="contact" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#333' }}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
