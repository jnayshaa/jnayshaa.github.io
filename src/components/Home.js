import React, { useState, useEffect } from 'react';
import background from "../images/home_bg.png";

function Home(){

    const backgroundStyle = {
      display: 'flex',
      flexDirection: 'column', // Stack children vertically
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      height: '100vh', // Take full viewport height
      width: '100%', // Take full viewport width
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    const homeStyle = {
      font: "Helvetica, sans-serif",
      color: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      margin: 0, // Remove default margins
      padding: '5px 0' // Add minimal padding if needed for visual spacing
    };

    const rotatingTexts = ["student", "developer", "designer", "creator"];
    const [currentText, setCurrentText] = useState(rotatingTexts[0]);
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const changeText = () => {
        if (index < rotatingTexts.length) {
          setCurrentText(rotatingTexts[index]);
          setDisplayedText('');
        }
      };
  
      changeText();
  
      const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
      }, 3000); // Change text every 3 seconds
  
      return () => clearInterval(intervalId);
    }, [index]);
  
    useEffect(() => {
      let charIndex = 0;
      const typeEffect = setInterval(() => {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
        if (charIndex > currentText.length) clearInterval(typeEffect);
      }, 150); // Typing speed in milliseconds
  
      return () => clearInterval(typeEffect);
    }, [currentText]);


    return (
        <div style={backgroundStyle}>
            <p style={{...homeStyle, fontSize: '30px', marginTop: '-300px'}}>Hello! I am </p>
            <p style={{...homeStyle, fontSize: '100px'}}>Naysha Jain</p>
            <p style={{...homeStyle, fontSize: '30px'}}> I am a {displayedText}</p>
        </div>
    );
};

export default Home;