import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center h-16 bg-black text-white px-4">
      <div className="flex items-center">
        <span className="text-white text-lg font-bold ml-4">Naysha Jain</span>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`fixed top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 md:space-y-0 md:relative md:flex-row md:space-x-4 md:top-0 md:left-auto md:bg-transparent md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <a href="#home" className="text-white text-base hover:underline">Home</a>
        </li>
        <li>
          <a href="#about" className="text-white text-base hover:underline">About</a>
        </li>
        <li>
          <a href="#experience" className="text-white text-base hover:underline">Experience</a>
        </li>
        <li>
          <a href="#contact" className="text-white text-base hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
