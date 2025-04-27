import React from 'react';
import Navbar from '../Components/Navbar'; // adjust path if needed

function Contact() {
  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-center text-center w-screen overflow-hidden px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mt-6 text-gold text-center">
            Contact Us
        </h1>
      </section>

      {/*<section className="flex flex-col items-center justify-center text-center pt-24 px-6">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gold">
          Contact Us
        </h1>
      </section> */}

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <form className="bg-[#0d1b2a] p-8 rounded-lg shadow-lg flex flex-col space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 mb-2">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gold" />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2">Email</label>
            <input type="email" id="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gold" />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gold"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-gold text-black font-semibold py-3 px-6 rounded hover:bg-yellow-400 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1b2a] text-gold py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SemiQolon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
