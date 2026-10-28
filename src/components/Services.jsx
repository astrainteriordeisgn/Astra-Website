
import { useState } from 'react';
import {
  Plus,
  Minus,
  ArrowUpRight,
  MessageCircle,
  Compass,
  Ruler,
  Layers3,
  Clock3,
} from 'lucide-react';

const faqs = [
  {
    question: 'How much does interior design cost in Coimbatore?',
    answer:
      'The cost of interior design in Coimbatore depends on the size of your property, design preferences, materials, furniture requirements and project scope. Astra Interior can discuss your requirements and help identify a suitable approach based on your space and budget.',
  },
  {
    question: 'How long does a home interior project take?',
    answer:
      'The timeline depends on the size of the home, design complexity, material availability and execution requirements. After understanding your project, the scope and expected timeline can be discussed before work begins.',
  },
  {
    question: 'Do you design villas and luxury homes?',
    answer:
      'Yes. Astra Interior works on interior design requirements for residential spaces, including homes and villas. The design approach can be tailored to your preferred style, available space, functional needs and budget.',
  },
  {
    question: 'Can you help with modular kitchens and custom furniture?',
    answer:
      'Kitchen planning and furniture requirements can be discussed as part of your interior project. The suitable design, storage options, finishes and furniture specifications depend on your space and the agreed scope of work.',
  },
  {
    question: 'Do you provide 3D interior design visualizations?',
    answer:
      'Visualization requirements can be discussed during the design consultation. Depending on the agreed project scope, visual references or design presentations can help you understand the proposed layout, colours, materials and overall interior direction before execution.',
  },
  {
    question: 'Can I choose the materials, colours and finishes?',
    answer:
      'Yes. Your preferences are an important part of the design process. Materials, colour palettes, finishes and furniture options can be reviewed with consideration for aesthetics, functionality, maintenance and your budget.',
  },
  {
    question: 'Do you handle electrical work, painting and furniture?',
    answer:
      'Astra Interior offers interior-related services that may include electrical work, painting, furniture design and other finishing requirements. The specific services included will be confirmed according to your project needs and agreed scope.',
  },
  {
    question: 'How do I get started with Astra Interior?',
    answer:
      'Start by sharing your property type, location, approximate size, design preferences and budget. Astra Interior can then discuss your requirements and the next steps for planning your interior design project.',
  },
];

const highlights = [
  {
    icon: Compass,
    title: 'Design Planning',
    description: 'Layouts and design direction tailored to your requirements.',
  },
  {
    icon: Layers3,
    title: 'Material Selection',
    description: 'Finishes and materials considered for style and functionality.',
  },
  {
    icon: Ruler,
    title: 'Space & Furniture',
    description: 'Practical planning for furniture, storage and everyday use.',
  },
  {
    icon: Clock3,
    title: 'Project Coordination',
    description: 'Scope and expected timelines discussed before execution.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const whatsappNumber = '919345445898';

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Astra Interior, I would like to enquire about interior design services in Coimbatore. Please help me understand the process and estimated cost.'
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#F7F7F5] px-5 py-20 text-[#171717] sm:px-8 sm:py-24 lg:px-16 lg:py-28"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Subtle architectural grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}

        <div className="grid items-end gap-8 border-b border-[#DADAD6] pb-10 sm:pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-black" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#444444]">
                Frequently Asked Questions
              </span>
            </div>

            <h2
              id="faq-heading"
              className="max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Questions before
              <br />
              <span className="font-light italic text-[#777777]">
                the transformation.
              </span>
            </h2>
          </div>

          <div className="max-w-[480px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#4B4B4B] sm:text-lg sm:leading-9">
              Planning your home, villa or office interior? Find answers
              about interior design costs, project timelines, materials,
              furniture and the design process at Astra Interior in
              Coimbatore.
            </p>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="group mt-6 inline-flex min-h-[48px] items-center gap-3 border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Ask a Question
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        {/* Main layout */}

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-20">
          {/* Left information panel */}

          <aside>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#555555]">
              Before You Begin
            </p>

            <h3
              className="mt-5 max-w-[400px] text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Make informed decisions for your space.
            </h3>

            <p className="mt-5 max-w-[420px] text-base leading-8 text-[#555555]">
              Every interior project is different. Understanding the
              process, materials, budget and requirements helps you plan
              your next step with greater clarity.
            </p>

            <div className="mt-9 border-t border-[#DADAD6]">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-[#DADAD6] py-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2D2CE] bg-white">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-[#202020]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-[#666666]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* FAQ accordion */}

          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#555555]">
                Interior Design Guide
              </span>

              <span className="text-xs font-semibold text-[#666666]">
                {String(faqs.length).padStart(2, '0')} QUESTIONS
              </span>
            </div>

            <div className="border-t border-[#D6D6D2]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;
                const questionId = `faq-question-${index}`;

                return (
                  <article
                    key={faq.question}
                    className={`border-b border-[#D6D6D2] transition-colors duration-300 ${
                      isOpen ? 'bg-white' : 'bg-transparent'
                    }`}
                  >
                    <h3>
                      <button
                        id={questionId}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className="group flex w-full items-start gap-4 px-4 py-6 text-left transition-colors duration-300 hover:bg-[#EEEEEB] sm:gap-6 sm:px-6 sm:py-7"
                      >
                        <span
                          className={`mt-0.5 w-8 shrink-0 text-sm font-semibold tabular-nums transition-colors ${
                            isOpen
                              ? 'text-black'
                              : 'text-[#92928D] group-hover:text-black'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span
                          className={`flex-1 text-base font-semibold leading-7 tracking-tight transition-colors sm:text-lg sm:leading-8 ${
                            isOpen
                              ? 'text-black'
                              : 'text-[#303030] group-hover:text-black'
                          }`}
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {faq.question}
                        </span>

                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? 'border-black bg-black text-white'
                              : 'border-[#D6D6D2] bg-white text-[#333333] group-hover:border-black group-hover:bg-black group-hover:text-white'
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={16} strokeWidth={1.8} />
                          ) : (
                            <Plus size={16} strokeWidth={1.8} />
                          )}
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                    >
                      <div className="pb-7 pl-16 pr-5 sm:pl-[5.5rem] sm:pr-10">
                        <p className="max-w-[650px] text-sm leading-7 text-[#555555] sm:text-base sm:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-6 text-[#777777]">
              Project costs, deliverables and timelines depend on the
              requirements and agreed scope of each individual project.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="relative overflow-hidden bg-[#171717] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 select-none text-[180px] font-bold leading-none tracking-[-0.1em] text-white/[0.035] sm:-right-8 sm:text-[260px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            A
          </div>

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Let’s Discuss Your Project
                </span>
              </div>

              <h3
                className="max-w-[750px] text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Have a space in mind?
                <br />
                <span className="font-light italic text-[#BDBDBD]">
                  Let’s talk about it.
                </span>
              </h3>

              <p className="mt-5 max-w-[620px] text-base leading-8 text-white/70 sm:text-lg">
                Connect with Astra Interior to discuss your home interior,
                villa, furniture or commercial interior design requirements
                in Coimbatore.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="group inline-flex min-h-[58px] w-full items-center justify-between gap-5 border border-white bg-white px-6 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:border-white hover:bg-black hover:text-white sm:w-auto sm:min-w-[245px]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} />
                Start a Conversation
              </span>

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
