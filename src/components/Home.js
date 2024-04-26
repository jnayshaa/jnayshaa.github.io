import React from 'react';
// import { Link } from 'react-router-dom';

function Home(){

    const homeStyle = {
        // display: 'flex',
        font: 'Helvetica, sans-serif',
        marginTop: '100px',
        marginLeft: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    };

    return (
        <div>
            <p style={{ ...homeStyle, fontSize: '100px' }}>Hello!</p>
            <p style={{ ...homeStyle, fontSize: '50px' }}>Click on the links above to learn more about me.</p>
        </div>
    );
};

export default Home;