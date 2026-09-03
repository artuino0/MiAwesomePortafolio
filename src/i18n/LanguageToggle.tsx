import { LANGS } from "./translations";
import { useI18n } from "./I18nContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useI18n();
  return (
    <div className={`flex items-center gap-1 font-mono text-xs ${className}`} role="group" aria-label="Language">
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-border">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`uppercase tracking-widest transition-colors ${
              lang === code ? "text-primary" : "text-muted hover:text-fg"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageToggle;
