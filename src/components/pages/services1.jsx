
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Sofa,
  Lightbulb,
  Home,
  Hammer,
  MessageSquare,
  Check,

  MoveUpRight,
  MapPin,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: Home,
    title: "Home Interior Design",
    description:
      "Transform your home with thoughtfully planned interiors, practical layouts, coordinated colours and furniture designed around your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Contemporary home interior design with carefully coordinated furniture and finishes",
    features: ["Space Planning", "Colour Coordination", "Furniture Layout"],
  },
  {
    id: "02",
    icon: Lightbulb,
    title: "Lighting & Electrical",
    description:
      "Create comfortable, well-lit interiors with carefully planned lighting, functional electrical layouts and lighting solutions that complement your space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Modern living room interior featuring layered lighting and elegant finishes",
    features: ["Lighting Design", "Electrical Planning", "Ambient Lighting"],
  },
  {
    id: "03",
    icon: Sofa,
    title: "Sofa Revamp & Redesign",
    description:
      "Give existing sofas a fresh look with suitable upholstery, updated fabrics and finishes selected to complement your interiors.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Comfortable living room with a contemporary sofa and refined interior styling",
    features: ["Upholstery Options", "Fabric Selection", "Sofa Redesign"],
  },
  {
    id: "04",
    icon: Hammer,
    title: "Custom Furniture Design",
    description:
      "Make better use of your space with furniture planned around your dimensions, storage needs, preferred materials and personal style.",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Contemporary interior furniture and cabinetry with a clean architectural finish",
    features: ["Custom Furniture", "Storage Solutions", "Material Selection"],
  },
];

const additionalServices = [
  "Villa Interior Design",
  "Office Interior Design",
  "Painting & Finishing",
  "Interior Renovation",
];

export default function Services() {
  const navigate = useNavigate();



  const whatsappNumber = "919345445898";

  const handleWhatsApp = (serviceName = "") => {
    const message = encodeURIComponent(
      `Hello Astra Interior, I would like to discuss ${
        serviceName ? `${serviceName.toLowerCase()} ` : ""
      }services in Coimbatore. Please share more details.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    document.title =
      "Interior Designers in Coimbatore | Astra Interior Services";

    const description =
      "Looking for interior designers in Coimbatore? Explore Astra Interior's home and villa interiors, office interior design, custom furniture, lighting, sofa redesign, painting and renovation services.";

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
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#F7F7F4] py-20 text-[#1A365D] sm:py-24 lg:py-32"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Architectural background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#1A365D 1px, transparent 1px), linear-gradient(90deg, #1A365D 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-32 -z-10 h-96 w-96 rounded-full bg-[#00A3C4]/[0.06] blur-3xl"
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        {/* Header */}
        <header className="mb-12 grid gap-8 sm:mb-16 lg:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="h-px w-10 bg-[#00A3C4] sm:w-14" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#007F9C] sm:text-xs sm:tracking-[0.3em]">
                Designed Around You
              </span>
            </div>

            <h1
              id="services-heading"
              className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Interior Design
              <span className="mt-2 block font-medium italic text-[#008EAC]">
                Services in Coimbatore
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-[#4B5868] sm:text-base sm:leading-8 lg:text-lg">
              Discover thoughtfully planned interior design solutions
              for homes, villas and offices. Astra Interior brings
              together space planning, furniture, lighting and finishing
              to create spaces that reflect your needs and style.
            </p>
          </div>

          <div className="border-l-2 border-[#00A3C4] py-2 pl-5 sm:pl-7 lg:ml-auto lg:max-w-[430px]">
            <p className="text-base font-semibold leading-7 text-[#34465B] sm:text-lg sm:leading-8">
              Every detail has a purpose. Every space should feel
              right for the people who use it.
            </p>

            <p className="mt-3 text-sm font-medium leading-7 text-[#596777]">
              Based in Hudco Colony, Vellakinar Village, Coimbatore, Tamil Nadu. Contact us
              to discuss your property, project requirements and
              service availability.
            </p>

            <button
              type="button"
              onClick={() => handleWhatsApp()}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#007F9C] transition-colors duration-300 hover:text-[#1A365D]"
            >
              Discuss your project
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </header>

        {/* Services heading */}
        <div className="mb-7 flex flex-col gap-3 border-b border-[#D9DDDC] pb-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#007F9C] sm:text-xs">
              What We Do
            </span>

            <h2
              className="mt-2 text-2xl font-semibold tracking-tight text-[#1A365D] sm:text-3xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Interior Solutions
            </h2>
          </div>

          <p className="max-w-md text-sm font-medium leading-6 text-[#596777]">
            Explore our core services and find the right starting point
            for your interior project.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex min-w-0 flex-col overflow-hidden border border-[#DADDDC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3C4] hover:shadow-[0_22px_55px_rgba(26,54,93,0.12)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E9E5] sm:aspect-[4/4.5]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1928]/75 via-[#0B1928]/10 to-transparent transition-opacity duration-300 group-hover:from-[#0B1928]/65" />

                  {/* Number */}
                  <span className="absolute bottom-5 left-5 text-3xl font-semibold tracking-tight text-white/90 sm:bottom-6 sm:left-6">
                    {service.id}
                  </span>

                  {/* Service icon */}
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/50 bg-white/95 text-[#1A365D] transition-all duration-300 group-hover:border-[#00A3C4] group-hover:bg-[#00A3C4] group-hover:text-white sm:right-5 sm:top-5">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                  <h3
                    className="text-xl font-semibold leading-snug tracking-tight text-[#1A365D] transition-colors duration-300 group-hover:text-[#007F9C] sm:text-[22px]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#505D6C]">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm font-semibold leading-5 text-[#34465B]"
                      >
                        <Check
                          size={16}
                          strokeWidth={2.4}
                          className="mt-0.5 shrink-0 text-[#008EAC]"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card action */}
                  <div className="mt-7 border-t border-[#E4E7E6] pt-5">
                    <button
                      type="button"
                      onClick={() => handleWhatsApp(service.title)}
                      className="group/action flex w-full items-center justify-between gap-3 text-left"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#007F9C] transition-colors duration-300 group-hover/action:text-[#1A365D]">
                        Enquire Now
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center border border-[#DADDDC] text-[#1A365D] transition-all duration-300 group-hover/action:border-[#00A3C4] group-hover/action:bg-[#00A3C4] group-hover/action:text-white">
                        <ArrowUpRight
                          size={17}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5"
                        />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bottom hover line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#00A3C4] transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>

        {/* Additional services */}
        <div className="mt-16 border-y border-[#D9DDDC] py-9 sm:mt-20 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#007F9C] sm:text-xs">
                More Possibilities
              </span>

              <h2
                className="mt-3 text-2xl font-semibold leading-snug text-[#1A365D] sm:text-3xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                More ways to improve your space.
              </h2>

              <p className="mt-3 max-w-lg text-sm font-medium leading-7 text-[#505D6C]">
                Have a specific requirement? Contact our team to discuss
                the work you have in mind and confirm the services
                available for your property.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {additionalServices.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleWhatsApp(service)}
                  className="group/service flex min-h-[64px] min-w-0 items-center gap-3 border border-[#DADDDC] bg-white px-4 py-4 text-left transition-all duration-300 hover:border-[#00A3C4] hover:bg-[#F0FAFB] hover:shadow-[0_8px_24px_rgba(26,54,93,0.06)] sm:px-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1A365D] text-[#5ED7E8] transition-colors duration-300 group-hover/service:bg-[#00A3C4] group-hover/service:text-white">
                    <Check size={16} strokeWidth={2.3} />
                  </span>

                  <span className="min-w-0 flex-1 text-sm font-bold leading-6 text-[#1A365D] transition-colors duration-300 group-hover/service:text-[#007F9C]">
                    {service}
                  </span>

                  <MoveUpRight
                    size={16}
                    className="shrink-0 text-[#596777] transition-all duration-300 group-hover/service:-translate-y-0.5 group-hover/service:translate-x-0.5 group-hover/service:text-[#007F9C]"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SEO content */}
        <div className="grid gap-6 py-12 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <MapPin
                size={17}
                className="text-[#008EAC]"
                aria-hidden="true"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#007F9C] sm:text-xs">
                Serving Coimbatore, Tamil Nadu
              </span>
            </div>

            <h2
              className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1A365D] sm:text-4xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Looking for interior designers in Coimbatore?
            </h2>
          </div>

          <p className="text-sm font-medium leading-7 text-[#505D6C] sm:text-base sm:leading-8">
            Astra Interior offers interior design services for
            residential and commercial spaces in Coimbatore, Tamil
            Nadu. Discuss home interior design, villa interiors,
            office interior design, custom furniture, lighting,
            electrical work, painting, sofa redesign and renovation
            requirements with our team. We can review your project
            details and confirm the scope and service availability
            during consultation.
          </p>
        </div>

        {/* Final CTA */}
        <div className="relative isolate overflow-hidden bg-[#1A365D] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 -z-10 select-none text-[180px] font-bold leading-none tracking-[-0.1em] text-white/[0.04] sm:-right-4 sm:-top-20 sm:text-[260px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            A
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#5ED7E8] sm:text-xs">
             
              Your Vision, Our Design
            </div>

            <h2
              className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Let's transform your
              <span className="mt-2 block font-medium italic text-[#5ED7E8]">
                home and workspace.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-200 sm:text-base sm:leading-8">
              Tell us about your interior design plans. Whether you
              are updating a home, planning a villa or improving an
              office, start a conversation with Astra Interior.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => handleWhatsApp()}
                className="group/consult relative inline-flex min-h-[54px] items-center justify-center gap-3 overflow-hidden bg-white px-7 py-4 text-sm font-bold text-[#1A365D] transition-colors duration-300 hover:bg-[#00A3C4] hover:text-white sm:px-9"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageSquare size={17} aria-hidden="true" />
                  Start a Consultation
                </span>

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="relative z-10 transition-transform duration-300 group-hover/consult:translate-x-1 group-hover/consult:-translate-y-1"
                />
              </button>

              <button
                type="button"
                onClick={() => navigate("/port")}
                className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/50 px-7 py-4 text-sm font-bold text-white transition-colors duration-300 hover:border-[#5ED7E8] hover:bg-white/10 sm:px-9"
              >
                Explore Portfolio
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-6 text-xs font-medium text-slate-300">
              Astra Interior · RS Puram, Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
