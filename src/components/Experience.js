import React from 'react';

const Experience = () => {
    // URL to the resume file stored in your GitHub repository
    const resumeUrl = "https://github.com/jnayshaa/resume/blob/main/src/Naysha%20Jain%20Resume.pdf";

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8 w-full bg-no-repeat -mt-24">

            <h1 className="text-4xl font-bold mb-4">Experience</h1>
            <p className="text-lg mb-8">Here is my professional experience.</p>
            {/* Button to download the resume */}
            <a href={resumeUrl} download="Naysha_Jain_Resume.pdf">
                <button 
                    type="button" 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                    Download Resume
                </button>
            </a>
        </div>
    );
};

export default Experience;
