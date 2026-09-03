import { useI18n } from "../i18n/I18nContext";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-8 md:flex-row md:justify-between md:px-10 lg:px-16">
        <span className="font-mono text-sm text-fg">{"<arturo.muñoz/>"}</span>
        <span className="font-mono text-xs text-muted">{t.footer.copy}</span>
        <a href="#home" className="font-mono text-xs tracking-widest text-muted transition-colors hover:text-primary">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
