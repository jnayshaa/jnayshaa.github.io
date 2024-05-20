import React from 'react';

const navbarStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between', // Updated to space-between to push items to the sides
  alignItems: 'center',
  height: '60px',
  backgroundColor: 'black',
  padding: '0 20px' // Added padding for better spacing
};

const linkStyle = {
  font: 'Helvetica, sans-serif',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  // marginLeft: '10px' // Added margin to create space between links
  marginRight: '10px' // Updated to marginRight to create space between links
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <span style={{ color: '#fff', marginLeft: '20px' }}>Naysha Jain</span>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#experience" style={linkStyle}>Experience</a></li>
        <li><a href="#contact" style={{...linkStyle, marginRight: '50px'}}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
