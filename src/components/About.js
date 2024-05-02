import React from "react";
import myImage from '../images/profileimage.png'; // Import your image file

function About() {
    return (
        <div>
        <h1 style={{ color: '#fff' }}>About Me</h1>
        <p style={{ color: '#fff' }}>I am Naysha Jain, a sophomore at Knox College. I am extremely inquisitive about the Universe and the founder of SPAACEWALK (an immersive astronomy community and learning platform). I love to express my thoughts and opinions through dance, writing works and art!
I am curious about the natural science out there in the universe and passionate about the science created by man!.</p>
        {/* Add size dimension in the image */}
        <img src={myImage} alt="myImage" style={{ width: '300px', height: '300px' }} />

        </div>
    );
    }

export default About;   