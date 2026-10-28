
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  DraftingCompass,
  ClipboardCheck,
  Target,
  Hammer,
  KeyRound,
  MessageCircle,
  Ruler,
  Check,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Planning",
    shortTitle: "Discovery",
    sub: "Understanding Your Space",
    desc: "Every successful interior begins with understanding your lifestyle, preferences, space requirements and budget. We establish a clear direction for your home or commercial interior project.",
    deliverables: [
      "Requirement assessment",
      "Space and layout review",
      "Design direction and priorities",
    ],
    icon: Compass,
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    alt: "Contemporary architectural interior with natural light and modern furniture",
  },
  {
    id: "02",
    title: "Concept & Visualization",
    shortTitle: "Design",
    sub: "Bringing Ideas to Life",
    desc: "We develop the visual direction of your interiors through layouts, material references, colour palettes and design visualizations appropriate to your project scope.",
    deliverables: [
      "Interior design concepts",
      "Material and colour selection",
      "Design visualization where applicable",
    ],
    icon: DraftingCompass,
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    alt: "Elegant residential interior showcasing contemporary interior design",
  },
  {
    id: "03",
    title: "Materials & Selection",
    shortTitle: "Curation",
    sub: "Details That Define the Space",
    desc: "We coordinate suitable finishes, furniture, fittings and materials to create a consistent design language while considering durability, maintenance and your agreed budget.",
    deliverables: [
      "Material and finish selection",
      "Furniture and fitting coordination",
      "Design consistency review",
    ],
    icon: ClipboardCheck,
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    alt: "Refined residential interior with coordinated textures and furniture",
  },
  {
    id: "04",
    title: "Technical Coordination",
    shortTitle: "Planning",
    sub: "Function Meets Design",
    desc: "We coordinate practical interior requirements, including furniture dimensions, electrical points, lighting positions and relevant execution details according to the approved project scope.",
    deliverables: [
      "Furniture and layout coordination",
      "Electrical and lighting planning",
      "Execution requirements",
    ],
    icon: Target,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern home interior illustrating space planning and lighting",
  },
  {
    id: "05",
    title: "Execution & Finishing",
    shortTitle: "Execution",
    sub: "Turning Plans into Reality",
    desc: "The approved design moves into execution, bringing together relevant interior work, furniture installation, painting and finishing with attention to workmanship and agreed project requirements.",
    deliverables: [
      "Interior work coordination",
      "Furniture and finishing works",
      "Progress and quality checks",
    ],
    icon: Hammer,
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    alt: "Completed living room interior with contemporary furniture and refined finishes",
  },
  {
    id: "06",
    title: "Final Review & Handover",
    shortTitle: "Handover",
    sub: "Ready for Everyday Living",
    desc: "We review the completed work against the agreed scope, address identified finishing items and coordinate the final handover so your space is ready for its intended use.",
    deliverables: [
      "Final finishing review",
      "Outstanding item coordination",
      "Project handover",
    ],
    icon: KeyRound,
    img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80",
    alt: "Finished residential interior with coordinated furniture and elegant details",
  },
];

const benefits = [
  {
    number: "01",
    title: "Clear Direction",
    description:
      "Start with defined requirements, design priorities and a shared understanding of your space.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Coordinated Details",
    description:
      "Bring layouts, materials, furniture and finishing decisions together into a cohesive plan.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Practical Execution",
    description:
      "Keep design intent, functionality and agreed project requirements aligned throughout the process.",
    icon: ClipboardCheck,
  },
];

export default function HyperrealisticFlute() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const whatsappNumber = "919345445898";
  const currentStep = steps[active];

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      "Hello Astra Interior, I would like to discuss an interior design project in Coimbatore. Please share your services and design process."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main
      id="design-process"
      className="overflow-hidden bg-[#F8F7F3] text-[#1A365D]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* SECTION 1 — INTRODUCTION */}

      <section className="relative px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#00A3C4]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#00A3C4]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A365D]">
                The Astra Design Process
              </span>
            </div>

            <h1
              id="process-heading"
              className="max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              From the first idea
              <br />
              <span className="font-medium italic text-[#0089A6]">
                to the final detail.
              </span>
            </h1>
          </div>

          <div className="max-w-[490px] lg:justify-self-end">
            <p className="text-base font-medium leading-8 text-[#374151] sm:text-lg sm:leading-9">
              Discover how Astra Interior approaches home interiors, villa
              interiors and commercial spaces in Coimbatore, Tamil Nadu.
              Our six-stage process brings design planning, material
              selection and execution together around your requirements.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1A365D]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CBD5E1] bg-white transition-colors hover:border-[#00A3C4]">
                <ArrowDownRight size={18} />
              </span>
              Explore our six stages
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTERACTIVE PROCESS */}

      <section
        aria-label="Interior design process stages"
        className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid overflow-hidden rounded-2xl border border-[#DDE4E9] bg-white shadow-xl shadow-[#1A365D]/5 lg:grid-cols-[0.88fr_1.12fr]">
            {/* LEFT — PROCESS NAVIGATION */}

            <div className="flex flex-col border-b border-[#DDE4E9] lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between bg-[#F7FAFC] px-5 py-5 sm:px-8">
                <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#1A365D]">
                  Project Roadmap
                </span>

                <span className="rounded-full bg-[#E5F7FA] px-3 py-1.5 text-sm font-bold tabular-nums text-[#007F98]">
                  {String(active + 1).padStart(2, "0")} / 06
                </span>
              </div>

              <div className="border-t border-[#DDE4E9]">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = active === index;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className={`group relative flex w-full items-center gap-4 border-b border-[#E8EDF1] px-5 py-5 text-left transition-all duration-300 last:border-b-0 sm:gap-5 sm:px-8 sm:py-6 ${
                        isActive
                          ? "bg-[#EAF8FB] text-[#1A365D]"
                          : "bg-white text-[#1A365D] hover:bg-[#F0F9FB]"
                      }`}
                    >
                      <span
                        className={`absolute bottom-0 left-0 top-0 w-1 transition-colors ${
                          isActive ? "bg-[#00A3C4]" : "bg-transparent"
                        }`}
                      />

                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "border-[#1A365D] bg-[#1A365D] text-white"
                            : "border-slate-200 bg-white text-[#1A365D] group-hover:border-[#00A3C4] group-hover:text-[#0089A6]"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`mb-2 block text-[11px] font-extrabold tracking-[0.13em] ${
                            isActive ? "text-[#0089A6]" : "text-[#64748B]"
                          }`}
                        >
                          STAGE {step.id}
                        </span>

                        <span
                          className="block text-base font-bold leading-snug tracking-tight text-[#1A365D] sm:text-lg"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {step.title}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className={`shrink-0 transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-[#0089A6] opacity-100"
                            : "-translate-x-1 text-[#64748B] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-[#DDE4E9] bg-[#F7FAFC] p-5 sm:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00A3C4]" />

                  <p className="text-sm font-semibold leading-7 text-[#374151] sm:text-base">
                    Every project is different. Deliverables, timelines and
                    execution requirements are agreed according to your
                    project scope.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — ACTIVE PROCESS DETAILS */}

            <div className="flex min-w-0 flex-col">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#E5E7EB] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[410px]">
                {steps.map((step, index) => (
                  <img
                    key={step.id}
                    src={step.img}
                    alt={index === active ? step.alt : ""}
                    aria-hidden={index !== active}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      active === index
                        ? "scale-100 opacity-100"
                        : "scale-[1.04] opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/90 via-[#0B1F35]/15 to-black/10" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-[#0B1F35]/75 px-4 py-3 backdrop-blur-sm sm:left-8 sm:top-8">
                  <span className="h-2 w-2 rounded-full bg-[#43D6ED]" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Stage {currentStep.id}
                  </span>
                </div>

                <div className="absolute bottom-6 left-5 right-5 sm:bottom-9 sm:left-9 sm:right-9">
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-200">
                    {currentStep.sub}
                  </p>

                  <h2
                    className="max-w-[580px] text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {currentStep.shortTitle}
                  </h2>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-sm font-extrabold tracking-[0.15em] text-[#0089A6]">
                    {currentStep.id}
                  </span>
                  <span className="h-[2px] w-8 bg-[#00A3C4]" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#475569]">
                    What This Stage Covers
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold tracking-tight text-[#1A365D] sm:text-3xl"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {currentStep.title}
                </h3>

                <p className="mt-4 max-w-[650px] text-base font-medium leading-8 text-[#374151] sm:text-lg sm:leading-9">
                  {currentStep.desc}
                </p>

                <div className="mt-7 border-t border-[#E2E8F0] pt-6">
                  <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#1A365D]">
                    Key Considerations
                  </p>

                  <ul className="grid gap-4 sm:grid-cols-2">
                    {currentStep.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-semibold leading-7 text-[#374151] sm:text-base"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5F7FA] text-[#007F98]">
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] pt-6">
                  <button
                    type="button"
                    onClick={() =>
                      setActive((active - 1 + steps.length) % steps.length)
                    }
                    className="min-h-[44px] text-xs font-extrabold uppercase tracking-[0.12em] text-[#475569] transition-colors hover:text-[#0089A6]"
                  >
                    Previous Stage
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActive((active + 1) % steps.length)
                    }
                    className="group inline-flex min-h-[48px] items-center gap-4 rounded-lg bg-[#1A365D] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#0089A6]"
                  >
                    {active === steps.length - 1
                      ? "Explore Again"
                      : "Next Stage"}

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PROCESS PROGRESS */}

          <div
            className="mt-4 flex gap-1.5"
            role="group"
            aria-label="Select a process stage"
          >
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to stage ${step.id}: ${step.title}`}
                aria-pressed={active === index}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  active === index
                    ? "bg-[#00A3C4]"
                    : "bg-[#D5DCE4] hover:bg-[#94A3B8]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}

      <section className="border-y border-[#DDE4E9] bg-[#EDF3F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 max-w-[750px] sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#00A3C4]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A365D]">
                The Astra Difference
              </span>
            </div>

            <h2
              className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#1A365D] sm:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Good interiors begin
              <br />
              <span className="font-medium italic text-[#0089A6]">
                with good decisions.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-0">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className={`rounded-xl border border-[#DDE4E9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3C4]/50 hover:shadow-lg sm:p-8 md:rounded-none md:border-b-0 md:border-l-0 md:border-r md:border-t-2 md:border-r-[#D4DEE5] md:px-7 md:py-8 md:shadow-none ${
                    index === 0
                      ? "md:border-t-[#00A3C4] md:pl-0"
                      : "md:border-t-[#D4DEE5]"
                  } ${index === 2 ? "md:border-r-0 md:pr-0" : ""}`}
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F7FA] text-[#0089A6]">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>

                    <span className="text-sm font-bold tracking-[0.12em] text-[#64748B]">
                      {benefit.number}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold text-[#1A365D] sm:text-2xl"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {benefit.title}
                  </h3>

                  <p className="mt-4 max-w-[350px] text-base font-medium leading-8 text-[#374151]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SEO CONTENT */}

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#00A3C4]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A365D]">
                Interior Design in Coimbatore
              </span>
            </div>

            <h2
              className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#1A365D] sm:text-5xl"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              A considered approach to
              <br />
              <span className="font-medium italic text-[#0089A6]">
                every interior project.
              </span>
            </h2>

            <p className="mt-7 max-w-[650px] text-base font-medium leading-8 text-[#374151] sm:text-lg sm:leading-9">
              Looking for interior designers in Coimbatore? Astra Interior
              brings together design planning, material selection, furniture
              concepts and finishing considerations for residential and
              commercial interiors. Whether you are planning home interiors,
              a villa, a modular kitchen or an office, our process starts
              with understanding your space and priorities.
            </p>

            <p className="mt-5 max-w-[650px] text-base font-medium leading-8 text-[#374151]">
              We discuss your design preferences, intended use, budget and
              project scope before identifying a suitable design direction.
              Each stage is tailored to the work required, helping keep
              decisions coordinated from concept through execution.
            </p>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="group mt-8 inline-flex min-h-[52px] items-center gap-4 rounded-lg bg-white px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1A365D] ring-1 ring-[#CBD5E1] transition-all duration-300 hover:bg-[#1A365D] hover:text-white hover:ring-[#1A365D]"
            >
              Explore Interior Design Services
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* ENQUIRY CARD */}

          <div className="relative overflow-hidden rounded-2xl bg-[#1A365D] p-7 text-white shadow-xl shadow-[#1A365D]/10 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/5 text-cyan-200">
                <MessageCircle size={22} strokeWidth={1.8} />
              </span>

              <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-200">
                Start a Conversation
              </p>

              <h3
                className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Your space.
                <br />
                Your priorities.
                <br />
                <span className="font-medium italic text-cyan-200">
                  Your vision.
                </span>
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/90">
                Tell us what you have in mind. Start a conversation with
                Astra Interior about your home, villa or workspace.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="group mt-8 flex min-h-[56px] w-full items-center justify-between gap-4 rounded-lg bg-white px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[#1A365D] transition-all duration-300 hover:bg-[#00A3C4] hover:text-white sm:px-6"
              >
                Discuss on WhatsApp
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
