import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

/**
 * HeroNextGen.fixed.tsx
 * Improved & fixed single-file React/Next component (TypeScript).
 * Changes / fixes applied:
 * - Typewriter: safe for empty `texts`, stable indices, minor timing tweaks
 * - Particle canvas: explicit DPR, safe ctx checks, ResizeObserver for crisp sizing,
 *   better particle scaling and cleanup
 * - Parallax: attach to container, clamp values, add device orientation fallback for mobile
 * - Accessibility: aria-labels, role where appropriate, clearer button labels
 * - Minor visual fixes: shimmer applied to card container, initial CSS var defaults
 * - Defensive coding & cleanup on unmount
 *
 * Drop into a Next.js page where Tailwind is enabled.
 */

const Typewriter: React.FC<{ texts: string[]; speed?: number }> = ({ texts, speed = 70 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    // ensure index is always valid
    const curIndex = index % texts.length;
    const current = texts[curIndex];

    const tick = () => {
      if (forward) {
        if (subIndex < current.length) setSubIndex((s) => s + 1);
        else setForward(false);
      } else {
        if (subIndex > 0) setSubIndex((s) => s - 1);
        else {
          setForward(true);
          setIndex((i) => (i + 1) % texts.length);
        }
      }
    };

    const id = window.setTimeout(tick, forward ? speed : Math.max(20, Math.floor(speed / 2)));
    return () => window.clearTimeout(id);
  }, [subIndex, index, texts, forward, speed]);

  if (!texts || texts.length === 0) return null;
  const curIndex = index % texts.length;
  return (
    <span className="whitespace-nowrap" aria-live="polite">
      {texts[curIndex].slice(0, subIndex)}
      <span className="blink" aria-hidden="true">|</span>
    </span>
  );
};

const useParallax = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // set initial vars
    node.style.setProperty("--px", "0");
    node.style.setProperty("--py", "0");

    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    const handleMouse = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = clamp((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5);
      const y = clamp((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5);
      node.style.setProperty("--px", String(x));
      node.style.setProperty("--py", String(y));
    };

    // pointermove on the node so it respects nested layout
    node.addEventListener("pointermove", handleMouse as any);

    // mobile tilt fallback
    const handleOrientation = (ev: DeviceOrientationEvent) => {
      if (ev.gamma == null || ev.beta == null) return;
      // gamma: left-to-right [-90,90], beta: front-to-back [-180,180]
      const x = clamp((ev.gamma / 90) * 0.5); // scale down influence
      const y = clamp((ev.beta / 180) * 0.5);
      node.style.setProperty("--px", String(x));
      node.style.setProperty("--py", String(y));
    };

    window.addEventListener("deviceorientation", handleOrientation as any, true);

    return () => {
      node.removeEventListener("pointermove", handleMouse as any);
      window.removeEventListener("deviceorientation", handleOrientation as any, true);
    };
  }, []);

  return ref;
};

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<any[]>([]);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const initParticles = (n = 60) => {
      const w = canvas.width;
      const h = canvas.height;
      particlesRef.current = Array.from({ length: n }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4 * DPR,
        vy: (Math.random() - 0.5) * 0.4 * DPR,
        r: (0.5 + Math.random() * 2.2) * DPR,
        hue: 200 + Math.random() * 60,
      }));
    };

    setSize();
    initParticles(80);

    let last = performance.now();

    const render = (t: number) => {
      const dtRaw = t - last;
      const dt = Math.min(50, dtRaw) / 16.666;
      last = t;

      // clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw particles
      for (const p of particlesRef.current) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `hsla(${p.hue},90%,60%,0.95)`);
        grad.addColorStop(0.2, `hsla(${p.hue},80%,60%,0.6)`);
        grad.addColorStop(1, `hsla(${p.hue},60%,50%,0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // connect close particles (use squared distance threshold)
      const maxDist = 180 * DPR; // tuned for typical screen sizes
      const maxD2 = maxDist * maxDist;
      const parts = particlesRef.current;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i];
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD2) {
            const alpha = 0.06 * (1 - d2 / maxD2);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    // ResizeObserver so canvas stays crisp even when container changes
    resizeObserverRef.current = new ResizeObserver(() => {
      setSize();
      // re-init particles proportionally to visible area
      const rect = canvas.getBoundingClientRect();
      const area = rect.width * rect.height;
      const count = Math.max(30, Math.floor(area / 80000));
      initParticles(count);
    });

    resizeObserverRef.current.observe(canvas);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      resizeObserverRef.current?.disconnect();
      particlesRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
      aria-hidden
    />
  );
};

const HeroNextGen: React.FC = () => {
  const parallaxRef = useParallax();
  const texts = ["Full-stack Engineer", "ML Researcher", "Novel Algorithm Creator", "Competition Winner"];

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden flex items-center"
      ref={parallaxRef as any}
      aria-label="Hero: Augustine — Full-stack Engineer & ML Researcher"
      role="region"
    >
      {/* particle canvas */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-black via-slate-900 to-slate-800 opacity-80" />
        <ParticleCanvas />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Headline + CTAs */}
          <div className="col-span-7 text-left lg:pr-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm border border-white/10 text-sm font-medium">Available for projects</div>
         
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              <span className="block">I build</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300">production-grade apps</span>
              <span className="block text-lg mt-3 text-muted-foreground">and ship research that changes systems.</span>
            </h1>

            <div className="mt-6 text-lg text-slate-200 max-w-2xl">
              <Typewriter texts={texts} speed={60} />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-black px-5 py-3 rounded-full font-semibold shadow-2xl hover:scale-[1.02] transition-transform"
                aria-label="View my projects"
              >
                View My Work <ArrowDown className="w-4 h-4" />
              </button>

              {/* <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 rounded-full text-white/90 hover:bg-white/4 transition-colors"
                aria-label="Contact me"
              >
                Collaborate
              </button> */}
            </div>

            <div className="mt-8 text-sm text-muted-foreground max-w-lg">
              <strong>Highlights:</strong> ICZ Research & ML winner (Bexman) • Claxon Data Science winner (Credit Risk) • Full-stack (Next.js, React, Node, Supabase) • ML pipelines in Python.
            </div>
          </div>

          {/* Right: 3D Glass Card + floating mini-cards */}
          <div className="col-span-5 relative">
            <div
              className="transform-gpu will-change-transform"
              style={{
                transform: `perspective(1200px) translateZ(0) rotateY(calc(var(--px, 0) * 8deg)) rotateX(calc(var(--py, 0) * -6deg))`,
              }}
            >
              <div className="mx-auto max-w-sm">
                <div className="rounded-3xl bg-white/6 border border-white/8 backdrop-blur-xl p-6 shadow-2xl overflow-hidden relative card-shimmer" style={{ transform: "translateZ(40px)" }}>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-400 flex items-center justify-center text-white font-bold text-lg">R</div>
                    <div>
                      <div className="text-white font-semibold">Augustine — Full-stack & ML</div>
                      <div className="text-sm text-muted-foreground">Bexman • Credit Risk • Aura</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-slate-100">• Bexman: Novel clustering algorithm  (ICZ research winner)</div>
                    <div className="text-sm text-slate-100">• Credit-risk scoring (Claxon winner)</div>
                    <div className="text-sm text-slate-100">• Resource optimization & deployable ML pipelines</div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button
                     className="flex-1 py-2 rounded-md bg-white/8 border border-white/6 text-white text-sm" aria-label="View projects from card">Next Generation</button>
                    {/* <button className="py-2 px-3 rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 text-black text-sm" aria-label="Contact from card">Contact</button> */}
                  </div>
                </div>

                {/* floating mini-cards */}
                {/* <div className="relative -mt-8">
                  <div className="absolute -left-10 -top-8 w-40 p-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-md shadow-lg" style={{ transform: "rotate(-6deg) translateZ(20px)" }}>
                    <div className="text-xs text-muted-foreground">Published</div>
                    <div className="text-sm font-semibold text-white">Bexman Paper</div>
                  </div>

                  <div className="absolute right-0 top-10 w-44 p-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-md shadow-lg" style={{ transform: "rotate(4deg) translateZ(10px)" }}>
                    <div className="text-xs text-muted-foreground">Deployed</div>
                    <div className="text-sm font-semibold text-white">Credit Scoring UI</div>
                  </div>
                </div> */}

              </div>
            </div>

            {/* Depth shimmer */}
            <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 mix-blend-screen" aria-hidden />
            <div className="absolute right-0 -bottom-16 w-56 h-56 rounded-full blur-2xl opacity-20 bg-gradient-to-tr from-yellow-300 to-red-400 mix-blend-screen" aria-hidden />
          </div>
        </div>
      </div>

      {/* small accessible aria label already on section */}

      <style >{`
        .blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0 } }

        /* small responsive tweaks */
        @media (max-width: 1024px) {
          section { padding-top: 2rem; padding-bottom: 2rem; }
        }

        /* subtle shimmer for 3D card */
        .card-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          transform: translateX(-100%);
          animation: shimmer 3.5s linear infinite;
          pointer-events: none;
        }
        @keyframes shimmer { to { transform: translateX(100%); } }
      `}</style>
    </section>
  );
};

export default HeroNextGen;
