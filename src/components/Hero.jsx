
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MoveUpRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Astra1 from '../assests/hero/astra1.webp';
import Astra2 from '../assests/hero/astra2.webp';
import Astra3 from '../assests/hero/astra3.webp';

const carouselImages = [
  {
    img: Astra1,
    title: 'Modern Minimalism',
    location: 'Coimbatore',
    number: '01'
  },
  {
    img: Astra2,
    title: 'Bespoke Luxury',
    location: 'Chennai',
    number: '02'
  },
  {
    img: Astra3,
    title: 'Architectural Soul',
    location: 'Tamil Nadu',
    number: '03'
  }
];

const services = [
  'Luxury Home Interiors',
  'Villa Interior Design',
  'Modular Kitchen Design',
  'Office Interior Design',
  'Custom Furniture',
  'Complete Interior Solutions'
];

const trustPoints = [
  'Personalized Designs',
  'Complete Project Solutions',
  'Thoughtful Space Planning'
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const handleNavigation = (path) => {
    setMenuOpen(false);

    if (path.startsWith('/')) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(path);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeSlide = carouselImages[currentSlide];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[760px] h-[100svh] max-h-[1100px] w-full overflow-hidden bg-[#101714] text-white"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={activeSlide.img}
              alt=""
              aria-hidden="true"
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
              initial={{ scale: 1.04 }}
              animate={{ scale: 1.12 }}
              transition={{ duration: 7, ease: 'linear' }}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PREMIUM IMAGE OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-[#101714]/45" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101714]/95 via-[#101714]/75 to-[#101714]/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101714] via-transparent to-black/30" />

      {/* SUBTLE DECORATIVE GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />

      {/* TOP NAVIGATION */}
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 md:px-12 lg:px-16">
          <button
            type="button"
            onClick={() => handleNavigation('/')}
            aria-label="Astra Interior home"
            className="group text-left"
          >
            <span
              className="block text-2xl font-semibold tracking-[-0.07em] sm:text-3xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              ASTRA<span className="text-[#A6C6B6]">.</span>
            </span>

            <span className="mt-0.5 block text-[8px] font-medium uppercase tracking-[0.3em] text-white/65 sm:text-[9px]">
              Interior Design Studio
            </span>
          </button>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            <button
              onClick={() => handleNavigation('services')}
              className="text-xs font-medium text-white/75 transition hover:text-[#B6D3C5]"
            >
              Services
            </button>

            <button
              onClick={() => handleNavigation('/port')}
              className="text-xs font-medium text-white/75 transition hover:text-[#B6D3C5]"
            >
              Our Projects
            </button>

            <button
              onClick={() => handleNavigation('about')}
              className="text-xs font-medium text-white/75 transition hover:text-[#B6D3C5]"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavigation('/contactus')}
              className="group flex items-center gap-3 border border-white/35 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#A6C6B6] hover:bg-[#A6C6B6] hover:text-[#101714]"
            >
              Let's Talk
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </nav>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center border border-white/25 bg-black/20 lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              aria-label="Mobile navigation"
              className="absolute left-0 right-0 top-full border-y border-white/10 bg-[#101714]/95 p-5 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
                {[
                  { label: 'Services', path: 'services' },
                  { label: 'Our Projects', path: '/port' },
                  { label: 'About Us', path: 'about' },
                  { label: 'Contact Us', path: '/contactus' }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center justify-between border-b border-white/10 py-4 text-left text-sm text-white/85"
                  >
                    {item.label}
                    <ArrowUpRight size={16} />
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO CONTENT */}
      <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center px-5 pb-32 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-[1000px]"
        >
          {/* EYEBROW */}
          <div className="mb-7 flex items-center gap-3 sm:mb-9">
            <span className="h-px w-8 bg-[#A6C6B6] sm:w-12" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C3DCCE] sm:text-[11px] sm:tracking-[0.32em]">
              Interior Designers in Coimbatore
            </p>

         
          </div>

          {/* SEO-FOCUSED H1 */}
          <h1
            id="hero-heading"
            className="max-w-[950px] text-[clamp(2.8rem,7.3vw,6.8rem)] font-medium leading-[1.03] tracking-[-0.065em] text-white"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Luxury Interiors.
            <br />

            <span className="font-light italic text-[#B7D1C3]">
              Designed Around You.
            </span>
          </h1>

          {/* SUPPORTING SEO CONTENT */}
          <p className="mt-7 max-w-[590px] text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            Astra Interior creates thoughtful home, villa and office interiors
            in Coimbatore. From bespoke furniture and modular kitchens to
            electrical works, painting and finishing, we bring your vision
            together through one complete interior solution.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={() => handleNavigation('/contactus')}
              className="group flex min-h-[54px] items-center justify-center gap-4 bg-[#B7D1C3] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#142019] transition duration-300 hover:bg-white sm:min-w-[225px]"
            >
              Book a Consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => handleNavigation('/port')}
              className="group flex min-h-[54px] items-center justify-center gap-4 border border-white/35 bg-white/[0.04] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10 sm:min-w-[200px]"
            >
              Explore Projects
              <MoveUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 sm:mt-11 sm:gap-x-8">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  size={14}
                  className="shrink-0 text-[#B7D1C3]"
                />
                <span className="text-[10px] font-medium text-white/75 sm:text-xs">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM PROJECT NAVIGATION */}
      <div className="absolute bottom-[95px] left-5 right-5 z-20 sm:bottom-24 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-5">
          <div className="hidden max-w-[230px] md:block">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.25em] text-white/45">
              Our Design Philosophy
            </p>
            <p className="text-sm leading-6 text-white/75">
              Spaces that feel personal, functional and timeless.
            </p>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="ml-auto flex items-end gap-4 sm:gap-6">
            <div className="text-right">
              <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/55">
                Featured Style
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSlide.title}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs font-medium text-white sm:text-sm"
                >
                  {activeSlide.title}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 pb-0.5">
              {carouselImages.map((slide, index) => (
                <button
                  key={slide.number}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  aria-pressed={index === currentSlide}
                  onClick={() => setCurrentSlide(index)}
                  className="group flex h-8 items-center justify-center"
                >
                  <span
                    className={`relative h-[2px] overflow-hidden transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-12 bg-white/30 sm:w-16'
                        : 'w-6 bg-white/35 group-hover:bg-white/70 sm:w-8'
                    }`}
                  >
                    {currentSlide === index && (
                      <motion.span
                        key={currentSlide}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 7, ease: 'linear' }}
                        className="absolute inset-0 origin-left bg-[#B7D1C3]"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <span className="min-w-[38px] text-right text-xs font-medium tabular-nums text-white/75">
              {activeSlide.number}
              <span className="text-white/35"> / 03</span>
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM SERVICE STRIP */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-[#101714]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 overflow-hidden px-5 py-4 sm:px-8 md:px-12 lg:px-16">
          <p className="hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B7D1C3] md:block">
            What We Do
          </p>

          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end md:gap-x-7 lg:gap-x-9">
            {services.map((service, index) => (
              <span
                key={service}
                className={`text-[9px] font-medium sm:text-[10px] ${
                  index > 2 ? 'hidden xl:inline' : ''
                } text-white/70`}
              >
                {service}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleNavigation('services')}
            aria-label="Explore all interior design services"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 transition hover:border-[#B7D1C3] hover:bg-[#B7D1C3] hover:text-[#101714]"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
