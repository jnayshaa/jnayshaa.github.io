import React, { useState, useEffect } from 'react';
import bgimage from '../images/about_bg.png';

function About() {
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
        <div
            className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat -mt-20"
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <div className="flex flex-col justify-center items-start w-2/5 text-left px-10 text-white mr-auto">
                <div className="h-24 overflow-hidden">
                    <p className="font-sans m-0 p-1 text-6xl h-full flex items-center text-gray-400">{displayedText}</p>
                </div>
                <p className="font-sans m-0 p-1 text-4xl">My name is Naysha and I'm a second year BS Computer Science and Physics & Astronomy student at Knox College.</p>
                <p className="font-sans m-0 p-1 text-base text-justify">I am curious about the natural science out there in the universe and passionate about the science created by man! I love to express my thoughts and opinions through dance, writing works and art!</p>
            </div>
        </div>
    );
}

export default About;

// Explanation of Tailwind CSS Classes Used:
// flex: Applies display: flex.
// justify-center: Centers content horizontally.
// items-center: Centers content vertically.
// min-h-screen: Sets the minimum height to 100vh (full viewport height).
// w-full: Sets the width to 100%.
// bg-cover: Ensures the background image covers the entire container.
// bg-center: Centers the background image.
// bg-no-repeat: Prevents the background image from repeating.
// -mt-24: Applies a negative top margin to adjust the vertical position.
// flex-col: Applies flex-direction: column.
// justify-center: Centers items vertically within the flex container.
// items-start: Aligns items to the start (left) within the flex container.
// w-2/5: Sets the width to 40%.
// text-left: Aligns text to the left.
// px-10: Applies horizontal padding.
// text-white: Sets the text color to white.
// mr-auto: Applies a margin-right auto to push the container to the left.
// h-24: Sets a fixed height.
// overflow-hidden: Hides overflow.
// font-sans: Applies the default sans-serif font.
// m-0: Removes margin.
// p-1: Applies padding.
// text-6xl: Sets the font size.
// h-full: Sets the height to full.
// flex: Applies display: flex.
// items-center: Centers content vertically within the flex container.
// text-gray-400: Sets the text color to gray.
// text-4xl: Sets the font size.
// text-base: Sets the font size to base.
// text-justify: Justifies the text.