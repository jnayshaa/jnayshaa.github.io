import React from 'react';

const Experience = () => {
    // URL to the resume file stored in your GitHub repository
    const resumeUrl = "https://github.com/yourusername/your-repository-name/raw/main/path-to-your-resume/resume.pdf";

    return (
        <div>
            <h1>Experience</h1>
            <p>Here is my professional experience.</p>
            {/* Button to download the resume */}
            <a href={resumeUrl} download="YourName_Resume.pdf">
                <button type="button">
                    Download Resume
                </button>
            </a>
        </div>
    );
};

export default Experience;
