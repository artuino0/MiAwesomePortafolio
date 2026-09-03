import cv from "../../assets/doc/Arturo_Munoz_CV.pdf";
import { useI18n } from "../../i18n/I18nContext";

const Presentation = () => {
  const { t } = useI18n();

  const stats = [
    { num: "20+", label: t.hero.statProjects },
    { num: "6+", label: t.hero.statStacks },
    { num: "3", label: t.hero.statBackends },
  ];

  return (
    <header id="home" className="section-anchor relative overflow-hidden bg-bg">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-glow pointer-events-none absolute -left-40 top-24 h-[620px] w-[1100px] max-w-full" aria-hidden />

      <div className="relative mx-auto max-w-content px-6 pb-28 pt-36 md:px-10 lg:px-16 lg:pb-36 lg:pt-44">
        <p className="font-mono text-sm tracking-[0.2em] text-primary">{t.hero.eyebrow}</p>

        <h1 className="mt-6 font-heading text-6xl leading-[0.95] text-fg sm:text-7xl lg:text-8xl">
          {t.hero.line1}
          <br />
          <span className="text-primary">{t.hero.line2}</span>
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
    </header>
  );
};

export default Presentation;
