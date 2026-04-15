import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORTED ASSETS
import Astra1 from '../assests/hero/astra1.webp'; 
import Astra2 from '../assests/hero/astra2.webp';
import Astra3 from '../assests/hero/astra3.webp';

const carouselImages = [
  { img: Astra1, title: "Modern Minimalism", loc: "Coimbatore" },
  { img: Astra2, title: "Bespoke Luxury", loc: "Chennai" },
  { img: Astra3, title: "Architectural Soul", loc: "Tamil Nadu" }
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNavigation = (path) => {
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      const element = document.getElementById(path);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#050A0F]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* --- LAYER 1: KEN BURNS SLIDER ENGINE --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.6,
              transition: { duration: 1.5, ease: "easeOut" }
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 1.5, ease: "easeIn" }
            }}
            className="absolute inset-0"
          >
            {/* The Image zooms from 1.0 to 1.15 over 7 seconds (Ken Burns Effect) */}
            <motion.img
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 7, ease: "linear" }}
              src={carouselImages[currentSlide].img}
              alt="Astra Interior Showcase"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Layered Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" />
      </div>

      {/* --- LAYER 2: RESPONSIVE CONTENT CONTAINER --- */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full space-y-6 md:space-y-10"
        >
          {/* Tagline */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 md:w-12 h-[1px] bg-[#00A3C4]/60" />
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#00A3C4] font-bold">
              Complete Interior Solutions
            </span>
            <div className="w-6 md:w-12 h-[1px] bg-[#00A3C4]/60" />
          </div>

          {/* Main Headline - Responsive Text Sizes */}
          <h1 
            className="text-[2.5rem] leading-[1.1] md:text-7xl lg:text-[7.5rem] font-bold text-white tracking-tighter drop-shadow-2xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            One Design. <br />
            <span 
              className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#00A3C4] via-white to-[#00A3C4] opacity-90"
              style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.1)" }}
            >
              One Expert Team.
            </span>
          </h1>

          {/* Subtext - Readable on all devices */}
          <p className="text-stone-300 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light px-4">
            From initial concepts to the last switchboard screw. 
            Delivering 47+ fully finished sanctuaries across Tamil Nadu.
          </p>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 w-full max-w-md sm:max-w-none">
            <button
              onClick={() => handleNavigation('/contactus')}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white text-[#1A365D] font-black uppercase tracking-widest text-[10px] hover:bg-[#00A3C4] hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-full active:scale-95"
            >
              Start Your Project
            </button>

            <button
              onClick={() => handleNavigation('/port')}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border border-white/20 text-white backdrop-blur-md font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all duration-500 rounded-full flex items-center justify-center group"
            >
              The Portfolio <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* --- LAYER 3: DYNAMIC PROGRESS BAR --- */}
        <div className="mt-16 md:mt-24 flex justify-center items-center space-x-6 md:space-x-12">
          {carouselImages.map((slide, idx) => (
            <button 
              key={idx} 
              className="group flex flex-col items-center sm:items-start focus:outline-none" 
              onClick={() => setCurrentSlide(idx)}
            >
              <span className={`hidden sm:block text-[9px] uppercase tracking-widest mb-3 transition-colors duration-500 ${idx === currentSlide ? 'text-[#00A3C4]' : 'text-stone-500 group-hover:text-stone-300'}`}>
                {slide.title}
              </span>
              <div className="relative w-12 md:w-32 h-[2px] bg-white/10 overflow-hidden rounded-full">
                {idx === currentSlide && (
                  <motion.div 
                    layoutId="activeSlideBar"
                    className="absolute inset-0 bg-[#00A3C4]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 7, ease: "linear" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- LAYER 4: RESPONSIVE TRUST HUD --- */}
      <div className="absolute bottom-6 md:bottom-10 w-full px-6 flex justify-center lg:justify-between items-center z-30 pointer-events-none">
        <div className="hidden lg:grid grid-cols-4 gap-12 opacity-50">
          {[
            { icon: CheckCircle2, text: '1+ Year Advantage' },
            { icon: ShoppingBag, text: '47+ Finished Homes' },
            { icon: CheckCircle2, text: 'End-to-End Civil' },
            { icon: Star, text: '4.9★ Review Score' }
          ].map((trust, i) => (
            <div key={i} className="flex items-center space-x-2">
              <trust.icon className="w-3 h-3 text-[#00A3C4]" />
              <span className="text-[8px] uppercase tracking-[0.3em] text-white font-bold whitespace-nowrap">{trust.text}</span>
            </div>
          ))}
        </div>
        
        {/* Mobile Location Indicator */}
        <div className="flex items-center space-x-2 lg:opacity-50">
           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[9px] uppercase tracking-widest text-white/70 font-medium">Currently: {carouselImages[currentSlide].loc}</span>
        </div>
      </div>
    </section>
  );
}