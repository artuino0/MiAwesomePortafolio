import { useEffect, useRef, useState } from "react";

const LIFETIME = 2000; // ms que dura la estela antes de borrarse
const MIN_STEP = 12; // px minimos entre muestras
const MAX_POINTS = 36;
const R = 150; // radio de cada punto de la estela (px)

interface Pt {
  x: number;
  y: number;
  t: number;
}

/**
 * Malla del hero. Patron base estatico muy tenue + una malla azul brillante
 * encima que solo se revela bajo una mascara con forma de estela: el cursor va
 * dejando rastro y cada punto se desvanece en ~2s. Sin puntero fino o con
 * prefers-reduced-motion queda solo el patron base.
 */
const InteractiveGrid = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const litRef = useRef<HTMLDivElement>(null);
  const ptsRef = useRef<Pt[]>([]);
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setInteractive(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    const wrap = wrapRef.current;
    const lit = litRef.current;
    if (!wrap || !lit) return;

    const frame = () => {
      const now = performance.now();
      const pts = ptsRef.current.filter((p) => now - p.t < LIFETIME);
      ptsRef.current = pts;

      if (!pts.length) {
        lit.style.opacity = "0";
        rafRef.current = 0;
        return;
      }
      lit.style.opacity = "1";

      const layers = pts
        .map((p) => {
          const k = 1 - (now - p.t) / LIFETIME;
          const a = Math.pow(Math.max(0, k), 1.6);
          return `radial-gradient(${R}px ${R}px at ${p.x.toFixed(1)}px ${p.y.toFixed(1)}px, rgba(0,0,0,${a.toFixed(
            3,
          )}) 0%, rgba(0,0,0,${(a * 0.35).toFixed(3)}) 45%, transparent 72%)`;
        })
        .join(",");
      lit.style.webkitMaskImage = layers;
      lit.style.maskImage = layers;

      rafRef.current = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(frame);
    };
    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < -R || y < -R || x > r.width + R || y > r.height + R) return;
      const last = lastRef.current;
      if (last && Math.hypot(x - last.x, y - last.y) < MIN_STEP) return;
      lastRef.current = { x, y };
      const arr = ptsRef.current;
      arr.push({ x, y, t: performance.now() });
      if (arr.length > MAX_POINTS) arr.splice(0, arr.length - MAX_POINTS);
      kick();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [interactive]);

  return (
    <div ref={wrapRef} className="hero-mesh pointer-events-none absolute inset-0" aria-hidden>
      <div className="hero-grid absolute inset-0" />
      {interactive && <div ref={litRef} className="hero-grid-lit absolute inset-0" />}
    </div>
  );
};

export default InteractiveGrid;
