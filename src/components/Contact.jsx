
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const brandNavy = "#1A365D";
  const brandTeal = "#00A3C4";

  useEffect(() => {
    document.title =
      "Contact Interior Designers in Coimbatore | Astra Interior";

    const description =
      "Contact Astra Interior in RS Puram, Coimbatore, for home interior design, villa interiors, office interiors, custom furniture, renovation and interior design consultation.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    return () => {
      // Keep document metadata available for the active page.
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "ebb6356a-ccd3-4584-9c7a-98cec10bbc98"
    );
    formData.append("subject", "New Interior Design Inquiry - Astra Interior");
    formData.append("from_name", "Astra Interior Website");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Your inquiry has been sent successfully.");
        form.reset();

        setTimeout(() => {
          navigate("/thank-you");
        }, 1200);
      } else {
        setResult(
          data.message || "Unable to send your inquiry. Please try again."
        );
      }
    } catch (error) {
      setResult(
        "Something went wrong. Please contact us directly by phone or WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-none border-0 border-b border-stone-300 bg-transparent px-0 py-3.5 text-sm font-medium text-[#1A365D] outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-[#00A3C4]";

  const labelClass =
    "mb-1 block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#465569]";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAF9F6] py-20 md:py-28 lg:py-32"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="site-plan-contact"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 180 0 L 0 0 0 180"
              fill="none"
              stroke={brandNavy}
              strokeWidth="0.7"
            />
            <circle
              cx="90"
              cy="90"
              r="32"
              fill="none"
              stroke={brandTeal}
              strokeWidth="0.7"
              strokeDasharray="4 5"
            />
          </pattern>
          <rect
            width="100%"
            height="100%"
            fill="url(#site-plan-contact)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#00A3C4]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#007F9C] sm:text-xs">
              Contact Astra Interior
            </span>
            <span className="h-px w-10 bg-[#00A3C4]" />
          </div>

          <h1
            className="mb-6 text-4xl font-medium leading-[1.12] tracking-tight text-[#1A365D] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Let's Design
            <span className="mt-2 block font-medium italic text-[#008EAC]">
              Your Dream Space
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium leading-7 text-[#4B5563] sm:text-base sm:leading-8 md:text-lg">
            Looking for interior designers in Coimbatore? Tell us about
            your home, villa or office project. Our team will help you
            explore thoughtful designs, practical layouts and interiors
            tailored to your lifestyle.
          </p>

          <p className="mt-4 text-sm font-semibold text-[#1A365D]">
            Residential Interiors · Villa Design · Office Interiors ·
            Renovation
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Contact form */}
          <div className="border border-stone-200 bg-white p-6 shadow-[0_20px_65px_rgba(26,54,93,0.07)] sm:p-9 md:p-12 lg:col-span-7">
            <div className="mb-9">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#008EAC]">
                Start Your Project
              </span>

              <h2
                className="text-2xl font-semibold tracking-tight text-[#1A365D] sm:text-3xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Tell Us What You Have in Mind
              </h2>

              <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-[#596474]">
                Share a few details about your project. We will get in
                touch to understand your requirements and discuss the
                next steps.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              {/* Name and email */}
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="full-name" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    minLength={2}
                    className={inputClass}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email-address" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone and location */}
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone-number" className={labelClass}>
                    Phone Number *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className={inputClass}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="project-location" className={labelClass}>
                    Project Location
                  </label>
                  <input
                    id="project-location"
                    type="text"
                    name="projectLocation"
                    autoComplete="address-level2"
                    className={inputClass}
                    placeholder="E.g. Coimbatore"
                  />
                </div>
              </div>

              {/* Project type */}
              <div>
                <label htmlFor="project-type" className={labelClass}>
                  Type of Project *
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  required
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select your project type
                  </option>
                  <option value="Full Home Interior Design">
                    Full Home Interior Design
                  </option>
                  <option value="Luxury Villa Interiors">
                    Luxury Villa Interiors
                  </option>
                  <option value="Apartment Interiors">
                    Apartment Interiors
                  </option>
                  <option value="Office and Commercial Interiors">
                    Office and Commercial Interiors
                  </option>
                  <option value="Interior Renovation">
                    Interior Renovation
                  </option>
                  <option value="Custom Furniture Design">
                    Custom Furniture Design
                  </option>
                  <option value="Sofa Revamp and Redesign">
                    Sofa Revamp and Redesign
                  </option>
                  <option value="Painting and Electrical Works">
                    Painting and Electrical Works
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="project-budget" className={labelClass}>
                  Estimated Budget
                </label>
                <select
                  id="project-budget"
                  name="projectBudget"
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select your estimated budget
                  </option>
                  <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                  <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
                  <option value="₹10–20 Lakhs">₹10–20 Lakhs</option>
                  <option value="₹20–40 Lakhs">₹20–40 Lakhs</option>
                  <option value="Above ₹40 Lakhs">Above ₹40 Lakhs</option>
                  <option value="Need consultation">Need consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="project-message" className={labelClass}>
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="project-message"
                  name="message"
                  required
                  rows={4}
                  minLength={10}
                  className={`${inputClass} resize-y`}
                  placeholder="Describe your space, design preferences and requirements..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex min-h-[58px] w-full items-center justify-center gap-4 overflow-hidden bg-[#1A365D] px-6 py-4 text-white transition-colors duration-300 hover:bg-[#008EAC] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="relative z-10 text-xs font-bold uppercase tracking-[0.18em] sm:text-sm">
                  {isSubmitting ? "Sending Your Inquiry..." : "Request a Consultation"}
                </span>

                <Send
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <p className="text-center text-xs font-medium leading-6 text-[#596474]">
                Share your requirements with our interior design team
                to get started.
              </p>

              {result && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start justify-center gap-2 text-center text-sm font-semibold leading-6 ${
                    result.toLowerCase().includes("successfully")
                      ? "text-green-700"
                      : "text-[#007F9C]"
                  }`}
                >
                  {result.toLowerCase().includes("successfully") && (
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" />
                  )}
                  <span>{result}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact information */}
          <aside className="space-y-7 lg:col-span-5">
            <div className="group relative overflow-hidden bg-[#1A365D] p-7 text-white sm:p-9 md:p-10">
              <div
                className="pointer-events-none absolute -bottom-16 -right-12 h-56 w-56 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-8 -right-5 h-36 w-36 rounded-full border border-white/10"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#5ED7E8]">
                  Get in Touch
                </span>

                <h2
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  The Astra Interior Studio
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-slate-200">
                  Connect with our Coimbatore interior design studio for
                  residential interiors, villa projects, office spaces,
                  furniture design and renovation enquiries.
                </p>

                <div className="mt-9 space-y-7">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/5">
                      <MapPin
                        className="h-5 w-5 text-[#5ED7E8]"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ED7E8]">
                        Visit Our Studio
                      </p>
                      <address className="text-sm font-medium not-italic leading-6 text-white">
                        Hudco Colony, Vellakinar Village, Coimbatore
                        <br />
                        Tamil Nadu, India
                      </address>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/5">
                      <Mail
                        className="h-5 w-5 text-[#5ED7E8]"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ED7E8]">
                        Email Us
                      </p>
                      <a
                        href="mailto:astrainterior83@gmail.com"
                        className="break-all text-lg font-semibold text-white transition-colors hover:text-[#5ED7E8]"
                      >
                        astrainterior83@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/5">
                      <Phone
                        className="h-5 w-5 text-[#5ED7E8]"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ED7E8]">
                        Call Our Team
                      </p>
                      <a
                        href="tel:+919345445898"
                        className="text-sm font-semibold text-white transition-colors hover:text-[#5ED7E8]"
                      >
                        +91 93454 45898
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919345445898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex min-h-[50px] w-full items-center justify-center gap-3 border border-white/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#5ED7E8] hover:bg-white/10 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Studio availability */}
            <div className="border border-stone-200 bg-white p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#E8F7FA]">
                  <Clock
                    className="h-5 w-5 text-[#008EAC]"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold text-[#1A365D]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    Studio Availability
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#596474]">
                    Plan a conversation with our team
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3">
                  <span className="text-xs font-semibold text-[#465569] sm:text-sm">
                    Monday – Friday
                  </span>
                  <span className="text-xs font-bold text-[#1A365D] sm:text-sm">
                    09:00 – 18:00
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3">
                  <span className="text-xs font-semibold text-[#465569] sm:text-sm">
                    Saturday
                  </span>
                  <span className="text-xs font-bold text-[#1A365D] sm:text-sm">
                    10:00 – 16:00
                  </span>
                </div>

                <p className="pt-1 text-xs font-medium leading-6 text-[#596474]">
                  Contact us to discuss your project requirements and
                  arrange a consultation.
                </p>
              </div>
            </div>

            {/* SEO content block */}
            <div className="border-l-[3px] border-[#00A3C4] bg-[#F1F7F8] p-6 sm:p-7">
              <h3
                className="mb-3 text-lg font-semibold text-[#1A365D]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Interior Design in Coimbatore
              </h3>

              <p className="text-sm font-medium leading-7 text-[#465569]">
                Astra Interior helps homeowners and businesses create
                beautiful, functional spaces with carefully planned
                home interiors, villa interiors, office interior design,
                custom furniture, lighting, painting and renovation
                solutions in Coimbatore, Tamil Nadu.
              </p>

              <a
                href="https://wa.me/919345445898"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#007F9C] transition-colors hover:text-[#1A365D]"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
