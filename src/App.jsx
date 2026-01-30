import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar'; // Make sure this path is correct
import Collection from './pages/Collection';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import LocomotiveScroll from 'locomotive-scroll';



// Utility to reset scroll on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <ScrollToTop />
      

      <Navbar /> 
      
      <main className="bg-[#030610]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
<Footer />
    </Router>
  );
};

export default App;