
import { useNavigate } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Compass,
  DraftingCompass,
  House,
  Layers3,
  MessageCircle,
  PencilRuler,
  
  Workflow,
} from 'lucide-react';

const WHATSAPP_NUMBER = '919345445898';

const images = {
  about:
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  living:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=80',
  kitchen:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  bedroom:
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
  detail:
    'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1000&q=80',
};

const services = [
  {
    number: '01',
    title: 'Home Interiors',
    description:
      'Thoughtfully planned living rooms, bedrooms and complete home interiors tailored to your everyday lifestyle.',
    icon: House,
    image: images.living,
    alt: 'Contemporary home interior with carefully selected furniture and warm lighting',
  },
  {
    number: '02',
    title: 'Villa Interiors',
    description:
      'Distinctive interior concepts, refined finishes and cohesive designs for contemporary and luxury villas.',
    icon: House,
    image: images.detail,
    alt: 'Premium villa interior with contemporary furniture and elegant finishes',
  },
  {
    number: '03',
    title: 'Modular Kitchens',
    description:
      'Functional kitchen layouts that bring together storage, workflow, material selection and modern aesthetics.',
    icon: Layers3,
    image: images.kitchen,
    alt: 'Modern modular kitchen interior with a clean contemporary design',
  },
  {
    number: '04',
    title: 'Custom Furniture',
    description:
      'Furniture concepts designed around your available space, preferred style and practical requirements.',
    icon: PencilRuler,
    image: images.bedroom,
    alt: 'Bedroom interior featuring coordinated furniture and contemporary styling',
  },
];

const advantages = [
  {
    icon: Compass,
    title: 'Design with Purpose',
    description:
      'Every space begins with an understanding of your needs, lifestyle and design preferences.',
  },
  {
    icon: DraftingCompass,
    title: 'Planned with Precision',
    description:
      'Thoughtful space planning, material selection and coordinated design decisions.',
  },
  {
    icon: Workflow,
    title: 'Complete Interior Solutions',
    description:
      'A coordinated approach to furniture, electrical works, painting and interior finishing.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your requirements, space, budget and preferred design direction.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We develop the design concept, layout and material direction for your project.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'The approved design moves into coordinated project execution and finishing.',
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className={`h-px w-9 ${
          light ? 'bg-[#B6D4C4]' : 'bg-[#648C78]'
        }`}
      />
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
          light ? 'text-[#B6D4C4]' : 'text-[#648C78]'
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function ImageFrame({ src, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden bg-[#E9E7DF] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Astra Interior, I would like to discuss an interior design project in Coimbatore.'
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const goToPortfolio = () => {
    navigate('/port');
  };

  return (
    <main
      id="about"
      className="overflow-hidden bg-[#F8F7F3] text-[#202C26]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* 01 — INTRODUCTION */}

      <section className="relative px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-20">
            <div>
              <SectionLabel>About Astra Interior</SectionLabel>

              <h1
                className="max-w-[720px] text-5xl font-medium leading-[1.04] tracking-[-0.065em] sm:text-6xl md:text-7xl xl:text-[86px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Spaces that
                <br />
                <span className="font-light italic text-[#648C78]">
                  feel like you.
                </span>
              </h1>

              <p className="mt-8 max-w-[570px] text-base leading-8 text-[#68716B] sm:text-lg sm:leading-9">
                Astra Interior is an interior design studio based in
                Coimbatore, Tamil Nadu, creating thoughtfully designed
                homes, villas and workspaces. We bring design, functionality
                and finishing together to create interiors that reflect
                the way you live and work.
              </p>

              <p className="mt-5 max-w-[550px] text-sm leading-7 text-[#68716B]">
                From interior planning and custom furniture to electrical
                works, painting and finishing, our approach focuses on
                creating a cohesive space around your requirements.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="group inline-flex min-h-[54px] items-center justify-center gap-4 bg-[#233C30] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#648C78]"
                >
                  Discuss Your Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <button
                  type="button"
                  onClick={goToPortfolio}
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-[#D7D9D2] px-7 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:border-[#648C78] hover:text-[#648C78]"
                >
                  Explore Projects
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E0E1DA] pt-6">
                {[
                  'Residential Interiors',
                  'Villa Design',
                  'Commercial Spaces',
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#68716B]"
                  >
                    <Check size={13} className="text-[#648C78]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] pb-10 pr-5 sm:pr-8">
              <ImageFrame
                src={images.about}
                alt="Contemporary residential interior showcasing thoughtful furniture placement and elegant finishes"
                className="aspect-[4/4.6] w-full"
              />

              <div className="absolute -bottom-1 right-0 w-[75%] border border-[#F8F7F3] bg-[#E9EDE5] p-5 sm:p-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#648C78]">
                  Our approach
                </p>

                <p
                  className="mt-2 text-xl leading-snug tracking-tight sm:text-2xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Beautiful by design.
                  <br />
                  Practical by nature.
                </p>
              </div>

              <div className="absolute left-0 top-10 hidden -translate-x-1/2 items-center justify-center rounded-full border border-[#D7D9D2] bg-[#F8F7F3] p-4 lg:flex">
                <ArrowDownRight size={23} className="text-[#648C78]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — COMPANY POSITIONING */}

      <section className="bg-[#233C30] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <SectionLabel light>Our philosophy</SectionLabel>

            <h2
              className="max-w-[470px] text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Good design is more than what you see.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
              It is how naturally a room works, how comfortably a home
              supports your routine and how every detail contributes to the
              overall experience. Our interior design philosophy balances
              aesthetics with functionality, making each design decision
              purposeful.
            </p>

            <div className="mt-7 flex items-start gap-3 border-t border-white/15 pt-6">
            
              <p className="text-sm leading-7 text-white/65">
                Personalised design. Considered materials. Cohesive spaces.
                A clear direction from the first conversation to the final
                details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — OUR SERVICES */}

      <section
        id="about-services"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between lg:mb-16">
            <div>
              <SectionLabel>What we do</SectionLabel>

              <h2
                className="max-w-[700px] text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl md:text-6xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Interior solutions
                <br className="hidden sm:block" />
                <span className="font-light italic text-[#648C78]">
                  for modern living.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-sm leading-7 text-[#68716B]">
              Discover interior design services for homes, villas and
              workspaces, with a focus on thoughtful planning and coordinated
              execution.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex h-full flex-col border border-[#E5E4DC] bg-[#FBFAF7] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6C8BA]"
                >
                  <div className="relative overflow-hidden">
                    <ImageFrame
                      src={service.image}
                      alt={service.alt}
                      className="aspect-[5/4] w-full"
                    />

                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center bg-[#F8F7F3]/95 text-[#233C30]">
                      <Icon size={17} strokeWidth={1.5} />
                    </span>

                    <span className="absolute bottom-4 right-4 text-[10px] font-semibold tracking-[0.15em] text-white drop-shadow">
                      {service.number}
                    </span>

                    <div className="absolute inset-0 bg-[#233C30]/0 transition-colors duration-300 group-hover:bg-[#233C30]/10" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3
                      className="text-xl font-medium tracking-tight"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[#68716B]">
                      {service.description}
                    </p>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="mt-6 inline-flex items-center gap-2 self-start text-[10px] font-semibold uppercase tracking-[0.12em] text-[#648C78] transition-colors hover:text-[#233C30]"
                    >
                      Enquire Now
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 max-w-4xl text-xs leading-6 text-[#81877F]">
            Our broader interior solutions can also include electrical
            works, painting, sofa redesign and interior finishing, depending
            on your project requirements.
          </p>
        </div>
      </section>

      {/* 04 — WHY ASTRA INTERIOR */}

      <section className="border-y border-[#E3E2DA] bg-[#EFEEE7] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel>Why Astra Interior</SectionLabel>

              <h2
                className="max-w-[500px] text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl md:text-6xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                A thoughtful process.
                <br />
                <span className="font-light italic text-[#648C78]">
                  A considered result.
                </span>
              </h2>

              <p className="mt-6 max-w-[430px] text-sm leading-8 text-[#68716B]">
                Choosing an interior design company is about more than
                aesthetics. It is about communication, planning and ensuring
                that design decisions support your goals, available space
                and budget.
              </p>

              <button
                type="button"
                onClick={openWhatsApp}
                className="mt-8 inline-flex min-h-[50px] items-center gap-3 bg-[#233C30] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#648C78]"
              >
                Talk to Our Team
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="divide-y divide-[#D8D9D0] border-t border-[#D8D9D0]">
              {advantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="grid grid-cols-[48px_1fr] gap-4 py-7 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-9"
                  >
                    <div className="flex h-11 w-11 items-center justify-center border border-[#D6DCD2] bg-[#F8F7F3] text-[#648C78] sm:h-14 sm:w-14">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-semibold tracking-[0.16em] text-[#648C78]">
                          0{index + 1}
                        </span>

                        <h3
                          className="text-xl font-medium tracking-tight sm:text-2xl"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p className="max-w-[530px] text-sm leading-7 text-[#68716B]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — DESIGN PROCESS */}

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionLabel>How we work</SectionLabel>

              <h2
                className="text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl md:text-6xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                From your idea
                <br />
                <span className="font-light italic text-[#648C78]">
                  to your space.
                </span>
              </h2>

              <p className="mt-6 max-w-[400px] text-sm leading-8 text-[#68716B]">
                A structured approach helps keep your interior project
                aligned with your requirements, design direction and
                agreed scope.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="border border-[#E3E2DA] p-5 transition-colors hover:border-[#9EB5A3] sm:p-6"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#648C78]">
                    {step.number}
                  </span>

                  <div className="my-7 h-px bg-[#DCDDD5]" />

                  <h3
                    className="text-xl font-medium"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68716B]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — PORTFOLIO FEATURE */}

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid overflow-hidden bg-[#E8E8DF] md:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16 xl:p-20">
              <SectionLabel>Our work</SectionLabel>

              <h2
                className="text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Every space
                <br />
                tells a story.
              </h2>

              <p className="mt-6 max-w-[450px] text-sm leading-8 text-[#68716B]">
                Explore interior design inspiration for living rooms,
                bedrooms, kitchens and contemporary homes. Discover how
                thoughtful layouts, finishes and furniture can shape
                the experience of a space.
              </p>

              <button
                type="button"
                onClick={goToPortfolio}
                className="group mt-8 inline-flex min-h-[54px] items-center justify-center gap-4 self-start bg-[#233C30] px-7 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#648C78]"
              >
                View Our Portfolio
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            <ImageFrame
              src={images.living}
              alt="Modern residential interior design with coordinated furnishings, natural textures and layered lighting"
              className="min-h-[320px] aspect-[4/3] md:aspect-auto md:min-h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* 07 — FINAL ENQUIRY CTA */}

      <section className="relative isolate overflow-hidden bg-[#1C3026] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-16 lg:py-36">
        <div className="absolute inset-0 -z-20">
          <img
            src={images.kitchen}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#17271F]/80" />

        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-[850px] text-center">
            <SectionLabel light>Start a conversation</SectionLabel>

            <h2
              className="text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl md:text-7xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Ready to reimagine
              <br />
              <span className="font-light italic text-[#B6D4C4]">
                your space?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[620px] text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
              Looking for interior designers in Coimbatore? Share your ideas
              and requirements with Astra Interior. Let us discuss a
              considered design solution for your home, villa or workspace.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openWhatsApp}
                className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 bg-[#B6D4C4] px-7 text-xs font-bold uppercase tracking-[0.12em] text-[#1C3026] transition-colors hover:bg-white sm:w-auto"
              >
                <MessageCircle size={17} />
                Enquire on WhatsApp
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => navigate('/contactus')}
                className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 border border-white/30 px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Contact Our Studio
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
              <CheckCircle2 size={13} />
              Interior Design · Coimbatore, Tamil Nadu
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
