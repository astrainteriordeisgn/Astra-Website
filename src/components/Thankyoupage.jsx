
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Clock3,
  X,
} from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(7);
  const [autoRedirect, setAutoRedirect] = useState(true);

  const whatsappNumber = '919345445898';

  const whatsappMsg = encodeURIComponent(
    'Hello Astra Interior, I just submitted an enquiry through your website. I would like to discuss my interior design requirements.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  useEffect(() => {
    if (!autoRedirect) return undefined;

    const interval = window.setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    const timeout = window.setTimeout(() => {
      // Attempt to open WhatsApp, then return the current tab home.
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      navigate('/');
    }, 7000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [autoRedirect, navigate, whatsappUrl]);

  const cancelRedirect = () => {
    setAutoRedirect(false);
    setCountdown(0);
  };

  return (
    <main
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#F7F7F5] px-5 py-12 text-[#202020] sm:px-8 sm:py-16"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Architectural grid background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Background decorative circles */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#DADAD6] sm:h-[500px] sm:w-[500px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#DADAD6] sm:h-[360px] sm:w-[360px]"
      />

      {/* Main content */}

      <div className="relative z-10 mx-auto w-full max-w-[1000px]">
        <div className="grid overflow-hidden border border-[#DEDEDA] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.05)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16">
            {/* Brand label */}

            <div className="mb-9 flex items-center gap-3">
              <span className="h-px w-9 bg-black" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#444444]">
                Astra Interior · Coimbatore
              </span>
            </div>

            {/* Success icon */}

            <div className="mb-8 flex h-16 w-16 items-center justify-center border border-[#DADAD6] bg-[#F3F3F0] sm:h-20 sm:w-20">
              <CheckCircle2
                size={36}
                strokeWidth={1.5}
                className="text-black sm:h-11 sm:w-11"
                aria-hidden="true"
              />
            </div>

            {/* Heading */}

            <h1
              className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Thank you
              <br />
              <span className="font-medium italic text-[#777777]">
                for reaching out.
              </span>
            </h1>

            <p className="mt-6 max-w-[500px] text-base font-medium leading-8 text-[#444444] sm:text-lg sm:leading-9">
              Your enquiry has been submitted. Thank you for considering
              Astra Interior for your home, villa or workspace. We look
              forward to learning more about your interior design
              requirements.
            </p>

            {/* Confirmation status */}

            <div className="mt-8 border-l-[3px] border-black bg-[#F5F5F2] px-5 py-5 sm:px-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white">
                  <CheckCircle2
                    size={21}
                    strokeWidth={1.7}
                    className="text-black"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#202020]">
                    Enquiry confirmation
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-[#555555]">
                    Your request has been received by the website. Our
                    team can review your details and follow up.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-black bg-black px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#333333]"
              >
                <Home size={17} />
                Return Home
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#D2D2CE] bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:border-black hover:bg-[#292929] hover:text-white"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Redirect control */}

            {autoRedirect && (
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E5E1] pt-5">
                <div className="flex items-center gap-2 text-sm font-medium text-[#555555]">
                  <Clock3 size={16} />

                  <span>
                    Returning home in{' '}
                    <strong className="font-bold text-black">
                      {countdown}s
                    </strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={cancelRedirect}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#444444] underline decoration-[#BDBDB7] underline-offset-4 transition-colors hover:text-black"
                >
                  <X size={14} />
                  Cancel
                </button>
              </div>
            )}

            {!autoRedirect && (
              <p className="mt-6 border-t border-[#E5E5E1] pt-5 text-sm font-medium leading-7 text-[#555555]">
                You can continue browsing or contact our team through
                WhatsApp using the button above.
              </p>
            )}
          </div>

          {/* Right visual panel */}

          <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#171717] p-7 text-white sm:min-h-[380px] sm:p-10 lg:min-h-full lg:p-12">
            {/* Decorative typography */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 top-10 select-none text-[150px] font-bold leading-none tracking-[-0.12em] text-white/[0.045] sm:text-[220px] lg:text-[250px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              A
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -right-4 select-none text-[90px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[130px] lg:text-[150px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              ASTRA
            </div>

            {/* Visual content */}

            <div className="relative z-10">
              <span className="inline-flex items-center border border-white/25 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                The Next Step
              </span>

              <h2
                className="mt-10 max-w-[420px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Good spaces
                <br />
                start with
                <br />
                <span className="font-medium italic text-[#BDBDBD]">
                  good conversations.
                </span>
              </h2>

              <p className="mt-5 max-w-[360px] text-base font-medium leading-8 text-[#D0D0D0]">
                Share your ideas, space requirements and design
                preferences. We can discuss the possibilities for your
                interior project.
              </p>
            </div>

            {/* Service details */}

            <div className="relative z-10 mt-12 border-t border-white/20 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                Explore Our Services
              </p>

              <ul className="space-y-3">
                {[
                  'Home & villa interiors',
                  'Furniture design',
                  'Painting & finishing',
                  'Residential & commercial spaces',
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-sm font-medium text-white/90"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-white" />
                    {service}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => navigate('/services')}
                className="group mt-7 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Explore Interior Services

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* SEO-friendly supporting text */}

        <p className="mx-auto mt-7 max-w-[760px] text-center text-sm font-medium leading-7 text-[#666666]">
          Astra Interior provides interior design services for homes,
          villas and workspaces in Coimbatore, Tamil Nadu. Thank you for
          enquiring about your interior project.
        </p>
      </div>
    </main>
  );
}
