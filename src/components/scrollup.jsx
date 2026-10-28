
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const brandNavy = '#1A365D';
  const brandTeal = '#00A3C4';

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 500);
        ticking = false;
      });
    };

    updateVisibility();

    window.addEventListener('scroll', updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`
        group fixed bottom-5 left-5 sm:bottom-8 sm:left-8
        z-[1000] flex h-12 w-12 sm:h-14 sm:w-14
        items-center justify-center overflow-hidden rounded-full
        border backdrop-blur-xl
        transition-all duration-500
        ease-[cubic-bezier(0.23,1,0.32,1)]
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2
        ${isVisible
          ? 'translate-y-0 scale-100 opacity-100'
          : 'pointer-events-none translate-y-6 scale-90 opacity-0'
        }
      `}
      style={{
        backgroundColor: isHovered ? brandNavy : `${brandNavy}E6`,
        borderColor: isHovered
          ? brandTeal
          : 'rgba(255,255,255,0.15)',
        '--tw-ring-color': brandTeal,
      }}
    >
      {/* Hover gradient */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 rounded-full opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: `linear-gradient(
            135deg,
            ${brandTeal}40,
            transparent 70%
          )`,
        }}
      />

      {/* Subtle ambient ring */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 rounded-full border
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{ borderColor: `${brandTeal}80` }}
      />

      {/* Arrow icon */}
      <ChevronUp
        size={24}
        strokeWidth={2.5}
        aria-hidden="true"
        className="
          relative z-10 transition-transform duration-300
          group-hover:-translate-y-0.5
        "
        style={{
          color: isHovered ? '#FFFFFF' : brandTeal,
        }}
      />
    </button>
  );
}
