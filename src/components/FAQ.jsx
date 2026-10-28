
import { useEffect, useState } from "react";
import {
  Plus,
  Minus,
  ArrowUpRight,
  MessageCircle,
  Clock3,
  MapPin,
  
  CheckCircle2,
} from "lucide-react";

const faqs = [
  {
    category: "Planning & Timeline",
    question: "How long does a home interior design project take?",
    answer:
      "The timeline depends on your property's size, design requirements, material availability and scope of work. A complete home interior project generally involves design planning, material selection, furniture work and on-site execution. After understanding your requirements, Astra Interior can discuss a suitable project timeline and milestones.",
  },
  {
    category: "Services",
    question: "What interior design services does Astra Interior offer?",
    answer:
      "Astra Interior offers interior design solutions for homes, villas and offices. Depending on your project requirements, services can include space planning, furniture design, lighting and electrical work, painting, finishing, renovation and sofa revamp or redesign. Contact our team to discuss the services suited to your space.",
  },
  {
    category: "Budget & Consultation",
    question: "How much does interior design cost in Coimbatore?",
    answer:
      "Interior design costs vary according to the property's size, design style, materials, custom furniture and installation requirements. Sharing your location, approximate area, preferred style and budget helps us understand your project and discuss an appropriate solution. Request a consultation for a project-specific estimate.",
  },
  {
    category: "Design Process",
    question: "Can I customise the design to match my lifestyle?",
    answer:
      "Yes. Your preferences, daily routines, storage needs and available space are important parts of the design process. Discuss your preferred colours, materials, furniture styles and practical requirements with our team so the design can reflect your needs and the way you use your space.",
  },
  {
    category: "Furniture & Materials",
    question: "Can you help with custom furniture and sofa redesign?",
    answer:
      "Astra Interior can help you explore furniture design and sofa revamp or redesign options based on your project requirements. The design, dimensions, fabric, finish and practical use of each piece can be discussed during consultation. Final options depend on the scope of work and material availability.",
  },
  {
    category: "Project Management",
    question: "Can I review the design before the work begins?",
    answer:
      "You can discuss the proposed layout, furniture requirements, finishes and material choices with the design team before execution. Ask about the drawings, 3D visualisations, revisions and project milestones available for your specific project during the initial consultation.",
  },
  {
    category: "Renovation",
    question: "Do you take up existing home renovation projects?",
    answer:
      "Yes, you can contact Astra Interior to discuss interior renovation and improvement requirements. Whether you want to update furniture, refresh your interiors, improve lighting or rethink the use of a room, the team can review your needs and confirm the scope of work suitable for your property.",
  },
  {
    category: "Location",
    question: "Where does Astra Interior provide interior design services?",
    answer:
      "Astra Interior is based in RS Puram, Coimbatore, Tamil Nadu. If you are planning home interiors, villa interiors, office interiors or renovation work in Coimbatore or nearby locations, contact us with your project location to confirm service availability.",
  },
];

const categories = [
  "All Questions",
  "Planning & Timeline",
  "Services",
  "Budget & Consultation",
  "Design Process",
  "Furniture & Materials",
  "Project Management",
  "Renovation",
  "Location",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Questions");

  const filteredFaqs =
    activeCategory === "All Questions"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  useEffect(() => {
    const pageTitle =
      "Interior Design FAQs in Coimbatore | Astra Interior";
    const pageDescription =
      "Find answers about interior designers in Coimbatore, home and villa interior design, office interiors, renovation, furniture design, project timelines and consultation with Astra Interior.";

    document.title = pageTitle;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = pageDescription;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "astra-interior-faq-schema";
    schemaScript.textContent = JSON.stringify(schema);

    const existingSchema = document.getElementById(
      "astra-interior-faq-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    document.head.appendChild(schemaScript);

    return () => {
      schemaScript.remove();
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#F8F8F5] py-20 sm:py-24 lg:py-32"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Background details */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="astra-faq-grid"
              width="90"
              height="90"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 90 0 L 0 0 0 90"
                fill="none"
                stroke="#1A365D"
                strokeWidth="0.7"
              />
              <circle
                cx="45"
                cy="45"
                r="1.5"
                fill="#00A3C4"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#astra-faq-grid)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#00A3C4] sm:w-12" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007F9C] sm:text-xs sm:tracking-[0.35em]">
              Frequently Asked Questions
            </span>
            <span className="h-px w-8 bg-[#00A3C4] sm:w-12" />
          </div>

          <h2
            className="text-4xl font-semibold leading-[1.13] tracking-[-0.045em] text-[#1A365D] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Everything You Need
            <span className="mt-2 block font-medium italic text-[#008EAC]">
              to Know Before You Begin
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-[#505D6C] sm:text-base sm:leading-8 lg:text-lg">
            Planning your dream home or office? Find clear answers
            about interior design in Coimbatore, project timelines,
            furniture, renovation, budgets and our design process.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#34465B] sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#008EAC]" />
              Home & Villa Interiors
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#34465B] sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#008EAC]" />
              Office Interior Design
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#34465B] sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#008EAC]" />
              Renovation & Furniture
            </span>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.5fr] lg:gap-16 xl:gap-24">
          {/* Left introduction panel */}
          <aside className="lg:sticky lg:top-10">
            <div className="relative overflow-hidden bg-[#1A365D] p-7 text-white sm:p-9 lg:p-10">
              <div
                className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border border-white/10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-7 -top-7 h-32 w-32 rounded-full border border-white/10"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-white/20 bg-white/5">
               
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#5ED7E8]">
                  Your Design Journey
                </span>

                <h3
                  className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Good Design
                  <span className="mt-1 block font-medium italic text-[#5ED7E8]">
                    Starts With Clarity.
                  </span>
                </h3>

                <p className="mt-5 text-sm font-medium leading-7 text-slate-200 sm:text-base sm:leading-8">
                  Every space has different needs. We help you explore
                  design possibilities, understand your requirements
                  and plan your next steps with greater confidence.
                </p>

                <div className="my-8 h-px bg-white/15" />

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-white/10">
                      <MapPin className="h-4 w-4 text-[#5ED7E8]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Based in Coimbatore
                      </p>
                      <p className="mt-1 text-xs font-medium leading-5 text-slate-300">
                        RS Puram, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-white/10">
                      <Clock3 className="h-4 w-4 text-[#5ED7E8]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Project-Specific Planning
                      </p>
                      <p className="mt-1 text-xs font-medium leading-5 text-slate-300">
                        Timelines and scope discussed during consultation
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(event) => {
                    const contactSection =
                      document.getElementById("contact");

                    if (contactSection) {
                      event.preventDefault();
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="mt-9 inline-flex min-h-12 w-full items-center justify-between gap-3 border border-[#5ED7E8]/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#00A3C4] sm:text-sm"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>

            <div className="mt-5 border border-stone-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008EAC]">
                Need Personal Guidance?
              </p>

              <p className="mt-3 text-sm font-medium leading-7 text-[#505D6C]">
                Tell us about your property, preferred style and
                requirements. Our team can help you understand the
                appropriate next steps.
              </p>
            </div>
          </aside>

          {/* FAQ section */}
          <div className="min-w-0">
            {/* Category filters */}
            <div className="mb-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#465569]">
                Browse by Topic
              </p>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryChange(category)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-4 ${
                        isActive
                          ? "border-[#1A365D] bg-[#1A365D] text-white"
                          : "border-stone-300 bg-white text-[#465569] hover:border-[#00A3C4] hover:text-[#007F9C]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FAQ items */}
            <div className="border-t border-stone-300">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const questionId = `astra-faq-question-${idx}`;
                const answerId = `astra-faq-answer-${idx}`;

                return (
                  <article
                    key={faq.question}
                    className={`border-b transition-colors duration-300 ${
                      isOpen
                        ? "border-[#00A3C4]/60 bg-white"
                        : "border-stone-200 bg-transparent hover:bg-white/70"
                    }`}
                  >
                    <button
                      id={questionId}
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-start gap-4 px-4 py-6 text-left sm:gap-6 sm:px-6 sm:py-7"
                    >
                      <span
                        className={`mt-0.5 w-8 shrink-0 text-sm font-bold tabular-nums transition-colors sm:w-10 sm:text-base ${
                          isOpen ? "text-[#008EAC]" : "text-[#A2ABB5]"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-base font-semibold leading-7 tracking-tight transition-colors sm:text-lg sm:leading-8 lg:text-xl ${
                            isOpen
                              ? "text-[#007F9C]"
                              : "text-[#1A365D]"
                          }`}
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {faq.question}
                        </span>

                        <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7B8794]">
                          {faq.category}
                        </span>
                      </span>

                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-0 border-[#00A3C4] bg-[#00A3C4] text-white"
                            : "border-stone-300 bg-white text-[#1A365D]"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                      className="px-4 pb-7 pl-16 sm:px-6 sm:pb-8 sm:pl-[5.5rem]"
                    >
                      <p className="max-w-2xl text-sm font-medium leading-7 text-[#505D6C] sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>

                      {idx === 2 && (
                        <a
                          href="#contact"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#007F9C] transition-colors hover:text-[#1A365D]"
                        >
                          Request a consultation
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* FAQ bottom note */}
            <div className="mt-6 flex items-start gap-3 border border-stone-200 bg-white p-5 sm:p-6">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#008EAC]" />

              <p className="text-sm font-medium leading-7 text-[#505D6C]">
                Have a question that isn't covered here? Contact Astra
                Interior to discuss your home interior design, villa,
                office or renovation requirements in Coimbatore.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden bg-[#1A365D] px-6 py-14 text-center sm:mt-28 sm:px-12 sm:py-20 lg:py-24">
          <div
            className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-white/10 sm:-right-5 sm:-top-24 sm:h-96 sm:w-96"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full border border-white/10 sm:-bottom-40 sm:h-96 sm:w-96"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5ED7E8] sm:text-xs">
            
              Your Space, Your Story
            </div>

            <h3
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Ready to Transform
              <span className="mt-2 block font-medium italic text-[#5ED7E8]">
                Your Space?
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-7 text-slate-200 sm:text-base sm:leading-8">
              Let's talk about your vision, explore your design
              requirements and take the first step towards a space
              that works beautifully for you.
            </p>

            <a
              href="#contact"
              onClick={(event) => {
                const contactSection =
                  document.getElementById("contact");

                if (contactSection) {
                  event.preventDefault();
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group mt-9 inline-flex min-h-[54px] items-center justify-center gap-4 bg-[#00A3C4] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[#1A365D] sm:px-10 sm:text-sm"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <p className="mt-5 text-xs font-medium text-slate-300">
              Astra Interior · Hudco Colony, Vellakinar Village, Coimbatore, Tamil Nadu- 641029
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
