import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import { 
  Compass, 
  PenTool, 
  ClipboardCheck, 
  MoveRight, 
  MapPin, 
  Star, 
  Anchor,
  Box 
} from "lucide-react";

const sectionsData = {
  locations: [
    { 
      name: "Coimbatore", 
      projects: "28 Projects", 
      type: "HQ Atelier", 
      desc: "Our flagship design atelier at Race Course — where concept development, material research, and execution strategy merge to craft benchmark interiors.",
      coords: { x: "20%", y: "30%" } 
    },
    { 
      name: "Chennai", 
      projects: "12 Projects", 
      type: "Design Studio", 
      desc: "Luxury apartment transformations along ECR and premium villa interiors blending contemporary elegance with coastal calm.",
      coords: { x: "70%", y: "15%" }
    },
    { 
      name: "Madurai", 
      projects: "6 Projects", 
      type: "Heritage Design", 
      desc: "Modern reinterpretation of traditional Tamil architecture with refined material palettes.",
      coords: { x: "40%", y: "70%" }
    },
    { 
      name: "Salem", 
      projects: "5 Projects", 
      type: "Consultancy", 
      desc: "Industrial and residential transformations focused on spatial efficiency and timeless aesthetics.",
      coords: { x: "35%", y: "40%" }
    },
    { 
      name: "Erode", 
      projects: "4 Projects", 
      type: "Bespoke", 
      desc: "Custom furniture commissions crafted with precision detailing and premium finishes.",
      coords: { x: "25%", y: "45%" }
    },
    { 
      name: "Tiruppur", 
      projects: "7 Projects", 
      type: "Industrial", 
      desc: "Modern office interiors designed to enhance productivity and brand identity.",
      coords: { x: "15%", y: "50%" }
    },
    { 
      name: "Pollachi", 
      projects: "5 Projects", 
      type: "Estate Living", 
      desc: "Farmhouse luxury interiors combining open planning, natural textures, and relaxed sophistication.",
      coords: { x: "10%", y: "65%" }
    }
  ]
};

export default function Aboutus() {
  const [activeLoc, setActiveLoc] = useState(0);
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=I'd like to consult about a project.`, '_blank');
  };

  return (
    <div className="bg-[#FAF9F6] text-[#2C1E14] selection:bg-[#A68A64] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 md:px-16 overflow-hidden border-b border-stone-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#A68A64] font-medium mb-8 block">
              Section 01 — Our Genesis
            </span>

            <h1 className="text-4xl md:text-5xl font-light leading-[1.1] mb-10 tracking-tighter" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Crafting <span className="italic text-[#A68A64] font-extralight">Timeless Interiors</span><br/>
              That Reflect Identity & Precision.
            </h1>

            <p className="text-stone-500 font-extralight leading-relaxed mb-8 text-lg">
              Astra Interior Design was founded in Coimbatore with a singular vision —
              to bridge architectural discipline with emotional living. We believe a
              well-designed space should not only look refined but feel intuitive,
              balanced, and deeply personal. 
            </p>

            <p className="text-stone-400 font-extralight leading-relaxed mb-10 text-base">
              Our team combines global design exposure with local artisan expertise,
              ensuring each square inch serves a purpose while expressing character.
              Every detail is intentional. Every finish is considered.
            </p>

            <button 
              onClick={() => navigate('/port')}
              className="flex items-center space-x-3 text-[#A68A64] font-semibold text-[10px] uppercase tracking-[0.4em] hover:text-[#2C1E14] transition-colors"
            >
              <span>Explore Portfolio</span>
              <MoveRight className="w-4 h-4 stroke-[1.5px]" />
            </button>
          </motion.div>

          <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 1.2 }}
              className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
                 alt="Luxury Interior" 
               />
            </div>
          </motion.div>

        </div>
      </section>

      {/* REGIONAL PRESENCE */}
      <section className="py-32 bg-[#1A1512] text-white px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">

          <div className="relative z-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#A68A64] font-medium mb-8 block">
              Regional Presence
            </span>

            <p className="text-stone-500 font-extralight leading-relaxed mb-10 text-sm max-w-sm tracking-wide">
              Our design footprint spans across South India. Each city influences
              our creative vocabulary while maintaining Astra’s core philosophy.
            </p>

            <div className="h-[450px] overflow-y-auto pr-6 space-y-2 custom-scrollbar">
              {sectionsData.locations.map((loc, i) => (
                <button 
                  key={i}
                  onMouseEnter={() => setActiveLoc(i)}
                  className={`w-full p-6 text-left transition-all duration-500 rounded-sm group ${
                    activeLoc === i ? 'bg-[#A68A64]/10 border-l-2 border-[#A68A64] text-white' : 'text-stone-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-light tracking-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>{loc.name}</h4>
                    <span className={`text-[8px] font-black uppercase tracking-[0.3em] ${activeLoc === i ? 'text-[#A68A64]' : 'text-stone-800'}`}>
                      {loc.projects}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* 3D PERSPECTIVE ATELIER DESIGN */}
          <div className="relative h-[600px] w-full hidden md:flex items-center justify-center perspective-1000">
             <motion.div 
               animate={{ rotateX: 55, rotateZ: -25 }}
               transition={{ duration: 0.5 }}
               className="relative w-[80%] h-[80%] bg-[#2C1E14] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden"
               style={{ transformStyle: 'preserve-3d' }}
             >
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#A68A64 1px, transparent 1px), linear-gradient(90deg, #A68A64 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                
                {sectionsData.locations.map((loc, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: loc.coords.x, top: loc.coords.y, translateZ: '30px' }}
                  >
                    <div className={`relative flex items-center justify-center transition-all duration-700 ${activeLoc === i ? 'scale-150' : 'scale-75 opacity-20'}`}>
                      <div className="absolute w-10 h-10 bg-[#A68A64]/10 rounded-full animate-ping" />
                      <MapPin className={`w-5 h-5 ${activeLoc === i ? 'text-[#A68A64]' : 'text-white'}`} strokeWidth={1} />
                    </div>
                  </motion.div>
                ))}

                <motion.div 
                  animate={{ left: sectionsData.locations[activeLoc].coords.x, top: sectionsData.locations[activeLoc].coords.y }}
                  className="absolute w-[0.5px] h-96 bg-gradient-to-t from-[#A68A64] to-transparent pointer-events-none"
                  style={{ translateZ: '0px', transform: 'rotateX(-90deg)', originY: 'bottom' }}
                />
             </motion.div>

             <AnimatePresence mode="wait">
               <motion.div 
                 key={activeLoc}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="absolute bottom-5 right-0 z-30 bg-white p-10 shadow-2xl max-w-xs border-t border-[#A68A64]"
               >
                 <Box className="w-6 h-6 text-[#A68A64] mb-6 stroke-[1px]" />
                 <h3 className="text-3xl font-light text-[#2C1E14] mb-3 tracking-tighter" style={{ fontFamily: '"Poppins", sans-serif' }}>
                   {sectionsData.locations[activeLoc].name}
                 </h3>
                 <p className="text-[#A68A64] font-black tracking-[0.3em] uppercase text-[9px] mb-6">
                   {sectionsData.locations[activeLoc].type}
                 </p>
                 <p className="text-stone-400 text-xs leading-relaxed italic font-extralight tracking-wide">
                   {sectionsData.locations[activeLoc].desc}
                 </p>
                 <div className="mt-8 flex space-x-1.5 text-[#A68A64]/30">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-40 px-6 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32">

          <div className="space-y-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#A68A64] font-medium block">
              Section 06-07 — Process
            </span>

            <p className="text-stone-400 font-extralight leading-relaxed text-lg italic border-l border-stone-100 pl-10">
              Our methodology balances structure with creativity. Every stage is strategically
              planned and carefully executed.
            </p>

            <div className="space-y-16">
              {[
                { icon: Compass, title: "Discovery", text: "Understanding lifestyle patterns, spatial flow, and future adaptability." },
                { icon: PenTool, title: "Visualization", text: "Detailed 3D renders, material boards, and technical drawings." },
                { icon: ClipboardCheck, title: "Execution", text: "On-site supervision, premium sourcing, and flawless finishing." }
              ].map((step, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="text-3xl font-extralight text-stone-200 group-hover:text-[#A68A64] transition-colors tabular-nums" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    0{i+1}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-light tracking-tight text-[#2C1E14]" style={{ fontFamily: '"Poppins", sans-serif' }}>{step.title}</h4>
                    <p className="text-stone-500 text-sm font-extralight leading-relaxed tracking-wide max-w-sm">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tilt className="bg-[#2C1E14] p-20 relative overflow-hidden text-white flex flex-col justify-center rounded-sm group">
             <Anchor className="absolute -top-10 -right-10 w-48 h-48 text-white/5 transition-transform duration-1000 group-hover:scale-110" />
             <h3 className="text-4xl font-light italic mb-10 tracking-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>Global Sourcing.</h3>
             <p className="text-stone-400 font-extralight leading-relaxed mb-12 text-lg tracking-wide">
                From Italian Carrara marble to engineered European oak, 
                we source globally to ensure unmatched material quality and durability.
             </p>
             <div className="w-12 h-[0.5px] bg-[#A68A64]" />
          </Tilt>

        </div>
      </section>

      {/* CTA */}
      <section className="py-48 bg-white px-6 md:px-16 text-center border-t border-stone-100">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-4xl md:text-6xl font-extralight text-stone-800 italic leading-[1.2] mb-20 tracking-tighter" style={{ fontFamily: '"Poppins", sans-serif' }}>
            "A well-designed space is an <span className="text-[#A68A64]">investment</span> in how you live."
          </p>

          <button 
            onClick={handleWhatsAppRedirect}
            className="group relative px-20 py-8 bg-[#2C1E14] text-white overflow-hidden transition-all duration-700 active:scale-95 shadow-2xl rounded-full"
          >
            <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-black flex items-center group-hover:text-[#FAF9F6]">
              Consult with Astra <MoveRight className="ml-5 w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#A68A64] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </button>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1500px; }
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #A68A64; opacity: 0.5; }
      `}} />
    </div>
  );
}