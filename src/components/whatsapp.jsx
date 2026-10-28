
import React, { useEffect, useState } from 'react';
import {
  MessageCircle,
  Phone,
  Plus,
  X,
  
} from 'lucide-react';

export default function ContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  const contactData = {
    phone: '+919345445898',
    whatsapp: '919345445898',
  };

  const brandNavy = '#1A365D';
  const brandTeal = '#00A3C4';

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const whatsappMessage = encodeURIComponent(
    "Hello Astra Interior, I'm interested in an interior design consultation."
  );

  const actions = [
    {
      
      description: 'Start a conversation',
      href: `https://wa.me/${contactData.whatsapp}?text=${whatsappMessage}`,
      icon: MessageCircle,
      type: 'whatsapp',
    },
    {
      
      description: 'Speak with our team',
      href: `tel:${contactData.phone}`,
      icon: Phone,
      type: 'phone',
    },
  ];

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-[1000] flex flex-col items-end font-sans"
      style={{ '--brand-navy': brandNavy, '--brand-teal': brandTeal }}
    >
      {/* Contact Actions */}
      <div
        id="contact-dock-actions"
        aria-hidden={!isOpen}
        className={`
          mb-5 flex flex-col items-end gap-3
          transition-all duration-300
          ease-[cubic-bezier(0.23,1,0.32,1)]
          ${
            isOpen
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-5 opacity-0'
          }
        `}
      >
        {actions.map((action, index) => {
          const Icon = action.icon;
          const isWhatsApp = action.type === 'whatsapp';

          return (
            <a
              key={action.type}
              href={action.href}
              target={isWhatsApp ? '_blank' : undefined}
              rel={isWhatsApp ? 'noopener noreferrer' : undefined}
              tabIndex={isOpen ? 0 : -1}
              aria-label={action.label}
              className="
                group flex items-center gap-3
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2
                focus-visible:ring-[#00A3C4] rounded-full
              "
              style={{
                transitionDelay: isOpen
                  ? `${index * 60}ms`
                  : '0ms',
              }}
            >
              {/* Action description */}
              <span
                className="
                  rounded-xl border border-white/10
                  bg-[#0B1728]/95 px-4 py-3
                  shadow-xl backdrop-blur-xl
                  transition-colors duration-300
                  group-hover:border-[#00A3C4]/50
                "
              >
                <span className="block text-sm font-semibold tracking-wide text-white">
                  {action.label}
                </span>
                <span className="mt-0.5 block text-xs font-medium text-slate-300">
                  {action.description}
                </span>
              </span>

              {/* Action icon */}
              <span
                className="
                  relative flex h-12 w-12 sm:h-14 sm:w-14
                  shrink-0 items-center justify-center
                  rounded-full border shadow-lg
                  backdrop-blur-xl
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:shadow-2xl
                "
                style={{
                  color: isWhatsApp ? '#FFFFFF' : brandTeal,
                  backgroundColor: isWhatsApp
                    ? '#128C7E'
                    : brandNavy,
                  borderColor: isWhatsApp
                    ? '#128C7E'
                    : `${brandTeal}70`,
                }}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span
                  className="
                    absolute inset-0 rounded-full border
                    border-white/20 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </span>
            </a>
          );
        })}
      </div>

      {/* Main Contact Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-controls="contact-dock-actions"
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        className="
          group relative flex items-center gap-3
          overflow-hidden rounded-full
          border border-stone-200/80
          bg-[#FAF9F6] py-2 pl-5 pr-2
          shadow-[0_12px_40px_rgba(0,0,0,0.16)]
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-2xl
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#00A3C4]
          focus-visible:ring-offset-2
        "
        style={{
          borderColor: isOpen ? brandTeal : undefined,
        }}
      >
      

        {/* Toggle icon */}
        <span
          className="
            relative flex h-10 w-10 shrink-0
            items-center justify-center rounded-full
            transition-all duration-300
            group-hover:scale-105
          "
          style={{
            backgroundColor: isOpen ? brandTeal : brandNavy,
          }}
        >
          {isOpen ? (
            <X
              size={19}
              className="text-white"
              aria-hidden="true"
            />
          ) : (
            <Plus
              size={19}
              style={{ color: '#FFFFFF' }}
              aria-hidden="true"
            />
          )}
        </span>
      </button>

      {/* Subtle ambient pulse */}
      {!isOpen && (
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute bottom-1 right-1
            -z-10 h-10 w-10 rounded-full
            animate-ping opacity-20
          "
          style={{ backgroundColor: brandTeal }}
        />
      )}
    </div>
  );
}
