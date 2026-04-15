import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Filter, ChevronRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const categories = ["All Collections", "Residential", "Commercial", "Bespoke Furniture", "Restoration"];

const works = [
  {
    id: "01",
    title: "The Obsidian Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    id: "02",
    title: "Walnut & Brass Lounge",
    category: "Bespoke Furniture",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "03",
    title: "Aura Dining Hall",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200 ",
    size: "medium"
  },
  {
    id: "04",
    title: "Minimalist Loft 402",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  },
  {
    id: "05",
    title: "Heritage Villa Revamp",
    category: "Restoration",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    id: "06",
    title: "Velvet Sky Lounge",
    category: "Bespoke Furniture",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    size: "small"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  // Branding constants - FIXED: Now used in the SVG and Styles below
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const filteredWorks = activeCategory === "All Collections" 
    ? works 
    : works.filter(w => w.category === activeCategory);

  return (
    <div 
      className="bg-[#FAF9F6] min-h-screen"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      
      <main className="pt-40 pb-24 relative">
        {/* FIXED: Using brandNavy and brandTeal in the SVG Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="portfolio-grid" width="150" height="150" patternUnits="userSpaceOnUse">
                <path d="M 150 0 L 0 0 0 150" fill="none" stroke={brandNavy} strokeWidth="0.5"/>
                <circle cx="75" cy="75" r="1.5" fill={brandTeal} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* PAGE HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-12 h-[0.5px]" style={{ backgroundColor: brandTeal }}></div>
                <span className="uppercase tracking-[0.6em] text-[10px] font-bold" style={{ color: brandTeal }}>Project Exhibition</span>
              </div>
              <h1 
                className="text-7xl md:text-9xl font-light leading-[0.9] tracking-tighter"
                style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}
              >
                Selected <br />
                <span className="italic font-extralight pb-4 block" style={{ color: brandTeal }}>Portfolios.</span>
              </h1>
            </div>
            <div className="max-w-xs border-l border-stone-200 pl-10 py-2">
              <p className="text-stone-400 font-extralight italic text-lg leading-relaxed">
                "A visual archive of 40+ sanctuaries, delivered with architectural precision and a soulful aesthetic."
              </p>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="flex flex-wrap items-center gap-x-16 gap-y-8 mb-24 border-b border-stone-100 pb-10">
            <div className="flex items-center space-x-3" style={{ color: brandTeal }}>
              <Filter className="w-3.5 h-3.5 opacity-70" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-black">Filter By</span>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative pb-1 ${
                    activeCategory === cat ? 'text-[#1A365D]' : 'text-stone-300 hover:text-[#1A365D]'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] animate-in fade-in slide-in-from-left-2 duration-500" style={{ backgroundColor: brandTeal }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* MASONRY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-32 items-start">
            {filteredWorks.map((work) => (
              <div 
                key={work.id} 
                onClick={() => navigate('/services')}
                className={`group relative flex flex-col cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  work.size === 'large' ? 'lg:col-span-8' : 
                  work.size === 'medium' ? 'lg:col-span-6' : 'lg:col-span-4'
                }`}
              >
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto h-[450px] md:h-[650px] shadow-[40px_40px_80px_-15px_rgba(26,54,93,0.05)] rounded-sm">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="absolute top-10 left-10 text-white/40 font-light text-xl tracking-widest" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    {work.id}
                  </span>
                </div>

                <div className="mt-10 flex justify-between items-end border-l border-stone-100 pl-8 transition-transform duration-500 group-hover:translate-x-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black block mb-3" style={{ color: brandTeal }}>{work.category}</span>
                    <h3 className="text-3xl font-light group-hover:italic transition-all duration-500 tracking-tight" style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}>
                      {work.title}
                    </h3>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-[#1A365D] transition-all duration-500 shadow-sm"
                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = brandNavy}
                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
                    <ArrowUpRight className="w-5 h-5 text-stone-200 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* COMMISSION CTA */}
          <div className="mt-64 text-center border-t border-stone-100 pt-24">
             <p className="text-stone-300 font-light italic text-3xl mb-16 tracking-tight">Looking for something more personal?</p>
             <button 
                onClick={handleWhatsAppRedirect}
                className="group relative px-20 py-8 text-white overflow-hidden transition-all duration-700 active:scale-95 rounded-full"
                style={{ backgroundColor: brandNavy }}
             >
                <span className="relative z-10 flex items-center uppercase tracking-[0.5em] text-[10px] font-black">
                  Commission a Private Project <ChevronRight className="ml-5 w-4 h-4 group-hover:translate-x-3 transition-transform" style={{ color: brandTeal }} />
                </span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" style={{ backgroundColor: brandTeal }} />
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}