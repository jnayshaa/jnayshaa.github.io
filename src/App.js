import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  // Show the footer when scrolled to the bottom
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.getElementById("footer").style.transform = "translateY(0)";
    } else {
      document.getElementById("footer").style.transform = "translateY(100%)";
    }
  };

  return (
    <div className="font-sans text-white bg-black text-center">
      <Navbar />
      <div id="home" className="h-screen flex items-center justify-center pt-16">
        <Home />
      </div>
      <div id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 pt-16">
        <About />
      </div>
      <div id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 pt-16">
        <Experience />
      </div>
      <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 pt-16">
        <Contact />
      </div>
      <footer
        id="footer"
        className="bg-gray-800 text-white p-5 flex justify-between items-center fixed bottom-0 w-full h-18 max-w-full transform translate-y-full transition-transform duration-300 ease-in-out"
      >
        <span className="ml-10">Developed by Naysha Jain</span>
        <div>
          <a href="https://www.linkedin.com/in/naysha-jain-130421207/" target="_blank" rel="noopener noreferrer" className="text-white mx-5 underline">
            LinkedIn
          </a>
          <a href="https://github.com/jnayshaa" target="_blank" rel="noopener noreferrer" className="text-white mr-25 underline">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
