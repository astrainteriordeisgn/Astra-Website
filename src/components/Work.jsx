
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  
  Check,
} from 'lucide-react';

import Lenis from '@studio-freight/lenis';

import Img1 from '../assests/penthouse.png';
import Img2 from '../assests/amber wood.webp';
import Img3 from '../assests/Electrical & Lighting.webp';
import Img4 from '../assests/Sofa Redesign.webp';
import Img5 from '../assests/Commercial.webp';
import Img6 from '../assests/Residential.webp';

const projects = [
  {
    id: '01',
    title: 'Luxury Home Interiors',
    category: 'Residential Interiors',
    description:
      'Thoughtful interiors designed around comfort, functionality and personal style.',
    image: Img1,
    alt: 'Luxury residential interior design project by Astra Interior',
  },
  {
    id: '02',
    title: 'Custom Furniture Design',
    category: 'Furniture Design',
    description:
      'Furniture concepts that complement the space, materials and overall interior design.',
    image: Img2,
    alt: 'Custom furniture and wood finish design for residential interiors',
  },
  {
    id: '03',
    title: 'Commercial Spaces',
    category: 'Commercial Interiors',
    description:
      'Interior solutions that bring together a professional appearance and practical use.',
    image: Img5,
    alt: 'Commercial interior design and workspace project',
  },
  {
    id: '04',
    title: 'Sofa Redesign',
    category: 'Furniture & Upholstery',
    description:
      'Refresh existing furniture with considered styling, updated finishes and upholstery.',
    image: Img4,
    alt: 'Sofa redesign and upholstery styling for a home interior',
  },
  {
    id: '05',
    title: 'Contemporary Home Design',
    category: 'Residential Interiors',
    description:
      'A considered combination of furniture, finishes, lighting and spatial planning.',
    image: Img6,
    alt: 'Contemporary home interior with coordinated furniture and finishes',
  },
  {
    id: '06',
    title: 'Lighting & Interior Details',
    category: 'Electrical & Lighting',
    description:
      'Lighting and electrical planning that supports the functionality of an interior.',
    image: Img3,
    alt: 'Interior lighting and electrical design details',
  },
];

const serviceHighlights = [
  'Home and villa interiors',
  'Furniture design and sofa redesign',
  'Electrical and lighting work',
  'Painting and finishing',
];

export default function Work() {
  const navigate = useNavigate();

  const whatsappNumber = '919345445898';

  const whatsappMessage = encodeURIComponent(
    'Hello Astra Interior, I am interested in your interior design services in Coimbatore. I would like to discuss my project requirements.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(raf);
    };

    animationFrameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleProjectClick = () => {
    navigate('/services');
  };

  return (
    <main
      id="work"
      className="relative overflow-hidden bg-[#F7F7F5] text-[#202020]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Architectural background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* HERO SECTION */}

      <section className="relative z-10 px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-black" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#444444]">
                  Selected Projects
                </span>
              </div>

              <h1
                className="max-w-[900px] text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Interior design
                <br />
                <span className="font-medium italic text-[#777777]">
                  that feels personal.
                </span>
              </h1>
            </div>

            <div className="max-w-[500px] lg:justify-self-end">
              <p className="text-base font-medium leading-8 text-[#444444] sm:text-lg sm:leading-9">
                Explore interior design ideas for homes, villas and
                workspaces. Astra Interior brings together space planning,
                furniture design, lighting and finishing to help create
                interiors that reflect your needs and preferences.
              </p>

              <button
                type="button"
                onClick={() => navigate('/services')}
                className="group mt-6 inline-flex min-h-[48px] items-center gap-3 bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#333333]"
              >
                Explore Our Services

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#DADAD6] pt-6 sm:mt-16 sm:pt-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#444444]">
              Astra Interior
            </span>

            <span className="h-1 w-1 rounded-full bg-[#999999]" />

            <span className="text-sm font-medium text-[#555555]">
              Coimbatore, Tamil Nadu
            </span>

            <span className="h-1 w-1 rounded-full bg-[#999999]" />

            <span className="text-sm font-medium text-[#555555]">
              Residential & Commercial Design
            </span>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}

      <section
        aria-labelledby="portfolio-heading"
        className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#DADAD6] pb-5 sm:flex-row sm:items-end sm:pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#555555]">
                The Portfolio
              </p>

              <h2
                id="portfolio-heading"
                className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Spaces & details
              </h2>
            </div>

            <p className="max-w-[400px] text-sm font-medium leading-7 text-[#555555]">
              Discover design directions, furniture ideas and interior
              details across different project categories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {projects.map((item, index) => (
              <article
                key={item.id}
                className={`group min-w-0 ${
                  index % 3 === 1 ? 'lg:translate-y-12' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={handleProjectClick}
                  aria-label={`Explore services related to ${item.title}`}
                  className="block w-full text-left"
                >
                  {/* Project image */}

                  <div className="relative aspect-[4/5] overflow-hidden bg-[#30302e]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* Transparent overlay removed */}

                    <div className="pointer-events-none absolute inset-0 bg-transparent" />

                    {/* Project number */}

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center border border-white/70 bg-black/40 text-xs font-semibold tracking-wider text-white backdrop-blur-sm sm:left-5 sm:top-5">
                      {item.id}
                    </div>

                    {/* View project indicator */}

                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-black text-white transition-colors duration-300 group-hover:bg-[#161515] sm:bottom-5 sm:right-5 sm:h-12 sm:w-12">
                      <ArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Project details */}

                  <div className="mt-5 border-l-2 border-[#D7D7D2] pl-4 transition-colors duration-300 group-hover:border-black sm:mt-6 sm:pl-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#666666]">
                      {item.category}
                    </p>

                    <h3
                      className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[#202020] transition-colors duration-300 group-hover:text-[#555555] sm:text-2xl"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-[#555555] sm:text-base">
                      {item.description}
                    </p>

                    {/* Explore Services stays black on hover */}

                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] !text-black transition-colors duration-300 group-hover:!text-black">
                      Explore Services

                      <ArrowRight
                        size={15}
                        className="!text-black transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}

      <section className="relative z-10 border-y border-[#DADAD6] bg-[#EEEEEB] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-black" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#555555]">
                Our Expertise
              </span>
            </div>

            <h2
              className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Thoughtful design.
              <br />
              <span className="font-medium italic text-[#777777]">
                Practical details.
              </span>
            </h2>

            <p className="mt-5 max-w-[540px] text-base font-medium leading-8 text-[#444444]">
              From the overall layout to the finishing touches, every
              interior decision should support the way a space is used.
              Discuss your requirements with Astra Interior to understand
              the services suitable for your project.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((service, index) => (
              <div
                key={service}
                className="flex min-h-[76px] items-center gap-4 border border-[#DADAD6] bg-[#F7F7F5] px-4 py-4 transition-colors duration-300 hover:border-[#777777] sm:px-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-black text-white">
                  <Check size={17} strokeWidth={2} />
                </span>

                <span className="text-sm font-semibold leading-6 text-[#303030]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="relative z-10 px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#555555]">
              Interior Design in Coimbatore
            </p>

            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Looking for interior designers in Coimbatore?
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base font-medium leading-8 text-[#444444]">
              Astra Interior offers interior design services for
              residential and commercial spaces in Coimbatore, Tamil Nadu.
              Whether you are planning home interiors, villa interiors,
              furniture design, lighting, painting or finishing work, the
              right design approach begins with understanding your
              requirements and available space.
            </p>

            <p className="text-base font-medium leading-8 text-[#444444]">
              Explore these interior design ideas and speak with our team
              about your project scope, preferred style, materials and
              budget. We can discuss the relevant services and next steps
              for your space.
            </p>

            <button
              type="button"
              onClick={() => navigate('/services')}
              className="group mt-2 inline-flex min-h-[50px] items-center gap-3 border border-black bg-black px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#333333]"
            >
              View All Services

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT CTA */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#171717] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 select-none text-[170px] font-bold leading-none tracking-[-0.1em] text-white/[0.035] sm:text-[250px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            A
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                  Your Space, Your Vision
                </span>
              </div>

              <h2
                className="max-w-[750px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Have a project in mind?
                <br />
                <span className="font-medium italic text-[#C5C5C5]">
                  Let’s talk about it.
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-base font-medium leading-8 text-[#D0D0D0] sm:text-lg">
                Tell us about your home, villa or workspace. Start a
                conversation about your interior design requirements.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] w-full items-center justify-between gap-5 border border-white bg-white px-6 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:border-[#444444] hover:bg-[#292929] hover:text-white sm:w-auto sm:min-w-[240px]"
            >
              Start Your Project

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Subtle brand watermark */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 left-0 select-none overflow-hidden opacity-[0.025]"
      >
        <h2
          className="text-[27vw] font-bold leading-none tracking-[-0.09em] text-black"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          ASTRA
        </h2>
      </div>
    </main>
  );
}
