
import { useEffect } from "react";
import {
  Star,
  Quote,
  ArrowUpRight,
  MessageCircle,
  Check,
  MapPin,

} from "lucide-react";

const testimonials = [
  {
    id: 1,
    category: "Residential Interiors",
    title: "A home designed around your lifestyle.",
    content:
      "Replace this text with an approved testimonial from a residential interior design client. Include specific feedback about the design, communication, functionality or finished space.",
    name: "Residential Client",
    location: "Coimbatore",
  },
  {
    id: 2,
    category: "Villa Interiors",
    title: "Thoughtful details. A cohesive design.",
    content:
      "Replace this text with genuine feedback from a villa or home interior client. Use the customer's actual words and obtain permission before publishing.",
    name: "Villa Interior Client",
    location: "Coimbatore",
  },
  {
    id: 3,
    category: "Furniture & Finishing",
    title: "The finishing touches make a difference.",
    content:
      "Add an approved customer review about furniture design, painting, electrical work or other interior finishing services delivered by Astra Interior.",
    name: "Interior Design Client",
    location: "Tamil Nadu",
  },
  {
    id: 4,
    category: "Commercial Interiors",
    title: "A space planned for everyday use.",
    content:
      "Use genuine feedback from a commercial or office interior project, if applicable. Highlight the customer's actual experience with planning, execution and the completed space.",
    name: "Commercial Client",
    location: "Coimbatore",
  },
];

const services = [
  "Home & Villa Interiors",
  "Furniture Design",
  "Painting & Finishing",
  "Office & Commercial Interiors",
];

function TestimonialCard({ testimonial, index }) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-[#DADDDC] bg-[#F7F7F5] p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#00A3C4] hover:bg-white hover:shadow-[0_24px_60px_rgba(26,54,93,0.16)] focus-within:border-[#00A3C4] sm:p-8 lg:p-9">
      {/* Category and quote */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <span className="inline-flex items-center border border-[#1A365D] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A365D] transition-all duration-300 group-hover:border-[#00A3C4] group-hover:bg-[#00A3C4] group-hover:text-white sm:text-xs">
          {testimonial.category}
        </span>

        <Quote
          size={29}
          strokeWidth={1.7}
          aria-hidden="true"
          className="shrink-0 text-[#1A365D] transition-all duration-300 group-hover:scale-110 group-hover:text-[#00A3C4]"
        />
      </div>

      {/* Heading */}
      <h3
        className="max-w-[440px] text-xl font-semibold leading-snug tracking-[-0.035em] text-[#1A365D] transition-colors duration-300 group-hover:text-[#008EAC] sm:text-2xl lg:text-[26px]"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {testimonial.title}
      </h3>

      {/* Review copy */}
      <p className="mt-5 flex-1 text-sm font-medium leading-7 text-[#465569] transition-colors duration-300 group-hover:text-[#29394D] sm:text-base sm:leading-8">
        “{testimonial.content}”
      </p>

      {/* Client details */}
      <div className="mt-8 flex items-center gap-3 border-t border-[#DADDDC] pt-6 transition-colors duration-300 group-hover:border-[#B8EAF1] sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#7462A5] transition-colors duration-300 group-hover:bg-[#1A365D] sm:h-12 sm:w-12">
          <span className="text-sm font-bold tracking-wide text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold text-[#1A365D] transition-colors duration-300 group-hover:text-[#008EAC]">
            {testimonial.name}
          </p>

          <p className="mt-1 text-xs font-semibold text-[#596777] sm:text-sm">
            {testimonial.location}
          </p>
        </div>

        <div
          className="ml-auto flex shrink-0 items-center gap-1.5 text-[#465569] transition-colors duration-300 group-hover:text-[#008EAC]"
          aria-label="Client review"
        >
          <Star
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="text-xs font-bold">Review</span>
        </div>
      </div>

      {/* Bottom hover accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#00A3C4] transition-all duration-500 ease-out group-hover:w-full"
      />
    </article>
  );
}

export default function Testimonials() {
  const whatsappNumber = "919345445898";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Astra Interior, I would like to know more about your interior design services in Coimbatore."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    document.title =
      "Interior Designers in Coimbatore | Astra Interior";

    const description =
      "Explore Astra Interior's home, villa and office interior design services in Coimbatore, Tamil Nadu. Contact us about furniture design, painting, finishing and renovation.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#F7F7F5] px-5 py-20 text-[#1A365D] sm:px-8 sm:py-24 lg:px-16 lg:py-32"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#1A365D 1px, transparent 1px), linear-gradient(90deg, #1A365D 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <header className="grid items-end gap-8 border-b border-[#D9DDDC] pb-10 sm:pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00A3C4]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#007F9C] sm:text-xs sm:tracking-[0.3em]">
                Client Experiences
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Spaces shaped
              <span className="mt-2 block font-medium italic text-[#008EAC]">
                around people.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#505D6C] sm:text-base sm:leading-8">
              Every interior project begins with an idea. Thoughtful
              planning helps bring together aesthetics, comfort and
              everyday functionality for homes and workspaces.
            </p>
          </div>

          <div className="max-w-[490px] lg:justify-self-end">
            <p className="text-sm font-medium leading-7 text-[#465569] sm:text-base sm:leading-8">
              Explore the interior design services offered by Astra
              Interior. From home and villa interiors to furniture
              design and finishing, discuss your requirements with
              our team in Coimbatore.
            </p>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="group mt-6 inline-flex min-h-[50px] items-center gap-3 bg-[#1A365D] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#008EAC]"
            >
              Discuss Your Project

              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </header>

        {/* Testimonials */}
        <div className="grid grid-cols-1 items-stretch gap-5 pt-9 sm:pt-12 md:grid-cols-2 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Services */}
        <div className="mt-20 border-y border-[#D9DDDC] py-10 sm:mt-24 sm:py-14 lg:mt-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#00A3C4]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#007F9C] sm:text-xs">
                  Our Expertise
                </span>
              </div>

              <h3
                className="text-2xl font-semibold leading-snug tracking-tight text-[#1A365D] sm:text-3xl lg:text-4xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Interior design for the way you live and work.
              </h3>

              <p className="mt-4 max-w-lg text-sm font-medium leading-7 text-[#505D6C] sm:text-base sm:leading-8">
                Explore our interior services and discuss the options
                suitable for your property and project requirements.
              </p>
            </div>

            {/* FIXED SERVICE CARDS */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex min-h-[65px] min-w-0 items-center gap-3 border border-[#DFE3E1] bg-white px-3 py-4 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#00A3C4] hover:bg-white hover:shadow-[0_8px_25px_rgba(26,54,93,0.08)] sm:px-4"
                >
                  {/* Icon box */}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1A1A1A] text-[#00C4E8]">
                    <Check size={16} strokeWidth={2.4} />
                  </span>

                  {/* Explicit text colour: remains visible on hover */}
                  <span
                    className="block min-w-0 flex-1 text-xs font-bold leading-5 text-[#1A365D] sm:text-sm"
                    style={{
                      color: "#1A365D",
                      opacity: 1,
                      visibility: "visible",
                    }}
                  >
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Local SEO content */}
        <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <MapPin
                size={17}
                className="text-[#008EAC]"
                aria-hidden="true"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#007F9C] sm:text-xs">
                Astra Interior · Coimbatore
              </span>
            </div>

            <h3
              className="max-w-[700px] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#1A365D] sm:text-4xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Looking for interior designers in Coimbatore?
            </h3>
          </div>

          <p className="text-sm font-medium leading-7 text-[#505D6C] sm:text-base sm:leading-8">
            Astra Interior offers interior design solutions for homes,
            villas and workspaces in Coimbatore, Tamil Nadu. Discuss
            home interior design, villa interiors, office interiors,
            furniture design, painting, electrical work and finishing
            with our team. Project scope and service availability can
            be confirmed during your consultation.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="relative overflow-hidden bg-[#1A365D] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 select-none text-[180px] font-bold leading-none tracking-[-0.1em] text-white/[0.04] sm:-right-4 sm:-top-20 sm:text-[260px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            A
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
               

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5ED7E8] sm:text-xs">
                  Your Project Starts Here
                </span>
              </div>

              <h3
                className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Let’s create a space
                <span className="mt-2 block font-medium italic text-[#5ED7E8]">
                  that feels like yours.
                </span>
              </h3>

              <p className="mt-5 max-w-[600px] text-sm font-medium leading-7 text-slate-200 sm:text-base sm:leading-8">
                Tell us about your home, villa or workspace and the
                interior design you have in mind. Let’s discuss your
                requirements and explore the next steps together.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="group inline-flex min-h-[56px] w-full items-center justify-between gap-5 border border-white/80 bg-white px-6 py-4 text-sm font-bold text-[#1A365D] transition-colors duration-300 hover:border-[#00A3C4] hover:bg-[#00A3C4] hover:text-white sm:w-auto sm:min-w-[250px]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} aria-hidden="true" />
                Contact Astra Interior
              </span>

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
