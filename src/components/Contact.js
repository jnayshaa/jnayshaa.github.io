import React from 'react';
import background from "../images/contact_bg.jpg";

function Contact() {
    return (
        <div
            className="flex justify-end items-center min-h-screen w-full bg-no-repeat bg-left-center bg-black -mt-24"
            style={{ backgroundImage: `url(${background})`, backgroundSize: '50% 100%' }}
        >
            <div className="flex flex-col justify-center items-start w-1/2 text-left px-5 text-white">
                <p className="font-sans m-0 p-1 text-4xl">I'd love to connect with you!</p>
                <a href="mailto:njain@knox.edu" className="font-sans m-0 p-1 text-3xl text-white underline">
                    njain@knox.edu
                </a>
                <a href="mailto:jnaysha@gmail.com" className="font-sans m-0 p-1 text-3xl text-white underline">
                    jnaysha@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/naysha-jain-130421207/" className="font-sans m-0 p-1 text-3xl text-white underline">
                    LinkedIn
                </a>
                <a href="https://github.com/jnayshaa/" className="font-sans m-0 p-1 text-3xl text-white underline">
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Contact;
