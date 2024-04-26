import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#355C7D'
};

const linkStyle = {
    font: "Helvetica, sans-serif",
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '16px'
};
  return (
    <nav style={navbarStyle}>
      <ul>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/experience" style={linkStyle}>Experience</Link>
        {/* <Link to="/other-info" style={linkStyle}>Other Info</Link> */}
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
