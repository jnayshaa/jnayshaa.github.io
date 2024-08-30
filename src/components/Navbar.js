import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center h-16 bg-black text-white px-4">
      <div className="flex items-center">
        <span className="text-white text-lg font-bold ml-4">Naysha Jain</span>
      </div>
      <ul className="flex list-none">
        <li className="mr-4">
          <a href="#home" className="text-white text-base hover:underline mr">Home</a>
        </li>
        <li className="mr-4">
          <a href="#about" className="text-white text-base hover:underline">About</a>
        </li>
        <li className="mr-4">
          <a href="#experience" className="text-white text-base hover:underline">Experience</a>
        </li>
        <li>
          <a href="#contact" className="text-white text-base hover:underline mr-4">Contact</a>
          {/*  font-semibold */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;