
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Filter,
  MoveUpRight,
 
  MessageCircle,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

const categories = [
  "All Collections",
  "Residential",
  "Commercial",
  "Bespoke Furniture",
  "Restoration",
];

const works = [
  {
    id: "01",
    title: "The Obsidian Penthouse",
    category: "Residential",
    type: "Luxury Residential",
    location: "Coimbatore, Tamil Nadu",
    description:
      "A refined residential concept combining contemporary finishes, considered lighting and elegant furniture.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    alt: "Contemporary luxury home interior with designer furniture and layered lighting",
    size: "large",
  },
  {
    id: "02",
    title: "Walnut & Brass Lounge",
    category: "Bespoke Furniture",
    type: "Custom Furniture",
    location: "Interior Design Collection",
    description:
      "A warm material palette with walnut tones, sophisticated detailing and carefully selected furnishings.",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary interior furniture with warm wood tones and premium detailing",
    size: "small",
  },
  {
    id: "03",
    title: "Aura Dining Hall",
    category: "Commercial",
    type: "Commercial Interiors",
    location: "Interior Design Collection",
    description:
      "An inviting dining environment with a balanced layout, contemporary furniture and a welcoming atmosphere.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary dining and hospitality interior design inspiration",
    size: "medium",
  },
  {
    id: "04",
    title: "Minimalist Loft 402",
    category: "Residential",
    type: "Modern Home Interiors",
    location: "Interior Design Collection",
    description:
      "A minimalist approach to residential interiors, with clean lines, functional furniture and an uncluttered feel.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=85",
    alt: "Minimalist residential interior with neutral colours and modern furniture",
    size: "medium",
  },
  {
    id: "05",
    title: "Heritage Villa Revamp",
    category: "Restoration",
    type: "Villa Renovation",
    location: "Interior Design Collection",
    description:
      "A restoration-inspired concept balancing timeless architectural character with modern living requirements.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    alt: "Elegant villa architecture and landscaped residential setting",
    size: "large",
  },
  {
    id: "06",
    title: "Velvet Sky Lounge",
    category: "Bespoke Furniture",
    type: "Furniture & Styling",
    location: "Interior Design Collection",
    description:
      "A sophisticated furniture concept featuring a comfortable layout, carefully coordinated textures and finishes.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern furniture arrangement with coordinated colours and interior styling",
    size: "small",
  },
];

const brandNavy = "#1A365D";
const brandTeal = "#00A3C4";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  // SEO metadata and structured data
  useEffect(() => {
    const pageTitle =
      "Interior Design Portfolio in Coimbatore | Astra Interior";

    const pageDescription =
      "Explore interior design ideas for homes, villas, commercial spaces and bespoke furniture. Discover modern interior design inspiration and renovation concepts with Astra Interior in Coimbatore, Tamil Nadu.";

    document.title = pageTitle;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("name", "description", pageDescription);

    setMeta(
      "name",
      "keywords",
      "interior designers in Coimbatore, interior design Coimbatore, home interior design, villa interior design, residential interiors, commercial interior design, custom furniture design, interior renovation, modern home interiors, Astra Interior"
    );

    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", pageDescription);
    setMeta("property", "og:type", "website");

    // Structured data for the portfolio page
    const schemaId = "astra-portfolio-schema";
    let schemaElement = document.getElementById(schemaId);

    if (!schemaElement) {
      schemaElement = document.createElement("script");
      schemaElement.id = schemaId;
      schemaElement.type = "application/ld+json";
      document.head.appendChild(schemaElement);
    }

    schemaElement.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: pageTitle,
      description: pageDescription,
      about: {
        "@type": "Service",
        name: "Interior Design Services",
        serviceType: [
          "Residential Interior Design",
          "Villa Interior Design",
          "Commercial Interior Design",
          "Custom Furniture Design",
          "Interior Renovation",
        ],
        areaServed: {
          "@type": "City",
          name: "Coimbatore",
          containedInPlace: {
            "@type": "State",
            name: "Tamil Nadu",
          },
        },
        provider: {
          "@type": "LocalBusiness",
          name: "Astra Interior",
          url: "https://www.astrainterior.com/",
        },
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: works.map((work, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: work.title,
          description: work.description,
          image: work.image,
        })),
      },
    });

    return () => {
      schemaElement?.remove();
    };
  }, []);

  // Smooth scrolling with proper animation-frame cleanup
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      "Hello Astra Interior, I would like to discuss an interior design project. Please share more details."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const filteredWorks =
    activeCategory === "All Collections"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#F8F8F6] text-[#202936]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* HERO SECTION */}
      <section className="relative px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-36 lg:px-16 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-20 h-[350px] w-[350px] rounded-full blur-[100px]"
          style={{ backgroundColor: `${brandTeal}12` }}
        />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ backgroundColor: brandTeal }}
                />

                <span
                  className="text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs"
                  style={{ color: brandNavy }}
                >
                  Astra Interior / Our Work
                </span>
              </div>

              <h1
                className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[90px]"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  color: brandNavy,
                }}
              >
                Spaces with
                <span
                  className="block font-medium italic"
                  style={{ color: brandTeal }}
                >
                  purpose.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#475569] sm:text-lg sm:leading-9">
                Explore interior design concepts for contemporary homes,
                elegant villas, commercial spaces and custom furniture.
                Discover ideas that balance aesthetics, functionality and
                everyday comfort.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/services")}
                  className="group inline-flex min-h-[50px] items-center gap-3 rounded-md px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: brandNavy }}
                >
                  Explore Our Services
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex min-h-[50px] items-center gap-2 rounded-md border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#334155] transition-all duration-300 hover:border-[#00A3C4] hover:text-[#0089A6]"
                >
                  <MessageCircle size={17} />
                  Discuss a Project
                </button>
              </div>
            </div>

            <div className="relative lg:justify-self-end lg:pb-3">
              <div className="border-l-2 py-2 pl-5 sm:pl-7" style={{ borderColor: brandTeal }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#475569]">
                  Thoughtful design. Timeless spaces.
                </p>

                <p className="mt-4 max-w-md text-lg font-medium leading-8 text-[#334155] sm:text-xl sm:leading-9">
                  Every space begins with an idea. Explore our collection
                  for inspiration for your next interior project in
                  Coimbatore and beyond.
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3 pl-1">
               
                <span className="text-sm font-semibold text-[#475569]">
                  Residential · Commercial · Custom Interiors
                </span>
              </div>
            </div>
          </div>

          {/* HERO IMAGE STRIP */}
          <div className="relative mt-12 overflow-hidden rounded-xl sm:mt-16">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
              alt="Modern home interior design with contemporary furniture and refined finishes"
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#142C4B]/80 via-[#142C4B]/25 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-xs">
                Interior Design Inspiration
              </span>

              <h2
                className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Designed around
                <br className="hidden sm:block" /> the way you live.
              </h2>

              <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-white/95 sm:text-base sm:leading-8">
                Explore layouts, textures, furniture and lighting ideas
                for thoughtfully designed interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO COLLECTION */}
      <section
        id="portfolio-collections"
        className="px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
        aria-labelledby="portfolio-heading"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-5 border-b border-[#DDE2E6] pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-[3px] w-7 rounded-full"
                  style={{ backgroundColor: brandTeal }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569]">
                  Explore the Collection
                </span>
              </div>

              <h2
                id="portfolio-heading"
                className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  color: brandNavy,
                }}
              >
                Selected projects
                <span className="text-[#00A3C4]">.</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-[#475569] sm:text-base sm:leading-8">
                Browse residential interiors, commercial concepts,
                bespoke furniture and restoration inspiration.
              </p>
            </div>

            <span className="text-sm font-semibold text-[#475569]">
              {String(filteredWorks.length).padStart(2, "0")} collections
            </span>
          </div>

          {/* FILTER BAR */}
          <div className="py-7">
            <div className="mb-4 flex items-center gap-2 text-[#475569]">
              <Filter size={16} style={{ color: brandTeal }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.17em]">
                Filter projects
              </span>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter portfolio projects by category"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-3 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                      isActive
                        ? "border-[#1A365D] bg-[#1A365D] text-white shadow-md"
                        : "border-[#D8DEE5] bg-white text-[#475569] hover:border-[#00A3C4] hover:text-[#0089A6]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
            {filteredWorks.map((work, index) => {
              const wide = work.size === "large";
              const span = wide
                ? "lg:col-span-7"
                : work.size === "medium"
                ? "lg:col-span-5"
                : "lg:col-span-5";

              return (
                <article
                  key={work.id}
                  className={`group min-w-0 ${span} ${
                    index % 2 === 1 ? "lg:mt-14" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => navigate("/services")}
                    aria-label={`Explore interior design services inspired by ${work.title}`}
                    className="block w-full text-left"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-[#E7E9E8]">
                      <div
                        className={`relative overflow-hidden ${
                          wide
                            ? "aspect-[4/3] sm:aspect-[5/4]"
                            : "aspect-[4/3]"
                        }`}
                      >
                        <img
                          src={work.image}
                          alt={work.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#102947]/65 via-transparent to-[#102947]/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-[#102947]/45 px-3 py-2 text-[10px] font-bold tracking-[0.14em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                          PROJECT {work.id}
                        </span>

                        <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A365D] sm:bottom-5 sm:left-5">
                          {work.category}
                        </span>

                        <span
                          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1A365D] shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#00A3C4] group-hover:text-white sm:bottom-5 sm:right-5"
                        >
                          <MoveUpRight size={19} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#DDE2E6] pb-5">
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0089A6] sm:text-[11px]">
                          {work.type}
                        </p>

                        <h3
                          className="mt-2 text-xl font-semibold leading-snug tracking-[-0.035em] text-[#1A365D] transition-colors duration-300 group-hover:text-[#0089A6] sm:text-2xl"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {work.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-7 text-[#475569]">
                          {work.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={21}
                        className="mt-1 shrink-0 text-[#64748B] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00A3C4]"
                      />
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          {filteredWorks.length === 0 && (
            <p className="py-16 text-center text-base font-medium text-[#475569]">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="border-y border-[#DCE3E8] bg-[#EDF3F6] px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0089A6]">
              Astra Interior · Coimbatore
            </span>

            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#1A365D] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Interior design for modern living.
            </h2>

            <p className="mt-4 text-base font-medium leading-8 text-[#475569]">
              Thoughtful spaces begin with the right planning, materials
              and design decisions.
            </p>
          </div>

          <div>
            <p className="text-base font-medium leading-8 text-[#334155]">
              Looking for interior designers in Coimbatore? Astra
              Interior helps you explore design possibilities for homes,
              villas and commercial spaces. From modern home interior
              design to functional layouts and carefully coordinated
              finishes, each project starts with understanding the space
              and the client's requirements.
            </p>

            <p className="mt-4 text-base font-medium leading-8 text-[#334155]">
              Whether you are planning a new home, refreshing a villa,
              improving a workspace or considering custom furniture,
              thoughtful interior planning can help balance aesthetics,
              comfort and everyday functionality. Explore our services
              to discuss the requirements, design direction and scope
              of your project.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Home interior design",
                "Villa interior design",
                "Residential interior design",
                "Commercial interior design",
                "Custom furniture design",
                "Interior renovation and restoration",
                "Lighting and electrical work",
                "Painting and finishing",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A3C4]" />

                  <span className="text-sm font-semibold leading-7 text-[#334155]">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="mt-7 inline-flex min-h-[50px] items-center gap-3 rounded-md bg-[#1A365D] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00A3C4] hover:shadow-lg"
            >
              Discover Our Services
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* WHATSAPP ENQUIRY CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-2xl bg-[#1A365D] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-white/10"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                Start Your Design Journey
              </span>

              <h2
                className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Have a space in mind?
                <span className="mt-1 block font-medium italic text-cyan-200">
                  Let's design it together.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/90 sm:text-lg">
                Tell us about your home, villa or commercial interior
                project. Connect with Astra Interior to discuss your
                ideas and requirements.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="group inline-flex min-h-[56px] w-full items-center justify-between gap-5 rounded-lg bg-white px-6 py-4 text-sm font-bold text-[#1A365D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:text-white sm:w-auto sm:min-w-[245px]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={19} />
                Enquire on WhatsApp
              </span>

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
