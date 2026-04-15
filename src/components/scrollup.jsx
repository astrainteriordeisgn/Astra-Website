import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const observerTarget = useRef(null);

  // Integrated Brand Colors
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  useEffect(() => {
    // Zero-Reflow Logic: 
    // Uses the browser's native Compositor thread instead of the JS Main thread.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* SENTINEL: Invisible marker placed 500px from the top */}
      <div 
        ref={observerTarget} 
        className="absolute top-[500px] left-0 w-1 h-1 pointer-events-none" 
        aria-hidden="true"
      />

      <div 
        className={`fixed bottom-8 left-8 z-[1000] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group relative flex items-center justify-center w-14 h-14 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-500 shadow-2xl overflow-hidden"
          style={{ backgroundColor: `${brandNavy}CC` }} // 80% opacity Navy
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = brandTeal;
            e.currentTarget.style.backgroundColor = brandNavy;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.backgroundColor = `${brandNavy}CC`;
          }}
        >
          {/* Hardware Accelerated Icon in Brand Teal */}
          <ChevronUp 
            className="w-6 h-6 transition-all duration-500 transform-gpu" 
            style={{ color: brandTeal }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
            onMouseLeave={(e) => e.currentTarget.style.color = brandTeal}
          />

          {/* Animated Ambient Ring in Brand Teal */}
          <div 
            className="absolute inset-0 rounded-full border animate-[ping_3s_linear_infinite] opacity-50 pointer-events-none" 
            style={{ borderColor: `${brandTeal}33` }} 
          />
          
          {/* Luxury Hover Gradient using Brand Teal */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
            style={{ background: `linear-gradient(to top, ${brandTeal}33, transparent)` }}
          />
        </button>
      </div>
    </>
  );
}