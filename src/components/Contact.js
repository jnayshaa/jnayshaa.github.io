import React from 'react';
import background from "../images/contact_bg.jpg";

function Contact() {
    const backgroundStyle = {
        display: 'flex',
        justifyContent: 'flex-start', // Align content starting from the left
        alignItems: 'center', // Center vertically
        minHeight: '100vh', // Take full viewport height
        width: '100%', // Take full viewport width
        backgroundImage: `url(${background})`,
        backgroundSize: '50% 100%', // Cover only 50% width and 100% height of the viewport
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center', // Position it on the left center
        marginTop: '-100px', // Adjust if your navbar overlaps the page content
        backgroundColor: '#000' // Add a fallback color if the image is not available
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center vertically within container
        alignItems: 'flex-start', // Start aligning text from the center towards right
        width: '50%', // Take half the viewport width, starts from the center
        textAlign: 'left', // Ensure text alignment is left
        padding: '0 5%', // Add padding for spacing on both sides
        color: '#fff',
        marginLeft: '50%' // Move the container to start from the center
    };

    const textStyle = {
        font: "Helvetica, sans-serif",
        margin: 0, // Remove default margins
        padding: '5px 0', // Add minimal padding if needed for visual spacing
    };

    return (
        <div style={backgroundStyle}>
            <div style={textContainerStyle}>
                <p style={{ ...textStyle, fontSize: '40px' }}>I'd love to connect with you!</p>
                <p style={{ ...textStyle, fontSize: '30px' }}>Email: njain@knox.edu</p>
                <a href="https://www.linkedin.com/in/naysha-jain-130421207/" style={{ ...textStyle, fontSize: '30px', color: '#fff' }}>LinkedIn</a>
                <a href="https://github.com/jnayshaa/" style={{ ...textStyle, fontSize: '30px', color: '#fff' }}>GitHub</a>
            </div>
        </div>
    );
}

export default Contact;
