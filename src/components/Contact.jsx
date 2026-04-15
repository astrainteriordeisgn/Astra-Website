import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock, Home } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // Integrated Brand Colors from Logo
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

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
        setTimeout(() => navigate('/thank-you'), 1000); 
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Form submission failed. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#FAF9F6] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* SVG BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="site-plan" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke={brandNavy} strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke={brandTeal} strokeWidth="0.5" strokeDasharray="5 5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#site-plan)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section - DECREASED FONT & REMOVED CLIP */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[0.5px] bg-[#00A3C4]"></div>
            <span className="text-[#00A3C4] uppercase tracking-[0.5em] text-[9px] font-medium">Inquiry</span>
            <div className="w-12 h-[0.5px] bg-[#00A3C4]"></div>
          </div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-[#1A365D] leading-tight tracking-tighter mb-8"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Begin Your <br />
            <span className="italic text-[#00A3C4] font-extralight block mt-2">
              Sanctuary
            </span>
          </h1>
          <p className="text-stone-400 text-base md:text-lg font-extralight max-w-2xl mx-auto leading-relaxed italic">
            "We are currently accepting bespoke projects for the 2026 season."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 shadow-[40px_40px_80px_-15px_rgba(26,54,93,0.05)] border border-stone-50">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="full-name" className="text-[9px] uppercase tracking-widest text-stone-400 font-medium">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full pb-3 bg-transparent border-b border-stone-100 text-[#1A365D] font-light focus:outline-none focus:border-[#00A3C4] transition-colors placeholder:text-stone-200"
                    placeholder="E.g. Alexander Thorne"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email-address" className="text-[9px] uppercase tracking-widest text-stone-400 font-medium">Email Address</label>
                  <input
                    id="email-address"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full pb-3 bg-transparent border-b border-stone-100 text-[#1A365D] font-light focus:outline-none focus:border-[#00A3C4] transition-colors placeholder:text-stone-200"
                    placeholder="alexander@prestige.com"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="project-type" className="text-[9px] uppercase tracking-widest text-stone-400 font-medium">Project Type</label>
                <select
                  id="project-type"
                  name="projectType"
                  className="w-full pb-3 bg-transparent border-b border-stone-100 text-[#1A365D] font-light focus:outline-none focus:border-[#00A3C4] transition-colors cursor-pointer appearance-none"
                >
                  <option value="Residential Renovation">Residential Renovation</option>
                  <option value="Commercial/Office Space">Commercial/Office Space</option>
                  <option value="Custom Furniture Commission">Custom Furniture Commission</option>
                  <option value="Full Interior Transformation">Full Interior Transformation</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="vision" className="text-[9px] uppercase tracking-widest text-stone-400 font-medium">Project Vision</label>
                <textarea
                  id="vision"
                  name="message"
                  required
                  rows={4}
                  className="w-full pb-3 bg-transparent border-b border-stone-100 text-[#1A365D] font-light focus:outline-none focus:border-[#00A3C4] transition-colors resize-none placeholder:text-stone-200"
                  placeholder="Describe your aesthetic goals..."
                />
              </div>

              <button 
                type="submit" 
                aria-label="Send Private Inquiry"
                className="group relative w-full py-5 bg-[#1A365D] text-white flex items-center justify-center space-x-4 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                <span className="relative z-10 uppercase tracking-[0.5em] text-[10px] font-light">Send Private Inquiry</span>
                <Send className="relative z-10 w-3 h-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform opacity-70" />
                <div className="absolute inset-0 bg-[#00A3C4] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </button>
              
              {result && (
                <div role="status" className={`text-center text-[9px] uppercase tracking-widest font-medium mt-4 ${result.includes("Successfully") ? "text-green-600/70" : "text-[#00A3C4]"}`}>
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12 lg:pl-10">
            <div className="bg-[#1A365D] text-white p-10 md:p-12 shadow-xl relative overflow-hidden transform-gpu group">
              <Home className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 opacity-5 transition-transform duration-1000 group-hover:scale-110" aria-hidden="true" />
              
              <h2 
                className="text-2xl md:text-3xl font-light mb-10 relative z-10 tracking-tight"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                The Design Atelier
              </h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-6">
                  <MapPin className="w-5 h-5 text-[#00A3C4] mt-1 shrink-0 opacity-80" />
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#00A3C4] font-medium mb-2">Location</p>
                    <address className="text-stone-300 font-extralight not-italic text-sm leading-relaxed">Rs puram, Coimbatore<br />Tamil Nadu, India</address>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Mail className="w-5 h-5 text-[#00A3C4] mt-1 shrink-0 opacity-80" />
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#00A3C4] font-medium mb-2">Email</p>
                    <a href="mailto:astrainterior83@gmail.com" className="text-stone-300 font-extralight hover:text-white transition-colors text-sm">astrainterior83@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Phone className="w-5 h-5 text-[#00A3C4] mt-1 shrink-0 opacity-80" />
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#00A3C4] font-medium mb-2">Private Line</p>
                    <a href="tel:+919345445898" className="text-stone-300 font-extralight hover:text-white transition-colors text-sm">+91 93454 45898</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12 border border-stone-100 bg-white/30 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-4 h-4 text-[#00A3C4] opacity-70" aria-hidden="true" />
                <h3 
                  className="text-[#1A365D] text-lg font-light tracking-wide italic"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Studio Availability
                </h3>
              </div>
              <div className="space-y-4 text-stone-400 text-xs font-extralight">
                <div className="flex justify-between border-b border-stone-50 pb-2">
                  <span className="uppercase tracking-widest">Monday — Friday</span>
                  <span className="text-[#1A365D] font-normal">09:00 — 18:00</span>
                </div>
                <div className="flex justify-between border-b border-stone-50 pb-2">
                  <span className="uppercase tracking-widest">Saturday</span>
                  <span className="text-[#1A365D] font-normal">10:00 — 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}