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
      className="relative bg-[#2C1E14] overflow-hidden border-t border-white/5" 
      aria-labelledby="footer-heading"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* SVG BACKGROUND: REFINED DOT GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="#A68A64" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 pt-24 pb-12">
        
        {/* TOP SECTION: BENTO GRID UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-20">
          
          {/* Block 1: Identity */}
          <div className="lg:col-span-4 p-10 lg:p-14 space-y-10 border-b lg:border-b-0 lg:border-r border-white/10">
            <Link to="/" aria-label="Astra Interior Home" className="inline-block group">
              <img 
                src={Logo} 
                alt="Astra Interior" 
                className="h-20 w-auto object-contain transition-transform duration-700 group-hover:scale-105" 
                loading="lazy"
              />
            </Link>
            <p className="text-stone-400 leading-relaxed font-extralight italic text-lg">
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
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-[#A68A64] hover:border-[#A68A64] transition-all duration-500 rounded-full"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="w-4 h-4 stroke-[1px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Block 2: Navigation */}
          <div className="lg:col-span-4 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
            <h3 
              className="text-[#A68A64] font-light text-2xl tracking-tight mb-12"
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
                    <Link to={item.path} className="text-stone-400 hover:text-white transition-all flex items-center group text-[10px] uppercase tracking-[0.5em] font-bold">
                      <span className="w-0 group-hover:w-8 h-[0.5px] bg-[#A68A64] mr-0 group-hover:mr-4 transition-all duration-500"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Block 3: Contact & Direct Inquiry */}
          <div className="lg:col-span-4 p-10 lg:p-14 flex flex-col justify-between">
            <div className="space-y-12">
              <h3 
                className="text-[#A68A64] font-light text-2xl tracking-tight"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Inquiries
              </h3>
              <div className="space-y-8">
                <a href="tel:+919345445898" className="flex items-center space-x-5 text-stone-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-[#A68A64] stroke-[1px] opacity-70" />
                  <span className="text-sm font-extralight tracking-widest">+91 93454 45898</span>
                </a>
                <a href="mailto:astrainterior83@gmail.com" className="flex items-center space-x-5 text-stone-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-[#A68A64] stroke-[1px] opacity-70" />
                  <span className="text-sm font-extralight tracking-widest">astrainterior83@gmail.com</span>
                </a>
                <address className="flex items-start space-x-5 text-stone-400 not-italic">
                  <MapPin className="w-4 h-4 text-[#A68A64] stroke-[1px] shrink-0 opacity-70" />
                  <span className="text-sm font-extralight tracking-widest leading-relaxed">Race Course, Coimbatore,<br />Tamil Nadu, India</span>
                </address>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppRedirect}
              className="mt-16 flex items-center justify-between w-full py-6 bg-[#FAF9F6]/5 border border-white/5 text-white px-8 uppercase tracking-[0.6em] text-[9px] font-black hover:bg-[#A68A64] hover:border-[#A68A64] transition-all duration-700 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <MessageSquare className="mr-4 w-3.5 h-3.5 opacity-60" />
                Direct WhatsApp
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
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
                <Link key={link} to="/contactus" className="text-stone-500 hover:text-[#A68A64] text-[9px] uppercase tracking-[0.3em] transition-colors font-black">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* LARGE BACKGROUND DECOR */}
      <div className="absolute -bottom-10 right-10 opacity-[0.03] pointer-events-none select-none" aria-hidden="true">
        <span 
          className="text-[18vw] font-bold leading-none text-white tracking-tighter"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          ASTRA
        </span>
      </div>
    </footer>
  );
}