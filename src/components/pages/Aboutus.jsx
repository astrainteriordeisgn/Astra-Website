
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import {
  Compass,
  PenTool,
  ClipboardCheck,
  ArrowUpRight,
  MapPin,
  Layers3,
  MoveRight,
  CheckCircle2,
  MessageCircle,
  Sofa,
  House,
  Building2,
  Lightbulb,
} from "lucide-react";

/* =========================
   SERVICE LOCATIONS
========================= */

const locations = [
  {
    name: "Coimbatore",
    type: "Primary Service Area",
    desc: "Explore thoughtfully planned home interiors, luxury living spaces, custom furniture, and modern office interiors in Coimbatore.",
    keywords: "Interior designers in Coimbatore",
    icon: House,
  },
  {
    name: "Chennai",
    type: "Residential Interiors",
    desc: "Contemporary interior design concepts for apartments, premium homes, and villas, with attention to space and everyday comfort.",
    keywords: "Home interior design in Chennai",
    icon: Building2,
  },
  {
    name: "Madurai",
    type: "Residential Design",
    desc: "Interior concepts that combine contemporary styling, practical layouts, thoughtful lighting, and carefully selected materials.",
    keywords: "Residential interior design in Madurai",
    icon: House,
  },
  {
    name: "Salem",
    type: "Space Planning",
    desc: "Functional interior planning for residential and commercial spaces, with a focus on efficient layouts and timeless finishes.",
    keywords: "Interior design in Salem",
    icon: Layers3,
  },
  {
    name: "Erode",
    type: "Custom Interiors",
    desc: "Personalised interiors and furniture design ideas created around your space, preferences, and functional requirements.",
    keywords: "Interior designers in Erode",
    icon: Sofa,
  },
  {
    name: "Tiruppur",
    type: "Office Interiors",
    desc: "Practical office and commercial interior concepts designed to support productivity, comfort, and a consistent brand identity.",
    keywords: "Office interior design in Tiruppur",
    icon: Building2,
  },
  {
    name: "Pollachi",
    type: "Home & Villa Interiors",
    desc: "Relaxed residential interior concepts that bring together natural textures, comfortable layouts, and elegant detailing.",
    keywords: "Villa interior design in Pollachi",
    icon: House,
  },
];

/* =========================
   DESIGN PROCESS
========================= */

const processSteps = [
  {
    number: "01",
    title: "Discover & Plan",
    text: "We understand your lifestyle, design preferences, budget, space requirements, and project goals before shaping a practical interior design plan.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design & Visualise",
    text: "Explore layouts, colour palettes, material selections, furniture concepts, and 3D visualisations to help you understand your proposed interiors.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Execute & Refine",
    text: "Bring the design to life through coordinated execution, attention to detailing, and quality checks throughout the agreed project scope.",
    icon: ClipboardCheck,
  },
];

/* =========================
   SERVICES
   FIXED: Every service has an icon
========================= */

const services = [
  {
    icon: House,
    title: "Home Interior Design",
    text: "Personalised living rooms, bedrooms, kitchens, and complete home interiors.",
  },
  {
    icon: House,
    title: "Luxury Villa Interiors",
    text: "Refined interior concepts for villas, spacious homes, and premium living.",
  },
  {
    icon: Building2,
    title: "Office Interior Design",
    text: "Functional workspaces designed around comfort, productivity, and brand identity.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture Design",
    text: "Furniture concepts that complement your layout, style, and storage needs.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Electrical",
    text: "Thoughtful lighting plans and electrical coordination for everyday use.",
  },
  {
    icon: Layers3,
    title: "Renovation & Styling",
    text: "Refresh existing spaces with considered finishes, furniture, and design details.",
  },
];

/* =========================
   ABOUT PAGE
========================= */

export default function Aboutus() {
  const [activeLoc, setActiveLoc] = useState(0);
  const navigate = useNavigate();

  const whatsappNumber = "919345445898";

  const openWhatsApp = (
    message = "Hello Astra Interior, I would like to discuss my interior design project."
  ) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* =========================
     SEO + SMO + SMO SCHEMA
  ========================= */

  useEffect(() => {
    document.title =
      "About Astra Interior | Interior Designers in Coimbatore";

    const description =
      "Discover Astra Interior, offering personalised home, villa and office interior design concepts in Coimbatore and selected locations across Tamil Nadu. Discuss your project with our team.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    const upsertMeta = (attribute, key, content) => {
      let element = document.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    upsertMeta("property", "og:title", document.title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Astra Interior",
      description,
      telephone: "+91 93454 45898",
      areaServed: [
        {
          "@type": "City",
          name: "Coimbatore",
        },
        {
          "@type": "State",
          name: "Tamil Nadu",
        },
      ],
      knowsAbout: [
        "Home Interior Design",
        "Luxury Villa Interiors",
        "Office Interior Design",
        "Custom Furniture Design",
        "Lighting Design",
        "Interior Renovation",
      ],
    };

    let schemaScript = document.querySelector(
      'script[data-astra-schema="about"]'
    );

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.dataset.astraSchema = "about";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(structuredData);

    /* =========================
       LENIS SMOOTH SCROLL
    ========================= */

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main
      className="overflow-hidden bg-[#FAF9F6] text-[#1A365D]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="relative px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-16 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -right-28 top-16 h-80 w-80 rounded-full bg-[#00A3C4]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#1A365D]/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#00A3C4]/25 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00A3C4]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A365D]">
                About Astra Interior
              </span>
            </div>

            <h1
              className="mb-7 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[66px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Interior Design in Coimbatore,
              <span className="mt-2 block text-[#00A3C4]">
                Designed Around You.
              </span>
            </h1>

            <p className="mb-5 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Astra Interior creates thoughtful interior design concepts for
              homes, villas, and offices. We bring together functional space
              planning, considered materials, lighting, and personalised
              design details to make your space feel distinctly yours.
            </p>

            <p className="mb-8 max-w-2xl text-sm font-medium leading-7 text-slate-500 sm:text-base">
              From modern home interiors to premium villa and office design,
              our approach starts with understanding how you live and work,
              what you need, and the style you want to achieve.
            </p>

            <div className="mb-9 flex flex-wrap gap-3">
              {[
                "Personalised Design",
                "Functional Layouts",
                "Detail-Focused Planning",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#1A365D] shadow-sm ring-1 ring-slate-200 sm:text-sm"
                >
                  <CheckCircle2
                    size={15}
                    className="text-[#00A3C4]"
                  />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/port")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1A365D] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:shadow-xl"
              >
                Explore Our Portfolio
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Hello Astra Interior, I would like to enquire about your interior design services."
                  )
                }
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1A365D]/20 bg-white px-7 py-4 text-sm font-bold text-[#1A365D] transition-all duration-300 hover:border-[#00A3C4] hover:bg-[#EAF9FC]"
              >
                <MessageCircle size={18} />
                Discuss Your Project
              </button>
            </div>

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Interior design enquiries in Coimbatore and selected areas
              across Tamil Nadu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[600px]"
          >
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[40px] border-r-2 border-t-2 border-[#00A3C4] sm:-right-5 sm:-top-5 sm:h-40 sm:w-40" />

            <div className="relative overflow-hidden rounded-[22px] bg-slate-200 shadow-2xl shadow-[#1A365D]/15">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1400"
                alt="Contemporary luxury home interior design with elegant furniture and carefully selected finishes"
                className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[4/4.3]"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Your Space. Your Story.
                </p>

                <h2
                  className="max-w-md text-2xl font-semibold leading-tight sm:text-3xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Thoughtful design for everyday living.
                </h2>
              </div>
            </div>

            <div className="relative -mt-6 ml-auto mr-4 flex max-w-[300px] items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:mr-8 sm:p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F8FB]">
                <Layers3 className="text-[#00A3C4]" size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#1A365D]">
                  Design With Purpose
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                  Style, comfort, and function in balance.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-3 -z-0 h-28 w-28 rounded-bl-[40px] border-b-2 border-l-2 border-[#00A3C4]/60 sm:-left-6 sm:h-40 sm:w-40" />
          </motion.div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION STRIP
      ========================= */}

      <section className="border-y border-slate-200 bg-white px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-3 md:gap-10">
          {[
            {
              number: "01",
              title: "Designed for Your Lifestyle",
              text: "Interior concepts shaped around your daily routine, preferences, and practical requirements.",
            },
            {
              number: "02",
              title: "Style Meets Function",
              text: "Thoughtful space planning, furniture, lighting, storage, and material coordination.",
            },
            {
              number: "03",
              title: "Clear Design Direction",
              text: "A considered approach that helps align your vision, project scope, and design decisions.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3C4]/40 hover:shadow-lg sm:p-7"
            >
              <span className="mb-5 block text-sm font-extrabold tracking-widest text-[#00A3C4]">
                {item.number}
              </span>

              <h2
                className="mb-3 text-lg font-bold text-[#1A365D] sm:text-xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {item.title}
              </h2>

              <p className="text-sm font-medium leading-7 text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.22em] text-[#00A3C4]">
                What We Design
              </span>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight text-[#1A365D] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Interior Design Services for Homes, Villas & Offices
              </h2>
            </div>

            <p className="max-w-xl text-base font-medium leading-8 text-slate-600">
              Looking for interior designers in Coimbatore? Explore design
              solutions that balance visual appeal, everyday usability, and
              your individual requirements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00A3C4]/50 hover:shadow-xl sm:p-8"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8FB] transition-colors duration-300 group-hover:bg-[#1A365D]">
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      className="text-[#00A3C4] transition-colors group-hover:text-white"
                    />
                  </div>

                  <h3
                    className="mb-3 text-xl font-bold leading-snug text-[#1A365D]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  <p className="mb-6 text-sm font-medium leading-7 text-slate-600">
                    {service.text}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(
                        `Hello Astra Interior, I would like to enquire about ${service.title.toLowerCase()}.`
                      )
                    }
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0089A6] transition-all hover:gap-3"
                  >
                    Enquire About This Service
                    <MoveRight size={17} />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          SERVICE AREAS
      ========================= */}

      <section className="relative overflow-hidden bg-[#0D1B2A] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#00A3C4]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">
              Where We Serve
            </span>

            <h2
              className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Interior Design Across Coimbatore & Tamil Nadu
            </h2>

            <p className="mb-6 text-base font-medium leading-8 text-slate-300">
              Astra Interior welcomes enquiries for residential and commercial
              interior design projects in Coimbatore and selected locations
              across Tamil Nadu. Tell us where your project is located and
              what you would like to create.
            </p>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="mt-1 shrink-0 text-cyan-300" size={21} />

              <div>
                <h3 className="mb-1 font-bold text-white">
                  Based in Coimbatore
                </h3>

                <p className="text-sm font-medium leading-6 text-slate-300">
                  Contact our team to discuss project availability in your
                  location.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  "Hello Astra Interior, I would like to check interior design service availability in my city."
                )
              }
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#00A3C4] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#1A365D]"
            >
              Check Service Availability
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {locations.map((loc, index) => {
              const Icon = loc.icon;
              const isActive = activeLoc === index;

              return (
                <motion.button
                  key={loc.name}
                  type="button"
                  onMouseEnter={() => setActiveLoc(index)}
                  onFocus={() => setActiveLoc(index)}
                  onClick={() => setActiveLoc(index)}
                  whileHover={{ y: -3 }}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-[#00A3C4] bg-white text-[#1A365D] shadow-xl shadow-black/20"
                      : "border-white/10 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-[#E5F8FC] text-[#0089A6]"
                          : "bg-white/10 text-cyan-300"
                      }`}
                    >
                      <Icon size={22} />
                    </span>

                    <ArrowUpRight
                      size={18}
                      className={
                        isActive ? "text-[#00A3C4]" : "text-slate-400"
                      }
                    />
                  </div>

                  <h3 className="mb-1 text-xl font-bold">{loc.name}</h3>

                  <p
                    className={`text-xs font-bold ${
                      isActive ? "text-[#0089A6]" : "text-cyan-300"
                    }`}
                  >
                    {loc.type}
                  </p>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        key={loc.name}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 overflow-hidden text-sm font-medium leading-6 text-slate-600"
                      >
                        {loc.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          DESIGN PROCESS
      ========================= */}

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.22em] text-[#00A3C4]">
              Our Approach
            </span>

            <h2
              className="mb-5 text-3xl font-semibold leading-tight text-[#1A365D] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              From Your Vision to a Thoughtful Interior
            </h2>

            <p className="text-base font-medium leading-8 text-slate-600">
              A considered interior design process helps turn ideas into a
              practical plan, from the first conversation through design
              development and project execution.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A3C4]/50 hover:shadow-xl sm:p-9"
                >
                  <span className="absolute -right-2 -top-8 text-8xl font-black text-slate-100">
                    {step.number}
                  </span>

                  <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A365D] text-white">
                    <Icon size={25} />
                  </div>

                  <h3
                    className="relative mb-4 text-2xl font-bold text-[#1A365D]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  <p className="relative text-sm font-medium leading-7 text-slate-600 sm:text-base">
                    {step.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          DESIGN PHILOSOPHY
      ========================= */}

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            glareEnable={false}
            className="relative overflow-hidden rounded-[28px] bg-[#1A365D] p-8 text-white sm:p-12 lg:p-16"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <span className="mb-5 block text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                  Our Design Philosophy
                </span>

                <h2
                  className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Beautiful Spaces Should Work Beautifully.
                </h2>

                <p className="max-w-2xl text-base font-medium leading-8 text-slate-200">
                  Great interior design is about more than appearances. It
                  considers circulation, lighting, storage, materials,
                  furniture, maintenance, and the way people use a space every
                  day. Our goal is to help you make informed design choices
                  that support both comfort and style.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Space planning",
                  "Material coordination",
                  "Lighting concepts",
                  "Furniture detailing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <CheckCircle2
                      className="shrink-0 text-cyan-300"
                      size={20}
                    />

                    <span className="text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>
      </section>

      {/* =========================
          SEO CONTENT
      ========================= */}

      <section className="border-t border-slate-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.22em] text-[#00A3C4]">
            Astra Interior
          </span>

          <h2
            className="mb-6 text-3xl font-semibold leading-tight text-[#1A365D] sm:text-4xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Looking for Interior Designers in Coimbatore?
          </h2>

          <div className="space-y-5 text-base font-medium leading-8 text-slate-600">
            <p>
              Choosing the right interior designer is an important step in
              creating a comfortable home or productive workplace. Astra
              Interior helps clients explore interior design concepts based on
              their space, lifestyle, design preferences, and project
              requirements. If you are searching for{" "}
              <strong className="font-bold text-[#1A365D]">
                interior designers in Coimbatore
              </strong>
              , start by discussing your ideas, preferred style, budget, and
              project timeline with our team.
            </p>

            <p>
              Our design scope can include{" "}
              <strong className="font-bold text-[#1A365D]">
                home interior design, luxury villa interiors, living room
                design, bedroom interiors, kitchen planning, custom furniture,
                lighting concepts, and office interior design
              </strong>
              . The right combination of layout, finishes, furniture, and
              lighting can help a space feel cohesive while meeting everyday
              functional needs.
            </p>

            <p>
              We also welcome enquiries from selected locations across Tamil
              Nadu, including Chennai, Madurai, Salem, Erode, Tiruppur, and
              Pollachi. Service availability depends on the project location
              and scope, so contact Astra Interior to discuss your requirements
              before planning your project.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Interior Designers in Coimbatore",
              "Home Interior Design",
              "Luxury Villa Interiors",
              "Office Interior Design",
              "Custom Furniture Design",
              "Interior Design Tamil Nadu",
            ].map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-slate-200 bg-[#FAF9F6] px-4 py-2 text-xs font-semibold text-slate-600 sm:text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="relative overflow-hidden bg-[#EAF8FB] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#00A3C4]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-5 block text-xs font-extrabold uppercase tracking-[0.22em] text-[#0089A6]">
            Start Your Project
          </span>

          <h2
            className="mb-6 text-3xl font-semibold leading-tight text-[#1A365D] sm:text-4xl lg:text-6xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Let's Design a Space That Feels Like You.
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            Planning a new home, upgrading your villa, or refreshing your
            office? Share your requirements with Astra Interior and start a
            conversation about your design project.
          </p>

          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hello Astra Interior, I would like to book an interior design consultation. Please share the next steps."
              )
            }
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1A365D] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:shadow-xl sm:px-10 sm:py-5"
          >
            <MessageCircle size={19} />
            Book a Consultation
            <MoveRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <p className="mt-5 text-sm font-semibold text-slate-500">
            Contact Astra Interior: +91 93454 45898
          </p>
        </div>
      </section>
    </main>
  );
}
