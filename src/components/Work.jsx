import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Minus, MoveRight } from 'lucide-react';
import Lenis from "@studio-freight/lenis";

// Import your project images
import Img1 from '../assests/penthouse.png'; 
import Img2 from '../assests/amber wood.webp'; 
import Img3 from '../assests/Electrical & Lighting.webp'; 
import Img4 from '../assests/Sofa Redesign.webp'; 
import Img5 from '../assests/Commercial.webp'; 
import Img6 from '../assests/Residential.webp'; 

const projects = [
  { id: '01', title: 'The Luxury Villa', category: 'Residential', image: Img1 },
  { id: '02', title: 'Bespoke Dining Set', category: 'Custom Furniture', image: Img2 },
  { id: '03', title: 'Corporate Headquarters', category: 'Commercial Office', image: Img5 },
  { id: '04', title: 'Heirloom Sofa Revamp', category: 'Furniture Design', image: Img4 },
  { id: '05', title: 'Minimalist Penthouse', category: 'Residential', image: Img6 },
  { id: '06', title: 'Kitchen Styling', category: 'Hospitality', image: Img3 },
];

export default function Work() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  // Brand Colors
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section 
      id="work" 
      className="relative py-32 bg-[#FCFBFA] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      
      {/* SVG BLUEPRINT BACKGROUND - Using Brand Navy and Teal */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="blueprint" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke={brandNavy} strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="1.5" fill={brandTeal} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div className="max-w-4xl">
            <h4 className="font-medium uppercase tracking-[0.6em] text-[10px] mb-8 flex items-center" style={{ color: brandTeal }}>
              <Minus className="mr-3 w-4" /> Selected Portfolio
            </h4>
            <h1 
              className="text-6xl md:text-6xl lg:text-6xl font-light leading-[0.9] tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}
            >
              Interior Design 
              <span className={`italic bg-gradient-to-r from-[${brandNavy}] via-[${brandTeal}] to-[${brandNavy}] bg-clip-text text-transparent font-extralight pb-4 block`}>Projects in TamilNadu.</span>
            </h1>
            <p className="mt-10 text-stone-400 text-lg md:text-xl font-extralight max-w-2xl leading-relaxed italic border-l border-stone-100 pl-8">
              "At Astra Interior Design, every project is a reflection of creativity, precision, and client vision."
            </p>
          </div>
          <div className="text-right border-l border-stone-100 pl-12 hidden md:block pb-4">
             <p className="text-stone-300 uppercase tracking-[0.4em] text-[9px] mb-3 font-bold">Project Success</p>
             <p className="text-6xl font-light tracking-tighter" style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}>50+</p>
             <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: brandTeal }}>Spaces</p>
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-40 gap-x-16">
          {projects.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate('/services')} 
              className={`group flex flex-col cursor-pointer ${index % 2 !== 0 ? 'lg:translate-y-32' : ''} transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 shadow-[20px_20px_60px_rgba(26,54,93,0.05)] rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                />
                {/* Brand Teal Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A365D]/30 backdrop-blur-[3px]">
                   <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6" style={{ color: brandNavy }} />
                   </div>
                </div>
                <div className="absolute top-8 left-8 text-white font-light text-xl mix-blend-difference opacity-40 tracking-widest" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  {item.id}
                </div>
              </div>

              <div className="mt-10 border-l border-stone-100 pl-8 transition-transform duration-500 group-hover:translate-x-2">
                <span className="text-[9px] uppercase tracking-[0.5em] font-black block mb-3" style={{ color: brandTeal }}>{item.category}</span>
                <h3 className="text-3xl font-light group-hover:italic transition-all duration-500 tracking-tight" style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial & CTA */}
        <div className="mt-80 flex flex-col items-center text-center max-w-4xl mx-auto border-t border-stone-100 pt-24">
          <p className="text-2xl md:text-3xl font-extralight text-stone-400 italic mb-6 leading-relaxed">
            "Astra Interior transformed our villa into a luxury sanctuary. Every detail was perfect."
          </p>
          <span className="text-[10px] uppercase tracking-[0.5em] font-black mb-20 tracking-[0.8em]" style={{ color: brandTeal }}>— Homeowner, Coimbatore</span>
          
          <button 
            onClick={handleWhatsAppRedirect}
            className="group relative px-12 py-7 md:px-20 md:py-8 border border-stone-200 overflow-hidden transition-all duration-700 active:scale-95 rounded-full"
            style={{ color: brandNavy }}
          >
            {/* Liquid Fill in Brand Navy */}
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" style={{ backgroundColor: brandNavy }} />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center uppercase tracking-[0.4em] text-[10px] font-black group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-500">
                Start Your Project <MoveRight className="ml-4 w-4 h-4" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center uppercase tracking-[0.4em] text-[10px] font-black text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 whitespace-nowrap">
                Chat with our Design Lead
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[28vw] font-bold leading-none -mb-16 tracking-tighter" style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}>
          ASTRA
        </h2>
      </div>
    </section>
  );
}