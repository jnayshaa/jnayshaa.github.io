import React from 'react';
import logo1 from "../images/balance.png";
import logo2 from "../images/seti.png";
import logo3 from "../images/virufy.png";

const Experience = () => {
    const resumeUrl = "https://drive.google.com/file/d/1YwXg9t4LhMPNDkalFAOHKiKCEkEK1Jd_/view?usp=sharing";

    return (
        <div className="min-h-screen bg-[#15101D] flex flex-col justify-center items-center p-8 w-full bg-no-repeat -mt-20">

            <h1 className="text-5xl font-bold mb-12">Work Experience</h1>

            <div className="w-full max-w-4xl">
                <div className="flex flex-col items-center mb-8 md:mb-0 md:flex-row md:justify-around md:gap-8">
                    {/* Project Scientist BALANCE */}
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <img src={logo1} alt="BALANCE Logo" className="w-43 h-43 mb-4 object-contain" />
                        <h2 className="text-xl text-yellow-300 font-bold">Project Scientist</h2>
                        <h3 className="text-lg text-yellow-300 font-semibold">BALANCE</h3>
                        <p className="text-center">Edge of Space Academy<br />University of Iowa</p>
                        <p>July 2023</p>
                    </div>

                    {/* Web Developer Virufy */}
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <img src={logo3} alt="Virufy Logo" className="w-43 h-43 mb-4 object-contain" />
                        <h2 className="text-xl text-yellow-300 font-bold">Web Developer</h2>
                        <h3 className="text-lg font-semibold">Virufy</h3>
                        <p className="text-center">June 2024 - present</p>
                    </div>

                    {/* Researcher SETI */}
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <img src={logo2} alt="SETI Logo" className="w-43 h-43 mb-4 object-contain" />
                        <h2 className="text-xl text-yellow-300 font-bold">Researcher</h2>
                        <h3 className="text-lg text-yellow-300 font-semibold">Planetary Protection</h3>
                        <p className="text-center">SETI</p>
                        <p>June 2024 - present</p>
                    </div>
                </div>
            </div>

            <p className="text-2xl mt-5 mb-5">...and more</p>

            {/* Button to download the resume */}
            <a href={resumeUrl} download="Naysha_Jain_Resume.pdf" className="mt-8 mb-8 md:mb-0">
                <button 
                    type="button" 
                    className="bg-[#F05A28] text-white py-2 px-4 rounded hover:bg-[#c54b1e] transition duration-300"
                >
                    Download Resume/CV
                </button>
            </a>

        </div>
    );
};

export default Experience;
