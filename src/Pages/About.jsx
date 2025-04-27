import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-10 py-4 fixed top-0 bg-semiqolon z-50 shadow">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src="semiqolon_logo_resized.png" alt="SemiQolon Logo" className="h-10 scale-[1] md:scale-[4] origin-left object-contain transition-transform duration-300 hover:scale-[4.2]" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 text-gold font-medium text-sm md:text-base">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/work" className="hover:text-white">Work</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="pt-5 -mt-5 pb-16 flex flex-col md:flex-row items-center justify-between w-screen overflow-hidden px-6 md:px-16">
        <div className="flex flex-col justify-start items-center text-center min-h-screen w-full bg-[#0d1b2a] pt-42">
          <h1 className="text-5xl font-bold text-gold mb-6">
            About
          </h1>
          {/* Mission Section (Text left, Image right) */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-12 text-center md:text-left">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To empower organizations to harness the full potential of their data, driving growth and creating actionable insights.
          </p>
        </div>
        <img src="/Images/mission.png" alt="Mission" className="w-60 h-60 object-contain" />
      </section>

      {/* Vision Section (Image left, Text right) */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-6 md:px-20 py-12">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be a global leader in data and AI-driven business transformation.
          </p>
        </div>
        <img src="/Images/vision.png" alt="Vision" className="w-60 h-60 object-contain" />
      </section>

      
      <section className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 my-10">
       
        <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gold mb-6">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-white space-y-4">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            </ul>
        </div>

      

        {/* Image Block */}
        <div className="md:w-1/2 flex justify-center">
            <img src="/Images/values.png" alt="Values" className="w-64 h-auto" />
        </div>
        </section>
        </div>
      </section>

            {/*<footer className="bg-[#0d1b2a] text-gold py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SemiQolon. All rights reserved.</p>
        <p className="mt-1 text-gray-400">Founded by Sreeja Kurapaty.</p>
      </footer>*/}
    </div>
  );
}

export default About;
