
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowUpRight,
  X,
} from 'lucide-react';

import logo from '../assests/astralogo.webp';

const BRAND = {
  navy: '#1A365D',
  teal: '#00A3C4',
  ink: '#18241F',
  cream: '#F8F8F5',
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Studio', path: '/about' },
  { name: 'Our Work', path: '/port' },
  { name: 'Journal', path: '/blog' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* DESKTOP + MOBILE HEADER */}

      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? 'rgba(248,248,245,0.97)'
            : 'rgba(248,248,245,0.92)',
          backdropFilter: 'blur(18px)',
          borderBottom: scrolled
            ? '1px solid rgba(26,54,93,0.12)'
            : '1px solid rgba(26,54,93,0.06)',
          boxShadow: scrolled
            ? '0 8px 30px rgba(24,36,31,0.05)'
            : 'none',
        }}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-14 ${
            scrolled ? 'h-[72px]' : 'h-[88px]'
          }`}
        >
          {/* BRAND */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Astra Interior homepage"
            className="group flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Astra Interior Design Studio, Coimbatore"
              width="180"
              height="60"
              fetchPriority="high"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-12"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex xl:gap-10"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? 'text-[#1A365D]'
                      : 'text-[#69736C] hover:text-[#1A365D]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-[8px] text-[#648C78] opacity-0 transition-opacity group-hover:opacity-100">
                      0{index + 1}
                    </span>

                    <span>{link.name}</span>

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#00A3C4] transition-all duration-300 ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* ENQUIRY CTA */}

            <Link
              to="/contactus"
              className="group inline-flex h-12 items-center gap-4 rounded-full px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: BRAND.navy }}
            >
              Start a Project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all group-hover:bg-[#00A3C4]">
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </nav>

          {/* MOBILE MENU TOGGLE */}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-[#DDE1DA] bg-white transition-colors hover:border-[#00A3C4] lg:hidden"
          >
            <span className="h-[1.5px] w-5 bg-[#1A365D]" />
            <span className="h-[1.5px] w-3.5 self-center bg-[#1A365D]" />
          </button>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE NAVIGATION */}

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[#F8F8F5] transition-all duration-500 lg:hidden ${
          isOpen
            ? 'visible translate-x-0 opacity-100'
            : 'invisible translate-x-full opacity-0'
        }`}
      >
        {/* MOBILE HEADER */}

        <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-[#E3E5DE] px-5 sm:px-8">
          <Link
            to="/"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            aria-label="Astra Interior homepage"
          >
            <img
              src={logo}
              alt="Astra Interior"
              width="160"
              height="50"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE1DA] transition-colors hover:bg-[#1A365D] hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        {/* MOBILE MENU CONTENT */}

        <div className="mx-auto flex w-full max-w-[650px] flex-1 flex-col justify-center px-6 py-10 sm:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#00A3C4]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#648C78]">
              Explore Astra
            </p>
          </div>

          <nav aria-label="Mobile main navigation" className="flex flex-col">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b border-[#E2E4DC] py-5 transition-colors duration-300 sm:py-6 ${
                    isActive
                      ? 'text-[#00A3C4]'
                      : 'text-[#1A365D] hover:text-[#648C78]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-baseline gap-4">
                      <span className="text-[10px] font-medium tracking-widest text-[#8A938C]">
                        0{index + 1}
                      </span>

                      <span
                        className="text-3xl font-medium tracking-tight sm:text-4xl"
                        style={{
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {link.name}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={24}
                      className={`transition-all duration-300 ${
                        isActive
                          ? 'translate-x-0 text-[#00A3C4] opacity-100'
                          : 'translate-x-2 opacity-20 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE CTA */}

          <Link
            to="/contactus"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-8 flex min-h-[56px] items-center justify-between rounded-full bg-[#1A365D] px-6 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#00A3C4]"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* MOBILE FOOTER */}

        <div className="shrink-0 border-t border-[#E3E5DE] bg-[#F0F1EB] px-6 py-7 sm:px-10">
          <div className="mx-auto flex max-w-[650px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7B867E]">
                Project Enquiries
              </p>

              <a
                tabIndex={isOpen ? 0 : -1}
                href="mailto:astrainterior83@gmail.com"
                className="break-all text-sm font-medium text-[#1A365D] transition-colors hover:text-[#00A3C4]"
              >
                astrainterior83@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#69736C]">
              <ArrowDownRight size={14} className="text-[#648C78]" />
              Race Course, Coimbatore
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
