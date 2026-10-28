
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import {
  ArrowUpRight,
  ArrowRight,
 
  BookOpen,
  
  Leaf,
  Palette,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";



const journalPosts = [
  {
    id: "lighting",
    number: "01",
    category: "Lighting Design",
    title: "How Interior Lighting Transforms Your Home",
    description:
      "Discover how natural light, ambient lighting and carefully positioned fixtures can make living rooms, bedrooms and dining areas more comfortable and inviting.",
    author: "Astra Interior",
    date: "Design Guide",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior lighting and decorative elements in a thoughtfully styled contemporary home",
    tags: ["Lighting", "Home Interiors"],
    slug: "/contact",
  },
  {
    id: "materials",
    number: "02",
    category: "Materials & Finishes",
    title: "Choosing Materials for Beautiful, Practical Interiors",
    description:
      "Explore wood finishes, flooring, wall textures and durable materials to help create interiors that balance visual appeal with everyday functionality.",
    author: "Astra Interior",
    date: "Materials Guide",
    image:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior materials and furnishings for contemporary home design",
    tags: ["Materials", "Finishes"],
    slug: "/contact",
  },
  {
    id: "minimalism",
    number: "03",
    category: "Modern Home Design",
    title: "Modern Minimalist Interior Design Ideas",
    description:
      "Learn how thoughtful furniture placement, neutral colour palettes and smart storage can create organised, welcoming and visually balanced living spaces.",
    author: "Astra Interior",
    date: "Style Guide",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    alt: "Minimalist interior styling with natural textures and a neutral colour palette",
    tags: ["Minimalism", "Space Planning"],
    slug: "/contact",
  },
];

const trendingStyles = [
  {
    number: "01",
    category: "Colour & Styling",
    title: "Colour Palettes for Modern Homes",
    description:
      "Explore warm neutrals, earthy shades and balanced accent colours to create a cohesive interior style for your home.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary living room showcasing a coordinated interior colour palette",
    icon: Palette,
  },
  {
    number: "02",
    category: "Furniture Design",
    title: "Smart Storage and Custom Furniture",
    description:
      "Discover practical furniture and built-in storage ideas that help make the most of available space without compromising on style.",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern furniture and storage inspiration for residential interior design",
    icon: BookOpen,
  },
  {
    number: "03",
    category: "Nature-Inspired Design",
    title: "Bringing Natural Elements Indoors",
    description:
      "Combine natural textures, indoor plants, daylight and organic finishes to create a more relaxed and welcoming home environment.",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=85",
    alt: "Nature-inspired contemporary interior with warm materials and decorative styling",
    icon: Leaf,
  },
];

const seoServices = [
  "Home interior design",
  "Villa interior design",
  "Commercial interior design",
  "Interior lighting and electrical work",
  "Custom furniture and sofa redesign",
  "Interior painting and finishing",
];

export default function BlogSectionClassic() {
  // Page metadata
  useEffect(() => {
    const previousTitle = document.title;

    const pageTitle =
      "Interior Design Ideas & Guides | Astra Interior Coimbatore";

    const pageDescription =
      "Explore interior design ideas, home lighting tips, furniture inspiration, material guides and modern home interiors from Astra Interior in Coimbatore, Tamil Nadu.";

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

    const schemaId = "astra-interior-journal-schema";
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
      "@type": "Blog",
      name: "The Astra Interior Journal",
      description: pageDescription,
      inLanguage: "en-IN",
      about: [
        "Interior design",
        "Home interior design",
        "Interior lighting",
        "Furniture design",
        "Modern home interiors",
      ],
      publisher: {
        "@type": "Organization",
        name: "Astra Interior",
      },
      blogPost: journalPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.image,
        author: {
          "@type": "Organization",
          name: "Astra Interior",
        },
      })),
    });

    return () => {
      document.title = previousTitle;

      metaItems.forEach(({ element, created }) => {
        if (created) element.remove();
      });

      if (createdSchema) schema.remove();
    };
  }, []);

  // Smooth scrolling with animation-frame cleanup
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navigation />

      <main
        className="overflow-hidden bg-[#F8F9FB] text-[#202936]"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {/* HERO SECTION */}
        <section className="relative px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-16 lg:pb-24 lg:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#00A3C4]/[0.08] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#1A365D 1px, transparent 1px), linear-gradient(90deg, #1A365D 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[3px] w-9 rounded-full bg-[#00A3C4]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A365D] sm:text-xs">
                    The Astra Interior Journal
                  </span>
                </div>

                <h1
                  className="text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-[#1A365D] sm:text-6xl md:text-7xl lg:text-[88px]"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Ideas for
                  <span className="block font-medium italic text-[#00A3C4]">
                    better living.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#475569] sm:text-lg sm:leading-9">
                  Explore practical interior design ideas, lighting
                  inspiration, furniture guides and material tips. Get
                  inspiration for creating comfortable, functional and
                  beautiful homes and workspaces.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#latest-articles"
                    className="inline-flex min-h-[50px] items-center gap-3 rounded-lg bg-[#1A365D] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:shadow-lg"
                  >
                    Explore Articles
                    <ArrowUpRight size={18} />
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-[50px] items-center gap-3 rounded-lg border border-[#D7E0E8] bg-white px-5 py-3 text-sm font-bold text-[#1A365D] transition-all duration-300 hover:border-[#00A3C4] hover:text-[#0089A6]"
                  >
                    Discuss Your Project
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <div className="relative lg:justify-self-end">
                <div className="rounded-2xl border border-[#DCE4EA] bg-white p-6 shadow-[0_24px_80px_-35px_rgba(26,54,93,0.25)] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F7FA] text-[#0089A6]">
                    
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0089A6]">
                    Inspiration for Every Space
                  </p>

                  <h2
                    className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.035em] text-[#1A365D] sm:text-3xl"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    Thoughtful design starts with the right ideas.
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-7 text-[#475569] sm:text-base sm:leading-8">
                    Learn about space planning, lighting, furniture and
                    finishes before making decisions for your home or
                    commercial interior.
                  </p>

                  <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                    <p className="text-sm font-semibold leading-7 text-[#334155]">
                      Design guides for homes, villas and workspaces in
                      Coimbatore and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CATEGORY STRIP */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-[#DDE4EA] pt-6 sm:mt-16">
              {[
                "Home Interiors",
                "Lighting",
                "Furniture",
                "Materials",
                "Space Planning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D9E2E9] bg-white px-4 py-2.5 text-xs font-semibold text-[#475569]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES */}
        <section
          id="latest-articles"
          aria-labelledby="latest-articles-heading"
          className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 flex flex-col gap-4 border-b border-[#DDE4EA] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[3px] w-7 rounded-full bg-[#00A3C4]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#475569]">
                    Read, Learn & Discover
                  </span>
                </div>

                <h2
                  id="latest-articles-heading"
                  className="text-3xl font-semibold tracking-[-0.045em] text-[#1A365D] sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Latest articles
                  <span className="text-[#00A3C4]">.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm font-medium leading-7 text-[#475569] sm:text-base sm:leading-8">
                Practical guidance and inspiration to help you make
                informed interior design decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {journalPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E0E6EC] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#00A3C4]/50 hover:shadow-[0_24px_60px_-30px_rgba(26,54,93,0.28)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8ECEF]">
                    <img
                      src={post.image}
                      alt={post.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#142C4B]/35 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-md border-l-[3px] border-[#00A3C4] bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A365D] shadow-sm sm:left-5 sm:top-5">
                      {post.category}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1A365D] transition-colors duration-300 group-hover:bg-[#00A3C4] group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#64748B]">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[#00A3C4]" />
                      <span>{post.author}</span>
                    </div>

                    <h3
                      className="mt-4 text-xl font-semibold leading-snug tracking-[-0.03em] text-[#1A365D] transition-colors duration-300 group-hover:text-[#0089A6] sm:text-2xl"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm font-medium leading-7 text-[#475569] sm:text-base sm:leading-8">
                      {post.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#EDF5F7] px-3 py-1.5 text-[10px] font-semibold text-[#334155]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-[#E6EBF0] pt-5">
                      <Link
                        to={post.slug}
                        aria-label={`Discuss ${post.title} with Astra Interior`}
                        className="inline-flex min-h-[40px] items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1A365D] transition-colors hover:text-[#0089A6]"
                      >
                        Discuss This Idea
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRENDING DESIGN IDEAS */}
        <section className="relative overflow-hidden bg-[#122A48] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#00A3C4]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[3px] w-8 rounded-full bg-[#00A3C4]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Design Inspiration
                  </span>
                </div>

                <h2
                  className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Ideas shaping
                  <span className="block font-medium italic text-[#00A3C4]">
                    modern interiors.
                  </span>
                </h2>
              </div>

              <p className="max-w-lg text-base font-medium leading-8 text-slate-200 sm:text-lg sm:leading-9 lg:justify-self-end">
                Explore colour, furniture and nature-inspired concepts
                that can help you plan a distinctive and functional
                living environment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {trendingStyles.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:border-[#00A3C4]/60 hover:bg-white/[0.07]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#122A48]/60 to-transparent" />

                      <span className="absolute left-4 top-4 rounded-full bg-[#122A48]/80 px-3 py-2 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
                        IDEA {item.number}
                      </span>
                    </div>

                    <div className="p-5 sm:p-7">
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-cyan-200" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200">
                          {item.category}
                        </span>
                      </div>

                      <h3
                        className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-7 text-slate-200 sm:text-base sm:leading-8">
                        {item.description}
                      </p>

                      <div className="mt-6 h-[2px] w-10 rounded-full bg-[#00A3C4] transition-all duration-500 group-hover:w-20" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="border-b border-[#DDE4EA] bg-[#EDF3F6] px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0089A6]">
                Astra Interior · Coimbatore
              </span>

              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#1A365D] sm:text-4xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Your guide to better interior design.
              </h2>

              <p className="mt-4 text-base font-medium leading-8 text-[#475569]">
                Inspiration and practical guidance for planning
                comfortable, functional and beautiful spaces.
              </p>
            </div>

            <div>
              <p className="text-base font-medium leading-8 text-[#334155]">
                Planning a home makeover? The right interior design
                decisions can improve how your space looks and works.
                The Astra Interior Journal shares guidance on home
                interior design, lighting, furniture, colour palettes,
                material selection and space planning for residential
                and commercial interiors in Coimbatore, Tamil Nadu.
              </p>

              <p className="mt-4 text-base font-medium leading-8 text-[#334155]">
                From villa interior design to contemporary living rooms
                and functional workspaces, start with your requirements,
                available space, preferred finishes and budget. Explore
                our articles for ideas, then connect with Astra Interior
                to discuss interior design, furniture and sofa redesign,
                lighting, painting and finishing services.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {seoServices.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A3C4]" />

                    <span className="text-sm font-semibold leading-7 text-[#334155]">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-[50px] items-center gap-3 rounded-lg bg-[#1A365D] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00A3C4] hover:shadow-lg"
              >
                Talk to Astra Interior
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] overflow-hidden rounded-2xl bg-white px-6 py-10 shadow-[0_24px_80px_-45px_rgba(26,54,93,0.22)] sm:px-10 sm:py-14 lg:px-14">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0089A6]">
                  Planning Your Next Project?
                </span>

                <h2
                  className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#1A365D] sm:text-4xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Turn inspiration into a thoughtful space.
                </h2>

                <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[#475569]">
                  Have questions about home interiors, furniture,
                  lighting or renovation? Contact Astra Interior to
                  discuss your project requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex min-h-[54px] items-center justify-between gap-5 rounded-lg bg-[#1A365D] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3C4] hover:shadow-lg"
              >
                Contact Our Team
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
