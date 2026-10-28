
import { useEffect, useState } from "react";

export default function ScrollCharacter() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const maxScroll = doc.scrollHeight - window.innerHeight;

        setProgress(
          maxScroll > 0
            ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
            : 0
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const top = 12 + progress * 76;
  const rotation = Math.sin(progress * Math.PI * 6) * 18;
  const tilt = -12 + progress * 24;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Scroll progress */}
      <div className="absolute bottom-[5%] right-4 top-[5%] w-[3px] rounded-full bg-slate-400/20 sm:right-7">
        <div
          className="w-full rounded-full bg-gradient-to-b from-cyan-400 to-blue-800"
          style={{
            height: `${progress * 100}%`,
            boxShadow: "0 0 12px #06b6d466",
          }}
        />
      </div>

      {/* Cartoon character */}
      <div
        className="absolute left-[78%] sm:left-[88%]"
        style={{
          top: `${top}%`,
          transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
          transition: "top 100ms linear",
        }}
      >
        <div
          className="relative h-32 w-24 sm:h-40 sm:w-28"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformStyle: "preserve-3d",
            filter: "drop-shadow(5px 10px 5px rgba(0,0,0,.18))",
          }}
        >
          {/* Hard hat */}
          <div
            className="absolute left-[25px] top-0 z-20 h-5 w-14 rounded-t-full border-b-4 border-yellow-700 sm:left-[30px] sm:h-6 sm:w-16"
            style={{
              background:
                "linear-gradient(135deg,#fff7ad 0%,#facc15 38%,#ca8a04 100%)",
              boxShadow: "inset 2px 2px 3px #ffffffa0",
            }}
          />
          <div
            className="absolute left-[20px] top-4 z-20 h-2 w-[66px] rounded-full border-b border-yellow-800 sm:left-[25px] sm:top-5 sm:w-[76px]"
            style={{
              background: "linear-gradient(#fde047,#eab308)",
            }}
          />

          {/* Face */}
          <div
            className="absolute left-[29px] top-[17px] z-10 h-10 w-12 rounded-[40%] border border-orange-300 sm:left-[34px] sm:top-5 sm:h-12 sm:w-14"
            style={{
              background:
                "linear-gradient(135deg,#ffdbac,#f2ad72 65%,#d98550)",
            }}
          >
            {/* Hair */}
            <div className="absolute -top-1 left-1 h-3 w-8 rounded-t-full bg-stone-800" />

            {/* Eyes */}
            <div className="absolute left-2 top-4 h-2 w-2 rounded-full bg-white">
              <div className="ml-1 h-1.5 w-1 rounded-full bg-stone-900" />
            </div>
            <div className="absolute right-2 top-4 h-2 w-2 rounded-full bg-white">
              <div className="ml-1 h-1.5 w-1 rounded-full bg-stone-900" />
            </div>

            {/* Smile */}
            <div className="absolute bottom-2 left-4 h-1.5 w-4 rounded-b-full border-b-2 border-stone-800" />
          </div>

          {/* Body / work vest */}
          <div
            className="absolute left-[25px] top-[54px] z-10 h-11 w-14 rounded-xl border border-orange-700 sm:left-[30px] sm:top-[63px] sm:h-14 sm:w-16"
            style={{
              background:
                "linear-gradient(110deg,#fb923c,#ea580c 55%,#9a3412)",
            }}
          >
            {/* Reflective vest stripes */}
            <div className="absolute left-0 top-3 h-2 w-full bg-yellow-100 shadow-sm" />
            <div className="absolute left-0 top-7 h-1.5 w-full bg-yellow-100/90 sm:top-9" />

            {/* Pocket */}
            <div className="absolute right-2 top-1 h-3 w-3 rounded-sm border border-orange-950/40 bg-orange-300/50" />
          </div>

          {/* Left arm */}
          <div
            className="absolute left-[13px] top-[57px] z-0 h-7 w-4 rounded-full border border-orange-800"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#c2410c)",
              transform: "rotate(28deg)",
            }}
          />

          {/* Right arm */}
          <div
            className="absolute right-[12px] top-[55px] z-20 h-7 w-4 rounded-full border border-orange-800"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#c2410c)",
              transform: "rotate(-28deg)",
            }}
          />

          {/* Trousers */}
          <div
            className="absolute left-[31px] top-[94px] z-0 h-6 w-5 rounded-b-md border border-blue-950 sm:left-[37px] sm:top-[118px] sm:h-7"
            style={{
              background: "linear-gradient(90deg,#1e3a8a,#2563eb)",
            }}
          />
          <div
            className="absolute left-[49px] top-[94px] z-0 h-6 w-5 rounded-b-md border border-blue-950 sm:left-[56px] sm:top-[118px] sm:h-7"
            style={{
              background: "linear-gradient(90deg,#2563eb,#172554)",
            }}
          />

          {/* Boots */}
          <div className="absolute left-[25px] top-[116px] h-3 w-7 rounded-md border-b-2 border-stone-950 bg-stone-700 sm:left-[31px] sm:top-[144px] sm:h-4 sm:w-8" />
          <div className="absolute left-[47px] top-[116px] h-3 w-7 rounded-md border-b-2 border-stone-950 bg-stone-800 sm:left-[55px] sm:top-[144px] sm:h-4 sm:w-8" />

          {/* Floating sparkle */}
          <div
            className="absolute -right-2 top-9 text-xl font-black text-cyan-500"
            style={{
              transform: `rotate(${progress * 360}deg)`,
            }}
          >
            ✦
          </div>
        </div>
      </div>
    </div>
  );
}
