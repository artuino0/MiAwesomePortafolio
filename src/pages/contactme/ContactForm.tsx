import { useI18n } from "../../i18n/I18nContext";

const ContactForm = () => {
  const { t } = useI18n();

  const links = [
    { label: t.contact.email, href: "mailto:arturosistemas94@gmail.com" },
    { label: t.contact.linkedin, href: "https://www.linkedin.com/in/arturo-mu%C3%B1oz1994/" },
    { label: t.contact.github, href: "https://github.com/artuino0" },
    { label: t.contact.whatsapp, href: "https://wa.link/ekapdt" },
  ];

  return (
    <section id="contact" className="section-anchor bg-bg">
      <div className="mx-auto flex max-w-content flex-col items-center px-6 py-28 text-center md:px-10 lg:px-16 lg:py-36">
        <p className="font-mono text-xs tracking-[0.2em] text-primary">{t.contact.index}</p>

        <h2 className="mt-6 font-heading text-5xl leading-[0.95] text-fg sm:text-6xl lg:text-7xl">
          {t.contact.title1}
          <br />
          <span className="text-primary">{t.contact.title2}</span>
        </h2>

        <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted">{t.contact.sub}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border px-6 py-3 font-mono text-xs tracking-widest text-fg transition-colors hover:border-primary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
