import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import { MoveRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const journalPosts = [
  {
    title: "The Alchemy of Light & Shadow",
    description: "How strategic architectural lighting can redefine the boundaries of a modern living sanctuary.",
    author: "Elena Rossi",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    tags: ["Atmosphere", "Lighting"],
  },
  {
    title: "Milling the Future: Sustainable Oak",
    description: "A deep dive into our ethical sourcing of heirloom-quality timber from managed European forests.",
    author: "Marcus Thorne",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=800",
    tags: ["Materials", "Craft"],
  },
  {
    title: "Minimalism: The Art of Enough",
    description: "Curating a home that breathes. Why fewer objects lead to a more soulful and focused environment.",
    author: "Sophia Chen",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    tags: ["Philosophy", "Minimalism"],
  },
];

const trendingStyles = [
  {
    title: "The 2026 Color Palette",
    description: "Earthy ochres and deep walnuts are making a definitive return to luxury interiors.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Bespoke Carpentry Trends",
    description: "Integrating smart technology into hand-finished oak cabinetry.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Return of the Atrium",
    description: "Bringing nature indoors through glass-vaulted ceilings and indoor greenery.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Brand Colors
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navigation />

      {/* Main Journal Section */}
      <section 
        className="relative py-40 bg-[#FAF9F6] overflow-hidden"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        
        {/* SVG BACKGROUND: ARCHITECTURAL BLUEPRINT GRID using Brand Navy & Teal */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke={brandNavy} strokeWidth="0.3"/>
                <circle cx="40" cy="40" r="1" fill={brandTeal} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-16 h-[0.5px]" style={{ backgroundColor: brandTeal }}></div>
                <span className="uppercase tracking-[0.6em] text-[10px] font-bold" style={{ color: brandTeal }}>The Astra Journal</span>
              </div>
              <h2 
                className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tighter"
                style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}
              >
                Curated <br />
                <span className={`italic bg-gradient-to-r from-[${brandNavy}] via-[${brandTeal}] to-[${brandNavy}] bg-clip-text text-transparent pb-4 font-extralight`}>Insights.</span>
              </h2>
            </div>
            <div className="max-w-sm border-l border-stone-200 pl-10 py-2">
              <p className="text-xl text-stone-400 italic font-extralight leading-relaxed">
                "Stay updated with our explorations into the craft of living well."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {journalPosts.map((post, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white border border-stone-100 shadow-sm hover:shadow-[40px_40px_80px_-15px_rgba(26,54,93,0.06)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <div className="h-[500px] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  />
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-5 py-2 shadow-xl border-l-2" style={{ borderColor: brandTeal }}>
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black" style={{ color: brandTeal }}>{post.tags[0]}</span>
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-10 font-bold">
                    <span className="tracking-widest">By {post.author}</span>
                    <div className="w-10 h-[0.5px] bg-stone-200"></div>
                    <span style={{ color: brandTeal }}>{post.date}</span>
                  </div>
                  <h3 
                    className="text-3xl font-light mb-6 leading-tight transition-all duration-500 tracking-tight"
                    style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}
                    onMouseEnter={(e) => e.target.style.color = brandTeal}
                    onMouseLeave={(e) => e.target.style.color = brandNavy}
                  >
                    {post.title}
                  </h3>
                  <p className="text-stone-500 font-extralight leading-relaxed mb-10 flex-1 text-base tracking-wide">{post.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.5em] font-black group-hover:transition-all pt-6 border-t border-stone-50"
                    style={{ color: brandNavy }}
                  >
                    Read Article
                    <MoveRight className="ml-4 w-4 h-4 group-hover:translate-x-3 transition-transform" style={{ color: brandTeal }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Mouse Aura in Brand Teal */}
        <div
          className="fixed w-96 h-96 rounded-full blur-[120px] pointer-events-none z-0"
          style={{ 
            left: 0, 
            top: 0, 
            backgroundColor: `${brandTeal}0D`, // 5% opacity teal
            transform: `translate3d(${cursorPos.x - 192}px, ${cursorPos.y - 192}px, 0)` 
          }}
        />
      </section>

      {/* Trending Styles Section (Brand Navy Background) */}
      <section className="relative py-40 bg-[#050A0F] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#arch-grid)" /></svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
            <h2 
              className="text-6xl md:text-8xl font-light leading-[0.9] tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Trending <br />
              <span className="italic font-extralight" style={{ color: brandTeal }}>Aesthetics</span>
            </h2>
            <p className="text-stone-500 max-w-xs font-extralight tracking-[0.4em] text-[10px] uppercase border-r border-stone-800 pr-12 text-right leading-loose">
              Global influences shaping our <br /> upcoming 2026 collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {trendingStyles.map((news, idx) => (
              <div
                key={idx}
                className="group relative bg-white/[0.02] border border-white/5 p-10 transition-all duration-700 hover:bg-white/[0.04]"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = brandTeal}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
              >
                <div className="aspect-[16/10] overflow-hidden mb-10 shadow-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
                <h3 
                  className="text-2xl font-light mb-6 tracking-tight"
                  style={{ fontFamily: '"Poppins", sans-serif', color: brandTeal }}
                >
                  {news.title}
                </h3>
                <p className="text-stone-400 font-extralight leading-relaxed text-sm mb-10 tracking-wide">{news.description}</p>
                <div className="h-[0.5px] w-0 transition-all duration-1000 ease-in-out" style={{ backgroundColor: brandTeal }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}