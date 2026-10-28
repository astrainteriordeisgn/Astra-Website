
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowUpRight,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Home,
  
} from "lucide-react";
import { motion } from "framer-motion";



const CONTACT_DETAILS = {
  email: "astrainterior83@gmail.com",
  phone: "+91 93454 45898",
  whatsapp: "919345445898",
  location: "RS Puram, Coimbatore, Tamil Nadu, India",
};

const projectTypes = [
  "Home Interior Design",
  "Villa Interior Design",
  "Residential Renovation",
  "Commercial Interior Design",
  "Custom Furniture",
  "Painting & Electrical Work",
  "Full Interior Project",
  "Other",
];

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // SEO metadata
  useEffect(() => {
    const previousTitle = document.title;
    const pageTitle =
      "Contact Astra Interior | Interior Designers in Coimbatore";

    const pageDescription =
      "Contact Astra Interior in Coimbatore, Tamil Nadu, for home interior design, villa interiors, commercial interiors, custom furniture, renovation, lighting and finishing services. Discuss your interior project with our team.";

    document.title = pageTitle;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      const created = !element;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);

      return { element, created };
    };

    const metaItems = [
      setMeta("name", "description", pageDescription),
      setMeta("property", "og:title", pageTitle),
      setMeta("property", "og:description", pageDescription),
      setMeta("property", "og:type", "website"),
      setMeta("name", "robots", "index,follow"),
    ];

    // Local business structured data
    // Replace the URL with your actual production domain.
    const schemaId = "astra-interior-contact-schema";
    let schema = document.getElementById(schemaId);
    const createdSchema = !schema;

    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "InteriorDesign",
      name: "Astra Interior",
      email: CONTACT_DETAILS.email,
      telephone: CONTACT_DETAILS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "RS Puram",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Coimbatore",
      },
      description: pageDescription,
      knowsAbout: [
        "Home Interior Design",
        "Villa Interior Design",
        "Commercial Interior Design",
        "Custom Furniture Design",
        "Interior Renovation",
        "Lighting and Finishing",
      ],
    });

    return () => {
      document.title = previousTitle;

      metaItems.forEach(({ element, created }) => {
        if (created) {
          element.remove();
        }
      });

      if (createdSchema) {
        schema.remove();
      }
    };
  }, []);

  // Web3Forms submission
  const onSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setResult("Sending your enquiry...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "ebb6356a-ccd3-4584-9c7a-98cec10bbc98"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Your enquiry has been sent successfully.");
        form.reset();

        window.setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      } else {
        setResult(
          data.message || "Unable to send your enquiry. Please try again."
        );
      }
    } catch {
      setResult(
        "Connection error. Please check your internet and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Astra Interior, I would like to discuss an interior design project in Coimbatore."
    );

    window.open(
      `https://wa.me/${CONTACT_DETAILS.whatsapp}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main
      ref={containerRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#202936]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-[#00A3C4]/[0.07] blur-3xl" />

        <div className="absolute -left-32 top-[650px] h-80 w-80 rounded-full bg-[#1A365D]/[0.05] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1A365D 1px, transparent 1px), linear-gradient(90deg, #1A365D 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-36 lg:px-16 lg:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#00A3C4]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1A365D] sm:text-xs">
                  Contact Astra Interior
                </span>
              </div>

              <h1
                className="text-5xl font-semibold leading-[1.08] tracking-[-0.06em] text-[#1A365D] sm:text-6xl md:text-7xl lg:text-[86px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Let's create
                <span className="mt-1 block font-medium italic text-[#00A3C4]">
                  your space.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#475569] sm:text-lg sm:leading-9">
                Planning a new home, renovating a villa or redesigning
                your workspace? Connect with Astra Interior to discuss
                your ideas, requirements and interior design goals in
                Coimbatore, Tamil Nadu.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group inline-flex min-h-[50px] items-center gap-3 rounded-lg bg-[#1A365D] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <a
                  href="#contact-form"
                  className="inline-flex min-h-[50px] items-center gap-2 rounded-lg border border-[#D5DDE6] bg-white px-5 py-3 text-sm font-bold text-[#1A365D] transition-all duration-300 hover:border-[#00A3C4] hover:text-[#0089A6]"
                >
                  Send an Enquiry
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative lg:justify-self-end"
            >
              <div className="rounded-2xl border border-[#DCE4EA] bg-white/90 p-6 shadow-[0_24px_80px_-35px_rgba(26,54,93,0.25)] sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#0089A6]">
                
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#0089A6]">
                  Your Design Journey
                </p>

                <h2
                  className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.035em] text-[#1A365D] sm:text-3xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Good spaces start with a conversation.
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-[#475569] sm:text-base sm:leading-8">
                  Share your ideas, preferred style and project
                  requirements. We will use your enquiry to understand
                  the next steps for your interior project.
                </p>

                <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#00A3C4]"
                    />

                    <span className="text-sm font-semibold text-[#334155]">
                      Residential and commercial projects
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#00A3C4]"
                    />

                    <span className="text-sm font-semibold text-[#334155]">
                      Interior design and renovation enquiries
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + CONTACT DETAILS */}
      <section
        id="contact-form"
        className="relative px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1440px] items-start gap-7 lg:grid-cols-12 lg:gap-10">
          {/* CONTACT FORM */}
          <div className="overflow-hidden rounded-2xl border border-[#E0E6EC] bg-white shadow-[0_24px_80px_-45px_rgba(26,54,93,0.3)] lg:col-span-7">
            <div className="border-b border-[#E5EAF0] px-6 py-7 sm:px-9 sm:py-9 lg:px-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0089A6]">
                Project Enquiry
              </p>

              <h2
                className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1A365D] sm:text-3xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Tell us about your project
              </h2>

              <p className="mt-3 text-sm font-medium leading-7 text-[#475569] sm:text-base">
                Complete the form below with your details and project
                requirements so we can understand what you have in mind.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="space-y-6 px-6 py-7 sm:px-9 sm:py-9 lg:px-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="user_name"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Full Name <span className="text-[#0089A6]">*</span>
                  </label>

                  <input
                    id="user_name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    minLength={2}
                    className="min-h-[52px] w-full rounded-lg border border-[#D8E0E8] bg-[#FBFCFD] px-4 py-3 text-sm font-medium text-[#1A365D] outline-none transition-all placeholder:font-normal placeholder:text-[#94A3B8] focus:border-[#00A3C4] focus:bg-white focus:ring-4 focus:ring-[#00A3C4]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Email Address <span className="text-[#0089A6]">*</span>
                  </label>

                  <input
                    id="user_email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="min-h-[52px] w-full rounded-lg border border-[#D8E0E8] bg-[#FBFCFD] px-4 py-3 text-sm font-medium text-[#1A365D] outline-none transition-all placeholder:font-normal placeholder:text-[#94A3B8] focus:border-[#00A3C4] focus:bg-white focus:ring-4 focus:ring-[#00A3C4]/10"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="user_phone"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="user_phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className="min-h-[52px] w-full rounded-lg border border-[#D8E0E8] bg-[#FBFCFD] px-4 py-3 text-sm font-medium text-[#1A365D] outline-none transition-all placeholder:font-normal placeholder:text-[#94A3B8] focus:border-[#00A3C4] focus:bg-white focus:ring-4 focus:ring-[#00A3C4]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project_type"
                    className="mb-2 block text-sm font-semibold text-[#334155]"
                  >
                    Project Type <span className="text-[#0089A6]">*</span>
                  </label>

                  <select
                    id="project_type"
                    name="project_type"
                    defaultValue=""
                    required
                    className="min-h-[52px] w-full rounded-lg border border-[#D8E0E8] bg-[#FBFCFD] px-4 py-3 text-sm font-medium text-[#334155] outline-none transition-all focus:border-[#00A3C4] focus:bg-white focus:ring-4 focus:ring-[#00A3C4]/10"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="project_location"
                  className="mb-2 block text-sm font-semibold text-[#334155]"
                >
                  Project Location
                </label>

                <input
                  id="project_location"
                  type="text"
                  name="project_location"
                  placeholder="City or area where the project is located"
                  className="min-h-[52px] w-full rounded-lg border border-[#D8E0E8] bg-[#FBFCFD] px-4 py-3 text-sm font-medium text-[#1A365D] outline-none transition-all placeholder:font-normal placeholder:text-[#94A3B8] focus:border-[#00A3C4] focus:bg-white focus:ring-4 focus:ring-[#00A3C4]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="user_vision"
                  className="mb-2 block text-sm font-semibold text-[#334155]"
                >
                  Project Details{" "}
                  <span className="text-[#0089A6]">*</span>
                </label>

                <textarea
                  id="user_vision"
                  name="message"
                  rows={5}
                  minLength={10}
                  required
                  placeholder="Tell us about your space, preferred style, requirements and project goals..."
                  className="w-full resize-y rounded-lg border border-[#D8E0E8] bg-[#FBFCFD] px-4 py-4 text-sm font-medium leading-7 text-[#1A365D] outline-none transition-all placeholder:font-normal placeholder:text-[#94A3B8] focus:border-[#00A3C4] focus:bg-white focus:ring-4 focus:ring-[#00A3C4]/10"
                />
              </div>

              <p className="text-xs font-medium leading-6 text-[#64748B]">
                Fields marked with * are required. Please provide accurate
                contact details so we can respond to your enquiry.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex min-h-[56px] w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#1A365D] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#00A3C4] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending Enquiry..." : "Submit Enquiry"}
                </span>

                <Send
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {result && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2 rounded-lg px-4 py-3 text-sm font-semibold leading-6 ${
                    result.includes("successfully")
                      ? "bg-emerald-50 text-emerald-800"
                      : result.startsWith("Sending")
                      ? "bg-sky-50 text-sky-800"
                      : "bg-rose-50 text-rose-800"
                  }`}
                >
                  {result.includes("successfully") && (
                    <CheckCircle2 size={18} className="mt-1 shrink-0" />
                  )}
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-[#1A365D] p-6 text-white sm:p-8 lg:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-5 h-56 w-56 rounded-full border border-white/10"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                  <Home size={22} />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Visit or Contact Us
                </p>

                <h2
                  className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Astra Interior
                </h2>

                <p className="mt-3 text-sm font-medium leading-7 text-white/85 sm:text-base">
                  Get in touch to discuss home interiors, villa design,
                  commercial interiors, furniture and renovation
                  requirements.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={20}
                      className="mt-1 shrink-0 text-cyan-200"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-cyan-200">
                        Studio Location
                      </p>

                      <address className="mt-2 text-sm font-medium not-italic leading-7 text-white/90">
                        Hudco Colony, Vellakinar Village, Coimbatore
                        <br />
                        Tamil Nadu, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail
                      size={20}
                      className="mt-1 shrink-0 text-cyan-200"
                    />

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-cyan-200">
                        Email
                      </p>

                      <a
                        href={`mailto:${CONTACT_DETAILS.email}`}
                        className="mt-2 block break-words text-sm font-semibold leading-7 text-white/90 transition-colors hover:text-cyan-200"
                      >
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone
                      size={20}
                      className="mt-1 shrink-0 text-cyan-200"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-cyan-200">
                        Phone
                      </p>

                      <a
                        href="tel:+919345445898"
                        className="mt-2 block text-sm font-semibold leading-7 text-white/90 transition-colors hover:text-cyan-200"
                      >
                        {CONTACT_DETAILS.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="mt-8 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#1A365D] transition-all duration-300 hover:bg-cyan-200"
                >
                  <MessageCircle size={18} />
                  Start a WhatsApp Conversation
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>

            {/* HOURS */}
            <div className="rounded-2xl border border-[#E0E6EC] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#0089A6]">
                  <Clock size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">
                    Studio Hours
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#64748B]">
                    Plan your enquiry
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-3 border-b border-[#E5EAF0] pb-4">
                  <span className="text-sm font-semibold text-[#475569]">
                    Monday – Friday
                  </span>

                  <span className="text-sm font-bold text-[#1A365D]">
                    9:00 AM – 6:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[#475569]">
                    Saturday
                  </span>

                  <span className="text-sm font-bold text-[#1A365D]">
                    10:00 AM – 4:00 PM
                  </span>
                </div>
              </div>

              <p className="mt-5 text-xs font-medium leading-6 text-[#64748B]">
                The hours above are the current schedule shown on the
                website. Please confirm availability before visiting.
              </p>
            </div>

            {/* SERVICES */}
            <div className="rounded-2xl border border-[#DDE6EC] bg-[#EDF5F7] p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0089A6]">
                What We Can Help With
              </p>

              <h3
                className="mt-3 text-2xl font-semibold leading-snug text-[#1A365D]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Your space, your requirements.
              </h3>

              <ul className="mt-5 space-y-3">
                {[
                  "Home and villa interiors",
                  "Residential and commercial spaces",
                  "Furniture and sofa redesign",
                  "Lighting, electrical and painting work",
                ].map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-[#0089A6]"
                    />

                    <span className="text-sm font-semibold leading-6 text-[#334155]">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => navigate("/services")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1A365D] transition-colors hover:text-[#0089A6]"
              >
                Explore All Services
                <ArrowRight size={17} />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16">
        <div className="mx-auto max-w-[1440px] rounded-2xl border border-[#DDE6EC] bg-white px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0089A6]">
            Have an Idea?
          </p>

          <h2
            className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[#1A365D] sm:text-4xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Let's talk about your next project.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-8 text-[#475569]">
            Contact Astra Interior in Coimbatore to discuss your home,
            villa or commercial interior design requirements.
          </p>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="mt-7 inline-flex min-h-[52px] items-center gap-3 rounded-lg bg-[#1A365D] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:shadow-lg"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
