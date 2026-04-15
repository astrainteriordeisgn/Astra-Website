import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sofa, Lightbulb, Home, Hammer, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Interior Design',
    description: 'Full planning and execution for homes and offices in Coimbatore, including layouts, color schemes, and furniture placement.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    features: ['Spatial Planning', 'Color Schemes', 'Office Design'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting Solutions',
    description: 'Smart electrical setups and custom lighting designs that highlight your interiors and architectural details.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    features: ['Smart Setups', 'Ambience Control', 'Wiring'],
  },
  {
    icon: Sofa,
    title: 'Revamp',
    description: 'Upgrade old sofas with premium fabrics and modern finishes. We give your existing furniture a luxury transformation.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    features: ['Premium Fabrics', 'Modern Finishes', 'Upholstery'],
  },
  {
    icon: Hammer,
    title: 'Customized Furniture',
    description: 'Tailor-made furniture designed to fit your space perfectly. Handcrafted pieces that reflect your personal style.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    features: ['Bespoke Carpentry', 'Handmade Tables', 'Fitted Units'],
  },
];

export default function Services() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  // Integrated Logo Brand Colors
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-[#FAF9F6] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* SVG BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grain" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 100 50 200 100 T 400 100" fill="none" stroke={brandTeal} strokeWidth="0.5" />
              <path d="M0 200 Q 150 120 300 200 T 400 250" fill="none" stroke={brandTeal} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-16 h-[1px]" style={{ backgroundColor: brandNavy }}></div>
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold" style={{ color: brandTeal }}>Professional Solutions</span>
            </div>
            <h1 
              className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}
            >
              Interior Design <br />
              <span className="italic font-extralight block mt-2" style={{ color: brandTeal }}>
                Services in Tamil Nadu
              </span>
            </h1>
          </div>
          <div className="max-w-sm border-l border-stone-200 pl-10 py-2">
            <p className="text-xl text-stone-400 font-extralight italic leading-relaxed">
              Covering every aspect of spatial engineering and aesthetic curation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate('/services')} 
              className="group flex flex-col bg-white border border-stone-100 hover:shadow-[0_40px_100px_-20px_rgba(26,54,93,0.1)] transition-all duration-700 cursor-pointer rounded-sm overflow-hidden"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A0F] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                <span className="absolute bottom-6 left-8 text-white/40 font-light text-2xl tracking-widest">0{index + 1}</span>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 
                  className="text-2xl font-light mb-4 group-hover:translate-x-2 transition-transform tracking-tight"
                  style={{ fontFamily: '"Poppins", sans-serif', color: brandNavy }}
                >
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-10 font-extralight">
                  {service.description}
                </p>

                <div className="mt-auto pt-8 border-t border-stone-50 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black" style={{ color: brandTeal }}>View Details</span>
                    {/* Circle Icon Button */}
                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[#00A3C4] transition-all duration-500 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- UPDATED BUTTON STYLE SECTION --- */}
        <div className="mt-32 relative overflow-hidden p-16 md:p-28 text-center flex flex-col items-center rounded-[2rem] group" style={{ backgroundColor: brandNavy }}>
          <div className="absolute inset-0 opacity-10 transition-transform duration-1000 group-hover:scale-110">
             <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grain)" /></svg>
          </div>
          
          <h3 
            className="relative z-10 text-4xl md:text-6xl font-light text-white mb-12 tracking-tight leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Elevate your <span className="italic font-extralight text-[#00A3C4]">Home & Office</span> <br className="hidden md:block" /> with Coimbatore's Expert Team.
          </h3>

          <div className="relative z-10 flex flex-col sm:flex-row gap-6">
            {/* Main Luxury Button */}
            <button 
              onClick={handleWhatsAppRedirect}
              className="group relative px-14 py-6 bg-white text-[#1A365D] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,163,196,0.4)] active:scale-95 flex items-center justify-center"
            >
              <span className="relative z-10 uppercase tracking-[0.4em] text-[10px] font-black flex items-center">
                <MessageSquare className="w-4 h-4 mr-3" />
                Start Consultation
              </span>
              {/* Animated Liquid Background on Hover */}
              <div 
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" 
                style={{ backgroundColor: brandTeal }}
              ></div>
              {/* Swap text color on hover via CSS class sibling or inline logic */}
              <style dangerouslySetInnerHTML={{ __html: `
                .group:hover span { color: white !important; }
              `}} />
            </button>

            {/* Secondary Ghost Button */}
            <button 
              onClick={() => navigate('/port')}
              className="px-14 py-6 border border-white/20 text-white rounded-full uppercase tracking-[0.4em] text-[10px] font-black hover:bg-white/5 hover:border-white transition-all duration-500 active:scale-95"
            >
              The Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}