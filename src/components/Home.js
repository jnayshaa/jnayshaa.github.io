import React, { useState, useEffect } from 'react';
import background from "../images/home_bg.png";
import Mbackground from "../images/profile.PNG";
import useMediaQuery from 'react-responsive';

function Home() {
    const rotatingTexts = ["a student", "a developer", "an astronomer", "a creator"];
    const [currentText, setCurrentText] = useState(rotatingTexts[0]);
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        <div
            className={`flex justify-end items-center min-h-screen w-full bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${isMobile ? Mbackground : background})` }}
        >
            <div className={`flex flex-col justify-center items-start ${isMobile ? 'text-center w-full px-3' : 'w-1/2 text-left px-5'} text-white`}>
                <p className={`font-sans m-0 p-1 ${isMobile ? 'text-xl' : 'text-3xl'}`}>Hello! I am </p>
                <p className={`font-montserrat m-0 p-1 ${isMobile ? 'text-5xl' : 'text-9xl'}`}>Naysha</p>
                <p className={`font-sans m-0 p-1 ${isMobile ? 'text-5xl' : 'text-9xl'}`}>Jain</p>
                <p className={`font-sans m-0 p-1 ${isMobile ? 'text-xl' : 'text-3xl'}`}>I am {displayedText}</p>
            </div>
        </div>
    );
}

export default Home;
