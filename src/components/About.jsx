import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Compass, PencilRuler, Trees, Target, Heart, Award } from "lucide-react";
import Lenis from "@studio-freight/lenis";

export default function About() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section 
      id="about" 
      className="relative py-32 bg-[#FAF9F6] overflow-hidden selection:bg-[#A68A64] selection:text-white"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      
      {/* SVG ARCHITECTURAL BACKGROUND - Subtly enhanced */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#4A3728" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#4A3728" strokeWidth="1" strokeDasharray="15 15" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* UPPER SECTION: The Narrative & Our Story */}
        <div className="flex flex-col lg:flex-row gap-20 lg:items-center mb-52">
          <div className="lg:w-1/2 lg:pr-10">
            <div className="flex items-center space-x-4 mb-8">
               <div className="h-[1px] w-12 bg-[#A68A64]"></div>
               <h4 className="text-[#A68A64] font-black uppercase tracking-[0.6em] text-[10px]">
                 Since MMXXIV
               </h4>
            </div>

            <h1 
              className="text-6xl md:text-8xl font-bold text-[#2C1E14] leading-[0.95] mb-12 tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              About Astra <br />
              <span className="italic text-[#A68A64] font-light">Interior Design</span>
            </h1>

            <div className="space-y-8">
              <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Astra Interior Design is a leading interior design studio based in Coimbatore, Tamil Nadu. We specialize in creating luxury homes, stylish offices, and custom furniture that reflect your lifestyle. 
              </p>
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#A68A64]"></div>
                <p className="text-stone-500 text-base md:text-lg italic font-light py-2 leading-relaxed">
                  "Founded with a vision to redefine modern living, we have grown into a full-service interior design company known for creativity, precision, and attention to detail."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
             <div className="relative group overflow-hidden shadow-[30px_30px_0px_rgba(166,138,100,0.1)] transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Astra Interior Studio Coimbatore" 
                  className="w-full aspect-[4/5] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>
             </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Staggered Stats & Core Services */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 items-start mb-52">
          
          {/* Why Choose Us */}
          <div className="lg:pt-20">
            <h3 
              className="text-4xl font-bold text-[#2C1E14] mb-10 tracking-tight"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Why Choose Us
            </h3>
            <ul className="space-y-10">
               {[
                 { icon: Award, text: "Experienced team with 50+ successful projects" },
                 { icon: Heart, text: "Personalized design consultations" },
                 { icon: Target, text: "3D visualizations before execution" }
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start space-x-6 group">
                   <div className="mt-1 p-2 bg-white shadow-md rounded-full group-hover:bg-[#A68A64] transition-colors duration-500">
                     <item.icon className="w-5 h-5 text-[#A68A64] group-hover:text-white transition-colors" />
                   </div>
                   <span className="text-[11px] uppercase tracking-[0.25em] text-stone-600 font-bold leading-relaxed pt-2">
                     {item.text}
                   </span>
                 </li>
               ))}
            </ul>
          </div>

          {/* Our Story / Portfolio Link */}
          <div 
            className="lg:mt-[-8rem] border-x border-stone-200 px-10 lg:px-16 pb-12 cursor-pointer group"
            onClick={() => navigate('/port')}
          >
            <h3 
              className="text-6xl font-bold text-[#2C1E14] mb-4 tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              50+ <br />
              <span className="text-2xl italic text-[#A68A64] font-light">Projects</span>
            </h3>
            <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed mb-10 transition-colors group-hover:text-[#A68A64]">
              Trusted by families and businesses across South India and Tamil Nadu.
            </p>
            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Luxury Home Coimbatore" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="lg:pt-40">
             <div className="flex flex-col space-y-16">
                {[
                  { icon: Compass, title: "Our Philosophy", desc: "Design is about how a space feels, inspiring comfort and beauty." },
                  { icon: PencilRuler, title: "Bespoke Furniture", desc: "Crafting tailor-made pieces from sofas to dining tables." },
                  { icon: Trees, title: "Luxury Homes", desc: "Elegant designs balancing modern style with timeless comfort." }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-stone-200 pb-8 last:border-0 transition-all hover:translate-x-2">
                    <item.icon className="w-8 h-8 text-[#A68A64] mb-6 transition-transform group-hover:rotate-12" />
                    <h5 
                      className="text-[#2C1E14] text-2xl font-bold mb-3 tracking-tight"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* LOWER SECTION: Our Promise CTA */}
        <div className="relative min-h-[70vh] flex items-center justify-center rounded-[2rem] overflow-hidden group mb-20">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
            alt="Interior Design Promise" 
          />
          <div className="absolute inset-0 bg-[#2C1E14]/80 group-hover:bg-[#2C1E14]/70 transition-all"></div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h3 
              className="text-white text-4xl md:text-7xl font-bold mb-8 tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Our <span className="text-[#A68A64] italic font-light leading-none">Promise</span>
            </h3>
            <p className="text-stone-300 text-xl md:text-2xl font-light mb-14 max-w-3xl mx-auto italic leading-relaxed">
              "We promise to deliver designs that are practical, stylish, and long-lasting, working closely with you to exceed every expectation."
            </p>
            <button 
              onClick={handleWhatsAppRedirect}
              className="group relative px-16 py-6 bg-transparent border border-[#A68A64] text-[#A68A64] uppercase tracking-[0.5em] text-[11px] font-black overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">Start Your Design Journey</span>
              <div className="absolute inset-0 bg-[#ffecd1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}