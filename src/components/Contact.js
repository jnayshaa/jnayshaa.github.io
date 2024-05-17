import React from 'react';

const textStyle = {
    display: 'flex',
    font: "Helvetica, sans-serif",
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    // margin: 0, // Remove default margins
    // padding: '5px 0' // Add minimal padding if needed for visual spacing
  };

function Contact() {
    return (
        <div>
        <h1 style={textStyle}>Contact Me</h1>
        <p style={{ color: '#fff' }}>Email: njain@knox.edu</p>
        <p style={{ color: '#fff' }}>Phone: 123-456-7890</p>
        </div>
    );
    }

export default Contact;