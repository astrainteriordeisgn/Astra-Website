import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORTED ASSETS: Local optimized WebP files
import Astra1 from '../assests/hero/astra1.webp'; 
import Astra2 from '../assests/hero/astra2.webp';
import Astra3 from '../assests/hero/astra3.webp';

const carouselImages = [Astra1, Astra2, Astra3];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    // Automatic slide transition every 6 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
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
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-black"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* --- LAYER 1: CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={carouselImages[currentSlide]}
              /* FIXED: Removed redundant word 'Image' to clear ESLint warning */
              alt={`Astra Portfolio Showcase ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 z-10" />
      </div>

      {/* --- LAYER 2: CENTRAL CONTENT --- */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center pt-20">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 lg:w-12 h-[1px] bg-[#A68A64]"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#A68A64] font-bold">
              Complete Interior Solutions
            </span>
            <div className="w-8 lg:w-12 h-[1px] bg-[#A68A64]"></div>
          </div>

          <h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            One Design. One Team. <br />
            <span className="italic text-stone-400 font-light text-2xl md:text-4xl lg:text-6xl">Fully Finished Interiors.</span>
          </h1>

          <p className="text-stone-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Interior design, modular solutions, custom furniture, painting, and electrical — all handled by one expert team across Tamil Nadu. We deliver fully completed interiors you can move into immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button
              onClick={() => handleNavigation('/contactus')}
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-[#A68A64] hover:text-white transition-all duration-500 transform-gpu active:scale-95 shadow-2xl"
            >
              Get Free Design Consultation
            </button>

            <button
              onClick={() => handleNavigation('/port')}
              className="px-10 py-4 border border-white/30 text-white backdrop-blur-md font-bold uppercase tracking-widest text-[10px] hover:border-white hover:bg-white/10 transition-all duration-500 transform-gpu active:scale-95 flex items-center justify-center"
            >
              View Our Projects <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* --- LAYER 3: TRUST BAR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 border-t border-white/10 pt-10"
        >
          {[
            { icon: CheckCircle2, text: '1+ Year Experience' },
            { icon: ShoppingBag, text: '47+ Projects Finished' },
            { icon: CheckCircle2, text: 'Homes & Offices across TN' },
            { icon: Star, text: '4.9★ Client Rating' }
          ].map((trust, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 group">
              <trust.icon className="w-5 h-5 text-[#A68A64] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] lg:text-[11px] uppercase tracking-widest text-stone-400 font-medium group-hover:text-white transition-colors">
                {trust.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slide Navigation (Vertical) */}
      <div className="absolute bottom-12 right-6 lg:right-12 z-30 flex flex-col space-y-4 items-end">
        {carouselImages.map((_, idx) => (
          <div key={idx} className="flex items-center space-x-4 group cursor-pointer" onClick={() => setCurrentSlide(idx)}>
             <span className={`text-[10px] font-bold transition-all ${idx === currentSlide ? 'text-white translate-x-0' : 'text-stone-600 translate-x-2 opacity-0 group-hover:opacity-100'}`}>0{idx + 1}</span>
             <div className={`h-8 lg:h-12 w-[2px] transition-all duration-500 ${idx === currentSlide ? 'bg-[#A68A64]' : 'bg-white/10 group-hover:bg-white/30'}`} />
          </div>
        ))}
      </div>
    </section>
  );
}