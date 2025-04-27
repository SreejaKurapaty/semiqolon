import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 fixed top-0 bg-semiqolon z-50 shadow">
      <div className="flex items-center space-x-3">
        <Link to="/">
        <img 
                src="semiqolon_logo_resized.png" 
                alt="SemiQolon Logo" 
                className="h-5h-10 scale-[1] md:scale-[4] origin-left object-contain transition-transform duration-300 hover:scale-[4.2] md:h-16 object-contain transition-transform duration-300 hover:scale-105" 
            />
        </Link>
      </div>

      <ul className="hidden md:flex space-x-12 text-gold font-semibold text-base md:text-lg">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/services" className="hover:text-white">Services</Link></li>
        <li><Link to="/work" className="hover:text-white">Work</Link></li>
        <li><Link to="/about" className="hover:text-white">About</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
