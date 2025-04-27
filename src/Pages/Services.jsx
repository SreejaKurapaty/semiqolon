import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Services() {
  const [selectedService, setSelectedService] = useState('');

  const serviceDescriptions = {
    'data-analysis': 'We turn raw data into meaningful insights through advanced analytics, dashboards, and reporting solutions.',
    'machine-learning': 'We build predictive machine learning models to automate and enhance decision-making for your business.',
    'data-visualization': 'We create stunning dashboards and interactive data visualizations to make sense of complex data.',
    'ai-strategy': 'We help you design AI strategies tailored to your business goals, merging innovation with execution.',
    'custom-solutions': 'We craft fully customized AI/ML solutions built to solve your unique business challenges.'
  };

  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-between w-screen overflow-hidden px-6 md:px-16">
        <div className="flex flex-col justify-start items-center text-center min-h-screen w-full bg-[#0d1b2a] pt-42">
          <p className="text-gray-400 text-lg mb-2">Explore Our Specialized Services</p>

          <select
            className="bg-[#0d1b2a] text-white border border-gold rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a Service</option>
            <option value="data-analysis">Data Analysis</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="data-visualization">Data Visualization</option>
            <option value="ai-strategy">AI Strategy Consulting</option>
            <option value="custom-solutions">Custom AI Solutions</option>
          </select>

          {/* Show description after selection */}
          {selectedService && (
            <div className="mt-8 max-w-2xl bg-gray-800 p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold text-gold mb-4 capitalize">
                {selectedService.split('-').join(' ')}
              </h2>
              <p className="text-gray-300">{serviceDescriptions[selectedService]}</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer (commented out for now)
      <footer className="bg-[#0d1b2a] text-gold py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SemiQolon. All rights reserved.</p>
        <p className="mt-1 text-gray-400">Founded by Sreeja Kurapaty.</p>
      </footer>
      */}
    </div>
  );
}

export default Services;
