import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import ModularKitchens from './pages/ModularKitchens';
import BedroomWardrobes from './pages/BedroomWardrobes';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-ivory selection:bg-stone selection:text-background font-sans">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modular-kitchens" element={<ModularKitchens />} />
        <Route path="/wardrobes" element={<BedroomWardrobes />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
