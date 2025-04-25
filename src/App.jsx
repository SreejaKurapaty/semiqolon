import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-10 py-4 fixed top-0 bg-semiqolon z-50 shadow">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <img src="semiqolon_logo_resized.png" alt="SemiQolon Logo" className="h-10 scale-[1] md:scale-[4] origin-left object-contain transition-transform duration-300 hover:scale-[4.2]"/>
          {/*<span className="text-white text-2xl md:text-3xl font-bold"></span>*/}
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 text-gold font-medium text-sm md:text-base">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Work</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-between w-screen overflow-hidden px-6 md:px-16">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering businesses through <span className="text-gold">Data & AI</span>
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            We help you extract insights, build smarter solutions, and turn data into real business value.
          </p>
          <button className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400">
            Get Started
          </button>
        </div>
        <img src="/illustration1.png" alt="Data Illustration" className="w-full max-w-md" />
      </section>

      {/* Services Section */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-3xl  font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="bg-[#0d1b2a] rounded-xl p-8 text-center shadow hover:shadow-xl transition-all text-gold">
            <img src="/data-analysis.png" alt="Data Analysis" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-sm text-white">Turn raw data into meaningful insights for smarter business decisions.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#0d1b2a] rounded-xl p-8 text-center shadow hover:shadow-xl transition-all text-gold">
            <img src="/machine-learning.png" alt="Machine Learning" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-sm text-white">Build predictive models to automate and enhance decision-making.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#0d1b2a] rounded-xl p-8 text-center shadow hover:shadow-xl transition-all text-gold">
            <img src="/data-visualization.png" alt="Data Visualization" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
            <p className="text-sm text-white">Create dashboards and visual stories to better understand your data.</p>
          </div>
        </div>
      </section>
      {/* Work Section (optional placeholder) 
<section id="work" className="bg-semiqolon text-white py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">Our Work</h2>
  <p className="text-gray-300">COMING SOON!!</p>
</section>

<section id="about" className="bg-semiqolon text-white py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">About Us</h2>
  <p className="text-gray-300 max-w-2xl mx-auto">
    SemiQolon is a team of data scientists, analysts, and engineers helping businesses make smarter decisions through data.
  </p>
</section>*/}

    </div>
  );
}

export default App;
