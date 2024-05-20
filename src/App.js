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
    backgroundColor: '#000',
    textAlign: 'center',
    paddingBottom: '60px', // Add padding at the bottom to account for footer
  };

  const footerStyle = {
    backgroundColor: '#000', // Updated to black
    color: '#fff',
    padding: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    maxWidth: '100vw', // Ensure the footer doesn't exceed the viewport width
    transform: 'translateY(100%)', // Initially hide the footer
    transition: 'transform 0.3s ease-in-out', // Add transition for smooth visibility
  };

  // Show the footer when scrolled to the bottom
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.getElementById("footer").style.transform = "translateY(0)";
    } else {
      document.getElementById("footer").style.transform = "translateY(100%)";
    }
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '60px' }}>
        <Home />
      </div>
      <div id="about" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', paddingTop: '60px' }}>
        <About />
      </div>
      <div id="experience" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#222', paddingTop: '60px' }}>
        <Experience />
      </div>
      <div id="contact" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#333', paddingTop: '60px' }}>
        <Contact />
      </div>
      <footer id="footer" style={footerStyle}>
        <span style={{ marginLeft: '40px' }}>Developed by Naysha Jain</span>
        <div>
          <a href="https://www.linkedin.com/in/nayshajain/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 20px' }}>LinkedIn</a>
          <a href="https://github.com/naysha-jain" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '100px' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
