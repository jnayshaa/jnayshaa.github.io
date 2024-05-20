import React, { useState, useEffect } from 'react';
import bgimage from '../images/about_bg.png';

function About() {

    const backgroundStyle = {
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
        minHeight: '100vh', // Take full viewport height
        width: '100%', // Take full viewport width
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
        marginTop: '-100px'
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'flex-start', // Align text to the left within the container
        width: '40%', // Take half the viewport width
        textAlign: 'left', // Justify text
        padding: '0 5%', // Add padding for spacing
        color: '#fff',
        marginRight: 'auto'
    };

    const homeStyle = {
        font: "Helvetica, sans-serif",
        margin: 0, // Remove default margins
        padding: '5px 0', // Add minimal padding if needed for visual spacing
    };

    const rotatingTexts = ["Hello!", "Namaste!", "Bonjour!"];
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
            <div style={textContainerStyle}>
                <div style={{ height: '90px', overflow: 'hidden' }}>
                    <p style={{ ...homeStyle, fontSize: '70px', height: '100%', display: 'flex', alignItems: 'center', color: '#A4B4BF' }}>{displayedText}</p>
                </div>
                <p style={{ ...homeStyle, fontSize: '40px' }}>My name is Naysha and I'm a second year BS Computer Science and Physics & Astronomy student at Knox College.</p>
                <p></p>
                <p style={{ ...homeStyle, fontSize: '15px', textAlign:'justify' }}>I am curious about the natural science out there in the universe and passionate about the science created by man! I love to express my thoughts and opinions through dance, writing works and art!</p>
            </div>
        </div>
    );
}

export default About;
