import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Services from './Pages/Services';
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans w-full overflow-x-hidden pt-28">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
