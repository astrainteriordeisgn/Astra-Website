import React, { useState } from 'react';
import { MessageCircle, Phone, Plus, X } from 'lucide-react';

export default function ContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  const contactData = {
    phone: "+919345445898",
    whatsapp: "919345445898",
  };

  // Integrated Brand Colors
  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end font-sans">
      
      {/* Expanded Actions */}
      <div className={`flex flex-col items-end space-y-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
      }`}>
        
        {/* WhatsApp - Brand Teal Glassmorphism */}
        <a 
          href={`https://wa.me/${contactData.whatsapp}?text=I'm interested in an Astra Interior consultation.`}
          target="_blank" 
          rel="noreferrer"
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 text-white text-[9px] uppercase tracking-[0.3em] shadow-2xl">
            WhatsApp Concierge
          </span>
          <div 
            className="w-14 h-14 backdrop-blur-2xl border flex items-center justify-center transition-all duration-500 shadow-2xl rounded-full"
            style={{ 
              backgroundColor: `${brandTeal}20`, // 20% opacity teal
              borderColor: `${brandTeal}50`, 
              color: brandTeal 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = brandTeal;
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${brandTeal}20`;
              e.currentTarget.style.color = brandTeal;
            }}
          >
            <MessageCircle className="w-6 h-6" />
          </div>
        </a>

        {/* Phone - Brand Navy */}
        <a 
          href={`tel:${contactData.phone}`}
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 text-white text-[9px] uppercase tracking-[0.3em] shadow-2xl">
            Direct Line
          </span>
          <div 
            className="w-14 h-14 border flex items-center justify-center transition-all duration-500 shadow-2xl rounded-full"
            style={{ 
              backgroundColor: brandNavy, 
              borderColor: `${brandTeal}30`,
              color: brandTeal 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = brandTeal;
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = brandNavy;
              e.currentTarget.style.color = brandTeal;
            }}
          >
            <Phone className="w-6 h-6" />
          </div>
        </a>
      </div>

      {/* Main Multi-Action Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mt-6 flex items-center space-x-4 bg-[#FAF9F6] border border-stone-200 pl-6 pr-2 py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] group transition-all duration-500 outline-none"
        style={{ borderColor: isOpen ? brandTeal : "" }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-bold group-hover:text-[#1A365D] transition-colors">
          {isOpen ? "Close" : "Contact"} <span className="italic font-serif lowercase ml-1" style={{ color: brandTeal }}>Studio</span>
        </span>
        <div 
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700`}
          style={{ backgroundColor: isOpen ? brandTeal : brandNavy }}
        >
           {isOpen ? <X className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" style={{ color: brandTeal }} />}
        </div>
      </button>

      {/* Background Pulse Effect when Closed using Brand Teal */}
      {!isOpen && (
        <div 
          className="absolute bottom-1 right-1 w-12 h-12 rounded-full animate-ping pointer-events-none opacity-20" 
          style={{ backgroundColor: brandTeal }}
        />
      )}
    </div>
  );
}