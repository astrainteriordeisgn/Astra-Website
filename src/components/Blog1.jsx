
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Home Interior Design",
    eyebrow: "Design Guide",
    title: "How to Plan Your Home Interiors in Coimbatore",
    description:
      "Explore practical home interior design ideas, space planning, furniture selection and finishes to create a comfortable home that suits your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1200",
    alt: "Modern living room with elegant furniture, indoor plants and natural lighting",
    href: "/blog/home-interior-design-coimbatore",
    keywords:
      "home interior design Coimbatore, interior designers in Coimbatore, modern home interiors",
  },
  {
    id: 2,
    category: "Interior Lighting",
    eyebrow: "Lighting Guide",
    title: "Lighting Ideas That Transform Interior Spaces",
    description:
      "Discover how natural light, ambient lighting, task lights and decorative fixtures can improve the comfort and appearance of your home.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200",
    alt: "Contemporary residential interior with layered lighting and refined finishes",
    href: "/blog/interior-lighting-design",
    keywords:
      "interior lighting design, home lighting ideas, residential interior design",
  },
  {
    id: 3,
    category: "Furniture Design",
    eyebrow: "Furniture Guide",
    title: "Modern Furniture and Space-Saving Ideas",
    description:
      "Learn how functional furniture, smart storage and carefully planned layouts can help make small and large homes more organised.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=85&w=1200",
    alt: "Modern home interior with coordinated furniture and thoughtful space planning",
    href: "/blog/modern-furniture-design-ideas",
    keywords:
      "custom furniture design, space-saving furniture, modern home interior ideas",
  },
];

const seoServices = [
  "Home and villa interior design",
  "Residential and commercial interiors",
  "Furniture design and sofa redesign",
  "Electrical and lighting work",
  "Interior painting and finishing",
  "Space planning and material selection",
];

export default function DesignJournal() {
  const navigate = useNavigate();

  return (
    <main
      id="design-journal"
      className="relative isolate overflow-hidden bg-[#F7F7F5] text-[#202020]"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      {/* SUBTLE ARCHITECTURAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,30,30,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,30,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* JOURNAL HEADER */}
      <section className="relative z-10 px-5 pb-10 pt-20 sm:px-8 sm:pb-14 sm:pt-24 lg:px-16 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-end gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-9 shrink-0 rounded-full bg-[#00A3C4]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#374151]">
                  The Design Journal
                </span>
              </div>

              <h1 className="max-w-[850px] text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#171717] sm:text-5xl md:text-6xl lg:text-7xl">
                Ideas for better
                <br />
                <span className="font-medium italic text-[#0089A6]">
                  living spaces.
                </span>
              </h1>
            </div>

            <div className="max-w-[520px] lg:justify-self-end">
              <p className="text-base font-medium leading-8 text-[#374151] sm:text-lg sm:leading-9">
                Explore practical interior design tips, furniture ideas,
                lighting inspiration and space-planning guides from Astra
                Interior. Discover ideas for homes, villas and workspaces
                in Coimbatore and beyond.
              </p>

              <button
                type="button"
                onClick={() => navigate("/services")}
                className="group mt-5 inline-flex min-h-[48px] items-center gap-3 rounded-md border border-[#1A365D] bg-[#1A365D] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A3C4] hover:bg-[#00A3C4] hover:shadow-lg"
              >
                Explore Our Services
                <ArrowUpRight
                  size={17}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#DADAD6] pt-5 sm:mt-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#374151]">
              Interior Design
            </span>

            <span className="h-1 w-1 rounded-full bg-[#00A3C4]" />

            <span className="text-sm font-semibold text-[#374151]">
              Coimbatore, Tamil Nadu
            </span>

            <span className="h-1 w-1 rounded-full bg-[#00A3C4]" />

            <span className="text-sm font-medium text-[#374151]">
              Ideas, Guides & Inspiration
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section
        aria-labelledby="journal-articles-heading"
        className="relative z-10 px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-7 flex flex-col gap-3 border-b border-[#DADAD6] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#475569]">
                From the Journal
              </p>

              <h2
                id="journal-articles-heading"
                className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl"
              >
                Design ideas worth exploring
              </h2>
            </div>

            <p className="max-w-[390px] text-sm font-medium leading-7 text-[#374151] sm:text-base">
              Practical inspiration to help you plan a home that looks good
              and works for everyday living.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group min-w-0 overflow-hidden rounded-xl border border-[#DEDED9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3C4]/50 hover:shadow-xl"
              >
                {/* ARTICLE IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E5DF]">
                  <img
                    src={article.image}
                    alt={article.alt}
                    loading={article.id === 1 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  {/* CATEGORY LABEL */}
                  <span
                    className="absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-24px)] items-center rounded-md bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#111111] shadow-sm sm:left-4 sm:top-4"
                  >
                    {article.category}
                  </span>

                  <button
                    type="button"
                    onClick={() => navigate(article.href)}
                    aria-label={`Read ${article.title}`}
                    className="absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1A365D] text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#00A3C4] sm:bottom-4 sm:right-4"
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>

                {/* ARTICLE DETAILS */}
                <div className="p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-5 shrink-0 rounded-full bg-[#00A3C4]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#475569]">
                      {article.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-[1.4] tracking-[-0.025em] text-[#171717] sm:text-[21px]">
                    <button
                      type="button"
                      onClick={() => navigate(article.href)}
                      className="text-left transition-colors duration-300 hover:text-[#0089A6]"
                    >
                      {article.title}
                    </button>
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#374151] sm:text-base">
                    {article.description}
                  </p>

                  <div className="mt-5 border-t border-[#E7E7E2] pt-4">
                    <button
                      type="button"
                      onClick={() => navigate(article.href)}
                      className="group/link inline-flex min-h-[40px] items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1A365D] transition-colors hover:text-[#0089A6]"
                    >
                      Read Article
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="relative z-10 border-y border-[#DADAD6] bg-[#EEF3F5] px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0089A6]">
              Interior Design in Coimbatore
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#1A365D] sm:text-4xl">
              Inspiration for your next interior project
            </h2>
          </div>

          <div>
            <p className="text-base font-medium leading-8 text-[#374151]">
              Astra Interior shares ideas and guidance for planning
              residential interiors, villa interiors and commercial spaces
              in Coimbatore, Tamil Nadu. Explore home interior design ideas,
              furniture selection, lighting, colour combinations and
              practical space planning before making decisions for your
              property.
            </p>

            <p className="mt-4 text-base font-medium leading-8 text-[#374151]">
              The right interior design depends on how you use your space,
              your preferred style, available dimensions and budget. Our
              services include interior design, furniture and sofa
              redesign, electrical and lighting work, painting and
              finishing. Discuss your requirements with our team to
              identify a suitable approach for your home or workspace.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {seoServices.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#00A3C4]" />

                  <span className="text-sm font-semibold leading-7 text-[#374151]">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="group mt-7 inline-flex min-h-[50px] items-center gap-3 rounded-md bg-[#1A365D] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00A3C4] hover:shadow-lg"
            >
              View Our Services
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT CTA */}
      <section className="relative z-10 px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-2xl bg-[#1A365D] px-6 py-10 text-white shadow-xl shadow-[#1A365D]/10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-[#00A3C4]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                  Your Space, Your Vision
                </span>
              </div>

              <h2 className="max-w-[720px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Planning your home interiors?
                <span className="mt-1 block font-medium italic text-cyan-200">
                  Let’s talk about your ideas.
                </span>
              </h2>

              <p className="mt-4 max-w-[620px] text-base font-medium leading-8 text-white/90 sm:text-lg">
                Discuss your interior design requirements, preferred
                finishes and project goals with Astra Interior.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="group inline-flex min-h-[54px] w-full items-center justify-between gap-5 rounded-lg border border-white/30 bg-white px-5 py-4 text-sm font-bold text-[#1A365D] transition-all duration-300 hover:border-[#00A3C4] hover:bg-[#00A3C4] hover:text-white sm:w-auto sm:min-w-[230px]"
            >
              Discuss Your Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
