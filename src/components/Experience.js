import React from 'react';

function Experience() {
    const backgroundStyle = {
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
        minHeight: '100vh', // Take full viewport height
        width: '100%', // Take full viewport width
        // backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
        marginTop: '-100px',
        backgroundColor: '#000',
    };

    const textStyle = {
        font: "Helvetica, sans-serif",
        margin: 0, // Remove default margins
        padding: '5px 0', // Add minimal padding if needed for visual spacing
    };

    return (
        <div style = {backgroundStyle}>
            <p style={{...textStyle, fontSize: '100px'}}>Experience</p>
            {/* insert new line */}
            <br />
            <br />
            <p style={{...textStyle, color: '#fff' }}>I am Naysha Jain, a sophomore at Knox College. I am extremely inquisitive about the Universe and the founder of SPAACEWALK (an immersive astronomy community and learning platform). I love to express my thoughts and opinions through dance, writing works and art!
            I am curious about the natural science out there in the universe and passionate about the science created. </p>
        </div>
    );
}

export default Experience;