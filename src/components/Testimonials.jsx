import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Julianne Moore",
    location: "The Heights Penthouse",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Astra Interior didn't just design a home; they curated a sanctuary. The way they balanced the dark walnut textures with natural light in our penthouse is absolute mastery.",
    rating: 5,
  },
  {
    name: "Adrian Sterling",
    location: "Sterling & Co. Offices",
    role: "Founding Partner",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Their attention to architectural detail is unmatched. They managed the entire execution—from the custom marble foyer to the smart lighting—with surgical precision.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    location: "Coastal Villa",
    role: "Architect",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "As an architect, I am selective about collaborators. Astra's bespoke furniture workshop delivered pieces that are effectively habitable art. A true legacy firm.",
    rating: 5,
  },
  {
    name: "Victor Thorne",
    location: "Heritage Estate",
    role: "Collector",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The sofa redesign service gave my family heirlooms a second life. The Italian velvet and structural restoration work was flawless. Exceptional craftsmanship.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white p-10 md:p-14 border border-stone-100 hover:shadow-[40px_40px_80px_-15px_rgba(26,54,93,0.08)] transition-all duration-700 w-full rounded-sm">
      {/* Brand Teal Quote Icon */}
      <div className="absolute top-10 right-10 text-[#00A3C4]/10 group-hover:text-[#00A3C4]/20 transition-colors">
        <Quote className="w-12 h-12" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-10 space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            /* Brand Teal Stars */
            <Star key={i} className="w-3 h-3 text-[#00A3C4] fill-current opacity-70" />
          ))}
        </div>

        <p className="text-[#1A365D] font-light italic text-xl md:text-2xl mb-12 leading-relaxed tracking-tight" style={{ fontFamily: '"Inter", sans-serif' }}>
          "{testimonial.content}"
        </p>

        <div className="flex items-center border-t border-stone-100 pt-10">
          <div className="relative overflow-hidden rounded-full w-14 h-14 mr-6 shadow-sm border border-stone-100">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
          </div>
          <div>
            <h4 className="text-[#1A365D] font-light text-lg tracking-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>
              {testimonial.name}
            </h4>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#00A3C4] font-semibold mt-1">
              {testimonial.role} — {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-[#FAF9F6] relative overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* SVG BACKGROUND: ARCHITECTURAL RADIUS & GRID using Deep Navy and Teal */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="400" fill="none" stroke="#1A365D" strokeWidth="0.5" strokeDasharray="20 20" />
          <path d="M0 500 H1000 M500 0 V1000" stroke="#1A365D" strokeWidth="0.3" />
          <pattern id="dot-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#00A3C4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-6 mb-8">
              {/* Brand Teal Divider */}
              <div className="w-12 h-[0.5px] bg-[#00A3C4]"></div>
              <span className="text-[#00A3C4] uppercase tracking-[0.6em] text-[10px] font-bold">Client Perspectives</span>
            </div>
            <h2 
              className="text-6xl md:text-8xl lg:text-9xl font-light text-[#1A365D] leading-[0.9] tracking-tighter"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Shared <br />
              <span className="italic bg-gradient-to-r from-[#1A365D] via-[#00A3C4] to-[#1A365D] bg-clip-text text-transparent pb-4 font-extralight">Experiences.</span>
            </h2>
          </div>
          <div className="max-w-sm border-l border-stone-200 pl-10 py-2">
            <p className="text-stone-400 italic font-extralight text-lg leading-relaxed">
              "Authenticity is the soul of our craft. Hear from those who have entrusted us with their private sanctuaries."
            </p>
          </div>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div className="space-y-16 lg:pt-32">
            {testimonials.filter((_, i) => i % 2 === 0).map((t, i) => (
              <TestimonialCard key={`left-${i}`} testimonial={t} />
            ))}
          </div>
          <div className="space-y-16">
            {testimonials.filter((_, i) => i % 2 !== 0).map((t, i) => (
              <TestimonialCard key={`right-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-48 pt-24 border-t border-stone-200/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div>
              <div 
                className="text-6xl font-light text-[#1A365D] mb-4 tracking-tighter"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                40+
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#00A3C4] font-black">Sanctuaries Delivered</div>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-16 bg-stone-200"></div>
              <div 
                className="text-6xl font-light text-[#1A365D] mb-4 tracking-tighter"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                98%
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#00A3C4] font-black">Client Retention</div>
              <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[0.5px] h-16 bg-stone-200"></div>
            </div>
            <div>
              <div 
                className="text-6xl font-light text-[#1A365D] mb-4 tracking-tighter"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                12
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#00A3C4] font-black">Design Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Watermark in Brand Navy */}
      <div className="absolute -bottom-10 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 
          className="text-[28vw] font-bold leading-none text-[#1A365D] tracking-tighter"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          VOICES
        </h2>
      </div>
    </section>
  );
}