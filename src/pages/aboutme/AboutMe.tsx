import cv from "../../assets/doc/Arturo_Munoz_CV.pdf";
import { useI18n } from "../../i18n/I18nContext";

const AboutMe = () => {
  const { t } = useI18n();

  const meta = [
    { k: t.about.roleK, v: t.about.roleV },
    { k: t.about.backendK, v: t.about.backendV },
    { k: t.about.frontendK, v: t.about.frontendV },
    { k: t.about.locationK, v: t.about.locationV },
    { k: t.about.industryK, v: t.about.industryV },
  ];

  return (
    <section id="about" className="section-anchor bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-primary">{t.about.index}</span>
          <h2 className="font-heading text-5xl text-fg lg:text-6xl">{t.about.title}</h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6 font-body text-[15px] leading-[1.7] text-muted md:text-base">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="flex flex-col">
            <dl className="divide-y divide-border border-y border-border">
              {meta.map((m) => (
                <div key={m.k} className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-mono text-xs tracking-widest text-muted">{m.k}</dt>
                  <dd className="text-right font-mono text-xs text-fg">{m.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              className="mt-6 rounded-sm border border-border px-6 py-3 text-center font-mono text-xs tracking-widest text-fg transition-colors hover:border-primary hover:text-primary"
            >
              {t.about.cv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
