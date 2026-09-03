import { useEffect, useState } from "react";
import cv from "../../assets/doc/Arturo_Munoz_CV.pdf";
import { useI18n } from "../../i18n/I18nContext";
import InteractiveGrid from "./InteractiveGrid";

function useTypewriter(text: string, speed = 70) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed]);

  return { out, done };
}

const Presentation = () => {
  const { t } = useI18n();
  const { out: typed, done } = useTypewriter(t.hero.line2);

  const stats = [
    { num: "20+", label: t.hero.statProjects },
    { num: "6+", label: t.hero.statStacks },
    { num: "3", label: t.hero.statBackends },
  ];

  return (
    <header id="home" className="section-anchor relative overflow-hidden bg-bg">
      <InteractiveGrid />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="hero-reveal relative mx-auto max-w-content px-6 pb-28 pt-36 md:px-10 lg:px-16 lg:pb-36 lg:pt-44">
        <p className="font-mono text-sm tracking-[0.2em] text-primary">{t.hero.eyebrow}</p>

        <h1 className="mt-6 font-heading text-6xl leading-[0.95] text-fg sm:text-7xl lg:text-8xl">
          {t.hero.line1}
          <br />
          <span className="text-primary">
            {typed}
            {!done && <span className="type-caret" aria-hidden />}
          </span>
        </h1>

        <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-muted md:text-lg">{t.hero.sub}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-sm bg-primary px-7 py-3.5 font-mono text-sm tracking-wide text-bg transition-opacity hover:opacity-90"
          >
            {t.hero.viewWork}
          </a>
          <a
            href={cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-7 py-3.5 font-mono text-sm tracking-wide text-fg transition-colors hover:border-primary hover:text-primary"
          >
            {t.hero.downloadCv}
          </a>
        </div>

        <dl className="mt-16 flex flex-wrap gap-x-14 gap-y-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-heading text-4xl text-fg">{s.num}</dt>
              <dd className="mt-1 font-mono text-xs tracking-widest text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#work"
        aria-label={t.hero.viewWork}
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted transition-colors group-hover:text-primary">
          SCROLL
        </span>
        <span className="hero-scroll flex h-9 w-5 justify-center rounded-full border border-border pt-1.5 transition-colors group-hover:border-primary">
          <span className="hero-scroll-dot h-1.5 w-1.5 rounded-full bg-muted transition-colors group-hover:bg-primary" />
        </span>
      </a>
    </header>
  );
};

export default Presentation;
