import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock, Home } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // --- MOTION & SCROLL LOGIC ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const offsetDistance = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "ebb6356a-ccd3-4584-9c7a-98cec10bbc98");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Inquiry Sent Successfully!");
        event.target.reset();
        setTimeout(() => { navigate('/thank-you'); }, 1000);
      } else {
        setResult(data.message || "Submission failed.");
      }
    } catch (error) {
      setResult("Check your connection and try again.");
    }
  };

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="relative py-24 md:py-40 bg-[#FAF9F6] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* --- DYNAMIC SVG BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            d="M0,500 Q250,100 500,500 T1000,500"
            fill="none"
            stroke="#A68A64"
            strokeWidth="0.5"
            strokeDasharray="10 10"
          />
          <motion.path
            d="M0,500 Q250,100 500,500 T1000,500"
            fill="none"
            stroke="#2C1E14"
            strokeWidth="1"
            style={{ pathLength, transformGpu: true }}
          />
          <motion.circle
            r="4"
            fill="#A68A64"
            style={{
              offsetPath: "path('M0,500 Q250,100 500,500 T1000,500')",
              offsetDistance,
              transformGpu: true
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-32">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="w-12 h-[0.5px] bg-[#A68A64]"></div>
            <span className="text-[#A68A64] uppercase tracking-[0.6em] text-[9px] font-medium">Inquiry</span>
            <div className="w-12 h-[0.5px] bg-[#A68A64]"></div>
          </div>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-light text-[#2C1E14] leading-[0.9] tracking-tighter mb-10"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Begin Your <br />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-[length:200%_auto] bg-clip-text text-transparent pb-4 font-extralight"
            >
              Sanctuary
            </motion.span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl font-extralight max-w-2xl mx-auto leading-relaxed italic border-t border-stone-100 pt-8 mt-4">
            "We are currently accepting bespoke projects for the 2026 season."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-10 md:p-20 shadow-[40px_40px_80px_-15px_rgba(0,0,0,0.02)] border border-stone-50">
            <form onSubmit={onSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-3">
                  <label htmlFor="user_name" className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-medium">Full Name</label>
                  <input
                    id="user_name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full pb-4 bg-transparent border-b border-stone-100 text-[#2C1E14] font-light focus:outline-none focus:border-[#A68A64] transition-all placeholder:text-stone-200"
                    placeholder="E.g. Alexander Thorne"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label htmlFor="user_email" className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-medium">Email Address</label>
                  <input
                    id="user_email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full pb-4 bg-transparent border-b border-stone-100 text-[#2C1E14] font-light focus:outline-none focus:border-[#A68A64] transition-all placeholder:text-stone-200"
                    placeholder="alexander@prestige.com"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label htmlFor="project_type" className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-medium">Project Type</label>
                <select
                  id="project_type"
                  name="project_type"
                  className="w-full pb-4 bg-transparent border-b border-stone-100 text-[#2C1E14] font-light focus:outline-none focus:border-[#A68A64] transition-all cursor-pointer appearance-none"
                >
                  <option value="Residential Renovation">Residential Renovation</option>
                  <option value="Commercial Space">Commercial Space</option>
                  <option value="Furniture Commission">Furniture Commission</option>
                  <option value="Full Transformation">Full Transformation</option>
                </select>
              </div>

              <div className="flex flex-col space-y-3">
                <label htmlFor="user_vision" className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-medium">Project Vision</label>
                <textarea
                  id="user_vision"
                  name="message"
                  required
                  rows={4}
                  className="w-full pb-4 bg-transparent border-b border-stone-100 text-[#2C1E14] font-light focus:outline-none focus:border-[#A68A64] transition-all resize-none placeholder:text-stone-200"
                  placeholder="Describe your aesthetic goals..."
                />
              </div>

              <button 
                type="submit" 
                aria-label="Submit private inquiry"
                className="group relative w-full py-7 bg-[#2C1E14] text-white flex items-center justify-center space-x-6 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                <span className="relative z-10 uppercase tracking-[0.5em] text-[10px] font-light">Send Private Inquiry</span>
                <Send className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-3 group-hover:-translate-y-2 transition-all duration-500 opacity-70" />
                <div className="absolute inset-0 bg-[#A68A64] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </button>

              {result && (
                <div role="status" className="text-center text-[9px] uppercase tracking-[0.4em] font-medium text-[#A68A64] animate-pulse">
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-16 lg:pl-10">
            <div className="bg-[#2C1E14] text-white p-12 md:p-16 shadow-xl relative overflow-hidden transform-gpu group">
              <Home className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 opacity-5 transition-transform duration-1000 group-hover:scale-110" aria-hidden="true" />
              
              <h2 
                className="text-4xl md:text-5xl font-light mb-14 relative z-10 tracking-tight leading-tight"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                The Design <br /> Atelier
              </h2>

              <address className="space-y-10 relative z-10 not-italic">
                <div className="flex items-start space-x-8 group/item">
                  <MapPin className="w-5 h-5 text-[#A68A64] mt-1 shrink-0 opacity-70 transition-opacity group-hover/item:opacity-100" />
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#A68A64] font-medium mb-3">Location</p>
                    <p className="text-stone-400 font-extralight text-base leading-relaxed">Rs puram, Coimbatore<br />Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group/item">
                  <Mail className="w-5 h-5 text-[#A68A64] mt-1 shrink-0 opacity-70 transition-opacity group-hover/item:opacity-100" />
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#A68A64] font-medium mb-3">Email</p>
                    <a href="mailto:astrainterior83@gmail.com" className="text-stone-400 font-extralight text-base hover:text-white transition-colors">astrainterior83@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group/item">
                  <Phone className="w-5 h-5 text-[#A68A64] mt-1 shrink-0 opacity-70 transition-opacity group-hover/item:opacity-100" />
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#A68A64] font-medium mb-3">Private Line</p>
                    <a href="tel:+919345445898" className="text-stone-400 font-extralight text-base hover:text-white transition-colors">+91 93454 45898</a>
                  </div>
                </div>
              </address>
            </div>

            <div className="p-12 border border-stone-100 bg-white/20 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-10">
                <Clock className="w-5 h-5 text-[#A68A64] opacity-60" aria-hidden="true" />
                <h3 
                  className="text-[#2C1E14] text-xl font-light tracking-wide italic"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Studio Availability
                </h3>
              </div>
              <div className="space-y-5 text-stone-400 text-xs font-extralight">
                <div className="flex justify-between border-b border-stone-50 pb-3">
                  <span className="uppercase tracking-widest">Monday — Friday</span>
                  <span className="text-[#2C1E14] font-normal tabular-nums">09:00 — 18:00</span>
                </div>
                <div className="flex justify-between border-b border-stone-50 pb-3">
                  <span className="uppercase tracking-widest">Saturday</span>
                  <span className="text-[#2C1E14] font-normal tabular-nums">10:00 — 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}