import { useEffect, useState } from "react";
import { ExternalLink, MoveRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const articles = [
  {
    title: "The Alchemy of Light & Shadow",
    description: "How strategic lighting can redefine the architectural boundaries of your living space.",
    author: "Elena Rossi",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    tags: ["Atmosphere", "Lighting"],
  },
  {
    title: "Milling the Future: Sustainable Oak",
    description: "A deep dive into our ethical sourcing of heirloom-quality timber from European forests.",
    author: "Marcus Thorne",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=800",
    tags: ["Materials", "Craft"],
  },
  {
    title: "Minimalism: The Art of Enough",
    description: "Curating a home that breathes. Why fewer objects lead to a more soulful environment.",
    author: "Sophia Chen",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    tags: ["Philosophy", "Minimalism"],
  },
];

export default function DesignJournal() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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
    <section 
      className="relative py-32 bg-[#FAF9F6] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      
      {/* SVG BACKGROUND: WEAVE TEXTURE using Brand Navy */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" fill="none" stroke="#1A365D" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#weave)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-8">
              {/* Brand Teal Accent Line */}
              <div className="w-12 h-[1px] bg-[#00A3C4]"></div>
              <span className="text-[#00A3C4] uppercase tracking-[0.6em] text-[10px] font-black">The Astra Journal</span>
            </div>
            <h2 
              className="text-6xl md:text-8xl font-bold text-[#1A365D] leading-[0.9] tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Curated <br />
              <span className="italic font-light text-[#00A3C4]">Insights</span>
            </h2>
          </div>
          <button className="group flex items-center space-x-3 text-stone-400 hover:text-[#1A365D] transition-all uppercase tracking-[0.4em] text-[10px] font-black border-b border-stone-200 pb-4">
            <span>View All Articles</span>
            <MoveRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-[#00A3C4]" />
          </button>
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white border border-stone-100 shadow-sm hover:shadow-[40px_40px_80px_rgba(26,54,93,0.08)] transition-all duration-700"
            >
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                />
                <div className="absolute top-8 left-8 bg-white px-5 py-2 shadow-xl border-l-2 border-[#00A3C4]">
                   <span className="text-[9px] uppercase tracking-[0.3em] text-[#00A3C4] font-black">{article.tags[0]}</span>
                </div>
                <div className="absolute inset-0 bg-[#1A365D]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="p-12 flex flex-col flex-1">
                <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-8 font-bold">
                  <span>By {article.author}</span>
                  <div className="w-6 h-[1px] bg-stone-200"></div>
                  <span className="text-[#00A3C4]">{article.date}</span>
                </div>
                
                <h3 
                  className="text-3xl font-bold text-[#1A365D] mb-8 leading-[1.2] group-hover:text-[#00A3C4] transition-colors tracking-tight"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {article.title}
                </h3>
                
                <p className="text-stone-500 font-light leading-relaxed mb-10 flex-1 text-base">
                  {article.description}
                </p>

                <a
                  href="/blog"
                  className="inline-flex items-center text-[10px] uppercase tracking-[0.5em] font-black text-[#1A365D] group-hover:text-[#00A3C4] transition-all pt-4 border-t border-stone-50"
                >
                  Read Journal
                  <ExternalLink className="ml-4 w-3.5 h-3.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND WATERMARK in Brand Navy */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h2 
          className="text-[22vw] font-bold leading-none text-[#1A365D] tracking-tighter"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          EDITORIAL
        </h2>
      </div>

      {/* CUSTOM CURSOR FOLLOWER in Brand Teal */}
      <div
        className="fixed w-64 h-64 bg-[#00A3C4]/10 rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${cursorPos.x - 128}px, ${cursorPos.y - 128}px, 0)`,
        }}
      />
    </section>
  );
}