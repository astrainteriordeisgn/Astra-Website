
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
 
} from "lucide-react";
import Logo from "../assests/astralogo.webp";



const footerLinks = [
  { name: "About Astra", path: "/about" },
  { name: "Our Portfolio", path: "/port" },
  { name: "Interior Design Services", path: "/services" },
  { name: "Design Journal", path: "/blog" },
  { name: "Contact Our Studio", path: "/contactus" },
];

const services = [
  "Home Interior Design",
  "Villa Interior Design",
  "Commercial Interiors",
  "Custom Furniture Design",
  "Lighting & Finishing",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919345445898";

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      "Hello Astra Interior, I would like to enquire about interior design services in Coimbatore."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer
      className="relative overflow-hidden bg-[#0B1728] text-white"
      aria-labelledby="footer-heading"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#00A3C4]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#1A365D]/40 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-7 pt-14 sm:px-8 sm:pt-20 lg:px-16 lg:pt-24">
        {/* FOOTER INTRO */}
        <div className="mb-12 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-8 rounded-full bg-[#00A3C4]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                Astra Interior · Coimbatore
              </span>
            </div>

            <h2
              id="footer-heading"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Thoughtful interiors.
              <span className="block font-medium italic text-[#00A3C4]">
                Spaces made for living.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-300 sm:text-base sm:leading-8">
              Discover interior design services for homes, villas and
              commercial spaces in Coimbatore, Tamil Nadu. From furniture
              planning to lighting and finishing, Astra Interior helps
              you explore ideas for your space.
            </p>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppRedirect}
            className="group inline-flex min-h-[54px] w-full items-center justify-between gap-5 rounded-lg bg-[#00A3C4] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1A365D] hover:shadow-xl sm:w-auto sm:min-w-[245px]"
          >
            <span className="flex items-center gap-3">
              <MessageCircle size={19} />
              Discuss Your Project
            </span>

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              to="/"
              aria-label="Astra Interior home page"
              className="inline-flex items-center rounded-md bg-white p-3 transition-opacity hover:opacity-90"
            >
              <img
                src={Logo}
                alt="Astra Interior Design Studio"
                className="h-14 w-auto max-w-[220px] object-contain sm:h-16"
                width="220"
                height="64"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-slate-300 sm:text-base sm:leading-8">
              We bring together style, comfort and functionality to help
              create interiors that reflect the way you live and work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/astra_.interior/",
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61562835308067",
                  label: "Facebook",
                },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Astra Interior on ${social.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3C4] hover:bg-[#00A3C4] hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
             

              <p className="text-xs font-semibold leading-6 text-slate-300 sm:text-sm">
                Interior design ideas, considered materials and
                thoughtful spaces for everyday living.
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-3">
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Explore Astra
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
              Discover our studio and design services.
            </p>

            <nav aria-label="Footer navigation" className="mt-6">
              <ul className="space-y-3">
                {footerLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group flex min-h-[36px] items-center gap-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-200"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A3C4] transition-transform duration-300 group-hover:scale-125" />

                      <span>{item.name}</span>

                      <ArrowUpRight
                        size={14}
                        className="ml-auto shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Our Services
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
              Interior solutions for your space.
            </p>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="inline-flex min-h-[32px] items-center text-sm font-medium leading-6 text-slate-300 transition-colors duration-300 hover:text-cyan-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Get in Touch
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
              Have an interior project in mind? Let's talk.
            </p>

            <address className="mt-6 space-y-5 not-italic">
              <a
                href="tel:+919345445898"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 transition-colors group-hover:bg-[#00A3C4] group-hover:text-white">
                  <Phone size={17} />
                </span>

                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-200">
                    +91 93454 45898
                  </span>
                </span>
              </a>

              <a
                href="mailto:astrainterior83@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 transition-colors group-hover:bg-[#00A3C4] group-hover:text-white">
                  <Mail size={17} />
                </span>

                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Email
                  </span>

                  <span className="mt-1 block break-words text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-200">
                    astrainterior83@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200">
                  <MapPin size={17} />
                </span>

                <div className="min-w-0 pt-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Location
                  </span>

                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-200">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </address>

            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="group mt-7 flex min-h-[48px] w-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#00A3C4] hover:bg-[#00A3C4]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </span>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* SEO SUPPORTING TEXT */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
          <p className="text-sm font-semibold leading-7 text-slate-200">
            Astra Interior provides interior design services in Coimbatore,
            Tamil Nadu, including home interiors, villa interiors,
            commercial interior design, furniture planning, lighting,
            painting and finishing.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold text-slate-300">
                © {currentYear} Astra Interior. All rights reserved.
              </p>

              <p className="mt-2 text-xs font-medium leading-6 text-slate-400">
                Interior design studio in Coimbatore, Tamil Nadu.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-end">
              <Link
                to="/contactus"
                className="text-xs font-semibold text-slate-300 transition-colors hover:text-cyan-200"
              >
                Privacy
              </Link>

              <span className="h-1 w-1 rounded-full bg-slate-600" />

              <Link
                to="/contactus"
                className="text-xs font-semibold text-slate-300 transition-colors hover:text-cyan-200"
              >
                Terms
              </Link>

              <span className="h-1 w-1 rounded-full bg-slate-600" />

              <a
                href="#top"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-cyan-200"
              >
                Back to Top
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
