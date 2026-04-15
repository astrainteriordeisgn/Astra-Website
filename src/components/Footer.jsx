import { Link } from 'react-router-dom';
import { Facebook, Instagram, ArrowRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
// UPDATED: Using original astralogo.webp as requested
import Logo from '../assests/astralogo.webp'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919345445898";

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer 
      className="relative bg-[#050A0F] overflow-hidden border-t border-white/5" 
      aria-labelledby="footer-heading"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* SVG BACKGROUND: ARCHITECTURAL TECHNICAL GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00A3C4" strokeWidth="0.5"/>
              <circle cx="40" cy="40" r="1" fill="#00A3C4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 pt-24 pb-12">
        
        {/* TOP SECTION: PROFESSIONAL BENTO UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Block 1: Identity - Deep Navy Base */}
          <div className="lg:col-span-4 bg-[#050A0F] p-10 lg:p-14 space-y-10">
            <Link to="/" aria-label="Astra Interior Home" className="inline-block group">
              <img 
                src={Logo} 
                alt="Astra Interior" 
                className="h-16 w-auto object-contain transition-transform duration-700 group-hover:scale-105" 
                loading="lazy"
              />
            </Link>
            <p className="text-stone-400 leading-relaxed font-extralight italic text-lg max-w-sm">
              "Crafting timeless sanctuaries where architectural precision meets the soul of modern living."
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/astra_.interior/", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61562835308067", label: "Facebook" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-[#00A3C4] hover:border-[#00A3C4] transition-all duration-500 rounded-full"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="w-4 h-4 stroke-[1px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Block 2: Navigation - Minimalist Studio Links */}
          <div className="lg:col-span-4 bg-[#050A0F] p-10 lg:p-14 border-y lg:border-y-0 lg:border-x border-white/10">
            <h3 
              className="text-[#00A3C4] font-light text-2xl tracking-tight mb-12"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              The Studio
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-6">
                {[
                  { name: 'About Astra', path: '/about' },
                  { name: 'Our Portfolio', path: '/port' },
                  { name: 'Services', path: '/services' },
                  { name: 'Design Journal', path: '/blog' },
                  { name: 'Private Inquiry', path: '/contactus' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-stone-400 hover:text-[#00A3C4] transition-all flex items-center group text-[10px] uppercase tracking-[0.5em] font-bold">
                      <span className="w-0 group-hover:w-8 h-[0.5px] bg-[#00A3C4] mr-0 group-hover:mr-4 transition-all duration-500"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Block 3: Contact & Engagement */}
          <div className="lg:col-span-4 bg-[#050A0F] p-10 lg:p-14 flex flex-col justify-between">
            <div className="space-y-12">
              <h3 
                className="text-[#00A3C4] font-light text-2xl tracking-tight"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Inquiries
              </h3>
              <div className="space-y-8">
                <a href="tel:+919345445898" className="flex items-center space-x-5 text-stone-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-[#00A3C4] stroke-[1px] opacity-70" />
                  <span className="text-sm font-extralight tracking-widest">+91 93454 45898</span>
                </a>
                <a href="mailto:astrainterior83@gmail.com" className="flex items-center space-x-5 text-stone-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-[#00A3C4] stroke-[1px] opacity-70" />
                  <span className="text-sm font-extralight tracking-widest">astrainterior83@gmail.com</span>
                </a>
                <address className="flex items-start space-x-5 text-stone-400 not-italic">
                  <MapPin className="w-4 h-4 text-[#00A3C4] stroke-[1px] shrink-0 opacity-70" />
                  <span className="text-sm font-extralight tracking-widest leading-relaxed">Race Course, Coimbatore,<br />Tamil Nadu, India</span>
                </address>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppRedirect}
              className="mt-16 flex items-center justify-between w-full py-6 bg-[#FAF9F6]/5 border border-white/5 text-white px-8 uppercase tracking-[0.6em] text-[9px] font-black hover:bg-[#00A3C4] hover:border-[#00A3C4] transition-all duration-700 group overflow-hidden rounded-sm"
            >
              <span className="relative z-10 flex items-center">
                <MessageSquare className="mr-4 w-3.5 h-3.5 opacity-60" />
                Direct WhatsApp
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <p className="text-stone-500 text-[9px] uppercase tracking-[0.5em] font-medium">
                © {currentYear} Astra Interior Design Studio
              </p>
              <p className="text-stone-600 text-[8px] uppercase tracking-[0.4em] font-light">
                Handcrafted Excellence in Coimbatore
              </p>
            </div>
            
            <div className="flex space-x-12">
              {['Privacy', 'Terms', 'Legal'].map((link) => (
                <Link key={link} to="/contactus" className="text-stone-500 hover:text-[#00A3C4] text-[9px] uppercase tracking-[0.3em] transition-colors font-black">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* BRAND WATERMARK */}
      <div className="absolute -bottom-10 right-10 opacity-[0.02] pointer-events-none select-none" aria-hidden="true">
        <span 
          className="text-[18vw] font-bold leading-none text-[#1A365D] tracking-tighter"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          ASTRA
        </span>
      </div>
    </footer>
  );
}