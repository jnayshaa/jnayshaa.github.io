import React from 'react';

const navbarStyle = {
  position:'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
  backgroundColor: '#355C7D' //'#000' // black
};

const linkStyle = {
  font: "Helvetica, sans-serif",
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
  fontSize: '16px'
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#experience" style={linkStyle}>Experience</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
