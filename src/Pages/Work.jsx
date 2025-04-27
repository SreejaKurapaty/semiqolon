import React from 'react';
import { Link } from 'react-router-dom';


function Work() {
  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans w-full overflow-x-hidden">
      {/* Navbar */}
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

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-12 text-gold font-semibold text-base md:text-lg">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/work" className="hover:text-white">Work</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-between w-screen overflow-hidden px-6 md:px-16">
        <div className="flex flex-col justify-start items-center text-center min-h-screen w-full bg-[#0d1b2a] pt-42">
          <h1 className="text-5xl font-bold text-gold mb-6">
            Our Work
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Coming Soon!
          </p>
        </div>
      </section>

            {/*<footer className="bg-[#0d1b2a] text-gold py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SemiQolon. All rights reserved.</p>
        <p className="mt-1 text-gray-400">Founded by Sreeja Kurapaty.</p>
      </footer>*/}
    </div>
  );
}

export default Work;
