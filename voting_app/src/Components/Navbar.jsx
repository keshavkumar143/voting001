import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="p-4 bg-black absolute top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="cursor-pointer bg-cover">
            <img src="./src/Images/logo.png" className="h-35 w-20" alt="Logo" />
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to="/" className="text-white hover:text-sky-400 font-mono text-xl md:text-2xl">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about" className="text-white hover:text-sky-400 font-mono text-xl md:text-2xl">About</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact" className="text-white hover:text-sky-400 font-mono text-xl md:text-2xl">Contact</Link>
          </li>
          <li>
            <Link to="/help" className="text-white hover:text-sky-400 font-mono text-xl md:text-2xl">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
