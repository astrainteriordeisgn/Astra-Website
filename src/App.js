import React, {lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Whatsapp from './components/whatsapp';
import ScrollToTop from './components/scrolltotop'; // Scroll logic
import Scrollup from './components/scrollup';     // The UI button
import HammerScroll from './components/pages/HammerScroll'; // The UI button

// Lazy load page-level components
const Homepage = lazy(() => import('./components/Homepage'));
const Aboutus = lazy(() => import('./components/pages/Aboutus'));
const Contactus = lazy(() => import('./components/pages/Contactus'));
const BlogSectionClassic = lazy(() => import('./components/pages/Blog'));
const PortfolioPage = lazy(() => import('./components/pages/portfolio'));
const Services = lazy(() => import('./components/Services'));
const ThankYou = lazy(() => import('./components/Thankyoupage'));

function App() {
  return (
    
    <Router>
      <HammerScroll />
      {/* 1. Logic & Global UI elements */}
      <ScrollToTop /> 
      
      <Navigation />
      <Whatsapp />
      <Scrollup />  
      

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/blog" element={<BlogSectionClassic />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/port" element={<PortfolioPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
      
    
      <Footer />
    </Router>
  );
}

export default App;