import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sofa, Lightbulb, Home, Hammer } from 'lucide-react';

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

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-[#FAF9F6] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grain" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 100 50 200 100 T 400 100" fill="none" stroke="#4a3728" strokeWidth="0.5" />
              <path d="M0 200 Q 150 120 300 200 T 400 250" fill="none" stroke="#4a3728" strokeWidth="0.5" />
              <path d="M0 300 Q 50 350 200 300 T 400 320" fill="none" stroke="#4a3728" strokeWidth="0.5" />
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
              <div className="w-16 h-[0.5px] bg-[#4a3728]"></div>
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#7d5c41] font-bold">The Astra Standard</span>
            </div>
            <h1 
              className="text-6xl md:text-8xl font-light text-[#2c1e14] leading-[0.95] tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Interior Design <br />
              <span className="bg-gradient-to-r from-[#4a3728] via-[#a68a64] to-[#4a3728] bg-clip-text text-transparent italic pb-4 font-extralight block">
                Services in TamilNadu
              </span>
            </h1>
          </div>
          <div className="max-w-sm border-l border-stone-200 pl-10 py-2">
            <p className="text-xl text-stone-400 font-extralight italic leading-relaxed">
              Our services cover every aspect of interior design, ensuring your space is both functional and beautiful.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate('/services')} 
              className="group flex flex-col bg-white border border-stone-100 hover:shadow-[40px_40px_80px_-15px_rgba(74,55,40,0.06)] transition-all duration-700 cursor-pointer rounded-sm"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e14]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                <span 
                  className="absolute top-8 left-8 text-white/40 font-light text-xl tracking-widest"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  0{index + 1}
                </span>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 
                  className="text-2xl font-light text-[#2c1e14] mb-4 group-hover:text-[#a68a64] transition-colors tracking-tight"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-10 font-extralight tracking-wide">
                  {service.description}
                </p>

                <div className="mt-auto pt-8 border-t border-stone-50 flex items-center justify-between">
                   <div className="flex flex-col">
                     <span className="text-[9px] uppercase tracking-[0.3em] text-[#a68a64] font-black">Inquiry</span>
                     <span className="text-xs font-light text-stone-400 uppercase tracking-widest mt-1">Customized Solutions</span>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-[#4a3728] group-hover:border-[#4a3728] transition-all duration-500 shadow-sm">
                     <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-white transition-colors" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-32 relative overflow-hidden bg-[#2c1e14] p-12 md:p-24 text-center flex flex-col items-center rounded-3xl group">
          <div className="absolute inset-0 opacity-5 transition-transform duration-1000 group-hover:scale-110">
              <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grain)" /></svg>
          </div>
          <h3 
            className="relative z-10 text-4xl md:text-6xl font-light text-[#f2e9e4] mb-12 tracking-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Elevate your <span className="italic text-[#a68a64] font-extralight">Home & Office</span> today
          </h3>
          <button 
            onClick={handleWhatsAppRedirect}
            className="group relative z-10 px-16 py-6 bg-transparent border border-[#a68a64] text-[#a68a64] uppercase tracking-[0.5em] text-[10px] font-black overflow-hidden transition-all duration-500 hover:text-white"
          >
            <span className="relative z-10">Inquire via WhatsApp</span>
            <div className="absolute inset-0 bg-[#ece3d6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          </button>
        </div>
      </div>
    </section>
  );
}