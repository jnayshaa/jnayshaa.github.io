import React from "react";
import myImage from '../images/profile.PNG'; // Import your image file

function About() {
    return (
        <div>
        <h1 style={{ color: '#fff' }}>About Me</h1>
        <p style={{ color: '#fff' }}>I am a web developer.</p>
        <img src={myImage} alt="My Photo" />

        </div>
    );
    }

export default About;   