import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, ArrowUpRight,} from "lucide-react";
import logo from "../assests/astralogo.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "20px 0px 0px 0px" }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const navLinks = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "Studio", path: "/about" },
    { name: "Work", path: "/port" },
    { name: "Journal", path: "/blog" },
  ], []);

  return (
    <>
      <div ref={observerTarget} className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out bg-white/90 backdrop-blur-md border-b border-stone-100 ${
          scrolled ? "py-2 shadow-sm" : "py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* BRANDING SECTION: CLEAN ORIGINAL LOGO */}
          <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center">
            <div className="relative transition-transform duration-500 group-hover:scale-105">
              <img 
                src={logo} 
                alt="Astra Studio" 
                className="h-12 w-auto md:h-14 object-contain" 
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative py-1 text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300
                  ${isActive ? "text-[#A68A64]" : "text-black/60 hover:text-black"}
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#A68A64] transition-all duration-500 origin-left ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'}`} />
                  </>
                )}
              </NavLink>
            ))}
            
            <Link 
              to="/contactus" 
              className="px-8 py-3 bg-black text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 hover:bg-[#A68A64] active:scale-95 shadow-xl"
            >
              Inquire
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col items-end justify-center space-y-1.5 p-2"
            aria-label="Open navigation menu"
          >
            <div className="w-6 h-[1.5px] bg-black" />
            <div className="w-4 h-[1.5px] bg-black" />
          </button>
        </div>
      </header>

      {/* FULLSCREEN MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-[60] bg-white flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-10 py-10">
          <img src={logo} alt="Astra" className="h-8 w-auto object-contain" />
          <button onClick={() => setIsOpen(false)} className="h-12 w-12 bg-stone-100 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-grow flex flex-col justify-center px-12 space-y-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                group flex items-center justify-between text-5xl md:text-7xl font-serif transition-all duration-500
                ${isActive ? "text-[#A68A64]" : "text-black hover:text-stone-400"}
              `}
              style={{ transitionDelay: isOpen ? `${idx * 70}ms` : '0ms' }}
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-10 h-10 opacity-20 group-hover:opacity-100 transition-all" />
            </NavLink>
          ))}
        </nav>

        <div className="p-12 border-t border-stone-100 bg-stone-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold">Project Desk</p>
              <a href="mailto:astrainterior83@gmail.com" className="text-sm text-black hover:text-[#A68A64] transition-colors font-medium">astrainterior83@gmail.com</a>
            </div>
            <div className="flex items-end justify-center md:justify-end">
               <span className="text-[10px] text-stone-300 uppercase tracking-[0.5em]">Race Course, Coimbatore</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}