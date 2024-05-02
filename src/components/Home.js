import React, { useState, useEffect } from 'react';
import '../Home.css';

function Home(){

    const homeStyle = {
        display: 'flex',
        font: "Oxygen, sans-serif",
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
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
      }, 3000); // Change text every 10 seconds
  
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
        <div>
            <p style={{ ...homeStyle, fontSize: '200px', marginTop: '200px'}}>Hello!</p>
            <p style={{...homeStyle, fontSize: '50px', marginTop: '-200px'}}> I am a {displayedText}</p>
        </div>
    );
};

export default Home;