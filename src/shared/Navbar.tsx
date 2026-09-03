import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import LanguageToggle from "../i18n/LanguageToggle";

const LINKS = [
  { key: "home" as const, href: "#home" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "work" as const, href: "#work" },
];

const Navbar = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? "border-border bg-black/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a href="#home" onClick={close} className="font-mono text-lg text-fg md:text-xl">
          {"<arturo.muñoz/>"}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="font-mono text-[13px] tracking-widest text-muted transition-colors hover:text-fg"
            >
              {t.nav[l.key]}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-sm bg-primary px-5 py-2 font-mono text-[13px] tracking-widest text-bg transition-opacity hover:opacity-90"
          >
            {t.nav.contact}
          </a>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-fg lg:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-black/95 lg:hidden">
          <div className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={close}
                className="py-2 font-mono text-sm tracking-widest text-muted transition-colors hover:text-fg"
              >
                {t.nav[l.key]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 rounded-sm bg-primary px-5 py-2 text-center font-mono text-[13px] tracking-widest text-bg"
            >
              {t.nav.contact}
            </a>
            <LanguageToggle className="mt-3" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
