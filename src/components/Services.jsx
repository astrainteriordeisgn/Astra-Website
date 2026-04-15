import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the typical timeline for a full villa renovation?',
    answer: 'A comprehensive interior transformation usually takes 12 to 24 weeks. This includes: Conceptual phase (~4 weeks), Material procurement (6–8 weeks), and On-site execution. Clients receive a project-specific Gantt chart during the second consultation.'
  },
  {
    question: 'Do you offer a "Shop the Look" service for specific rooms?',
    answer: 'Yes. Astra Interior provides an e-commerce platform where you can purchase curated furniture sets from portfolio projects. They also offer "Astra Collections", which are pre-designed interior packages for living, dining, and master suites.'
  },
  {
    question: 'How do you handle custom furniture and upholstery?',
    answer: 'Astra operates its own artisanal workshop. Every piece — from walnut dining tables to Italian velvet sofas — is handcrafted to specific dimensions and material preferences.'
  },
  {
    question: 'Can I visit the site during the execution phase?',
    answer: 'Yes. Clients are encouraged to visit at key milestones. In addition, Astra provides a weekly digital progress report with high-resolution photos and updates on materials and craftsmanship.'
  },
  {
    question: 'Where do you source your materials from?',
    answer: 'Materials are sourced globally with a focus on sustainability: Marbles from Carrara, Italy; Oaks from managed European forests; and Textiles hand-woven by local traditional weavers.'
  },
  {
    question: 'Do you provide 3D visualizations before work begins?',
    answer: 'Yes. Every Astra project includes photorealistic 3D renders, allowing clients to experience the interplay of light, shadow, and texture before execution begins.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative py-32 bg-[#FAF9F6] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      
      {/* SVG ARCHITECTURAL BLUEPRINT BACKGROUND using Brand Navy */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1A365D" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="1.5" fill="#00A3C4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section with Brand Teal Accents */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[0.5px] bg-[#00A3C4]"></div>
            <span className="text-[#00A3C4] uppercase tracking-[0.6em] text-[9px] font-medium">Inquiries</span>
            <div className="w-12 h-[0.5px] bg-[#00A3C4]"></div>
          </div>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-light text-[#1A365D] leading-tight tracking-tighter mb-8"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Common <br /> 
            <span className="italic bg-gradient-to-r from-[#1A365D] via-[#00A3C4] to-[#1A365D] bg-clip-text text-transparent font-extralight">Curiosities</span>
          </h2>
          <p className="text-stone-400 font-extralight italic text-lg leading-relaxed">
            "Clarity is the first step toward a well-designed sanctuary."
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-4 items-start">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-500 border-b border-stone-100 ${
                openIndex === idx ? 'pb-8' : 'pb-2'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-8 flex items-start justify-between text-left group"
              >
                <div className="flex space-x-8">
                  {/* Brand Teal numbering on hover/active */}
                  <span className={`text-stone-200 font-light text-2xl transition-colors tabular-nums ${openIndex === idx ? 'text-[#00A3C4]' : 'group-hover:text-[#00A3C4]'}`}>
                    0{idx + 1}
                  </span>
                  <span 
                    className={`text-xl font-light transition-all duration-500 tracking-tight ${
                      openIndex === idx ? 'text-[#00A3C4] italic translate-x-2' : 'text-[#1A365D]'
                    }`}
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-2">
                  {openIndex === idx ? 
                    <Minus className="w-4 h-4 text-[#00A3C4] stroke-[1px]" /> : 
                    <Plus className="w-4 h-4 text-stone-300 group-hover:text-[#1A365D] stroke-[1px]" />
                  }
                </div>
              </button>

              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
                  openIndex === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-16 pr-8 pb-4">
                  <p className="text-stone-500 font-extralight leading-relaxed text-sm tracking-wide max-w-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card in Brand Navy */}
        <div className="mt-40 relative group overflow-hidden bg-[#1A365D] p-12 md:p-24 text-center rounded-[2rem]">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] transition-transform duration-1000 group-hover:scale-110">
            <HelpCircle className="w-64 h-64 text-white" />
          </div>
          <h3 
            className="relative z-10 text-4xl md:text-6xl font-light text-white mb-8 tracking-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Still Seeking <span className="italic text-[#00A3C4] font-extralight">Inspiration?</span>
          </h3>
          <p className="relative z-10 text-stone-300 mb-12 max-w-xl mx-auto font-extralight text-lg">
            Our design consultants are available for a private walkthrough of our material library and portfolio.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative z-10 px-14 py-5 bg-transparent border border-[#00A3C4] text-[#00A3C4] uppercase tracking-[0.5em] text-[10px] font-medium overflow-hidden transition-all duration-500 hover:text-white"
          >
            <span className="relative z-10">Start a Conversation</span>
            {/* Liquid Fill in Brand Teal */}
            <div className="absolute inset-0 bg-[#00A3C4] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>
      
      {/* Decorative Branding in Brand Navy */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.02] pointer-events-none select-none">
        <h2 
          className="text-[25vw] font-bold leading-none text-[#1A365D] tracking-tighter"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          ASTRA
        </h2>
      </div>
    </section>
  );
}