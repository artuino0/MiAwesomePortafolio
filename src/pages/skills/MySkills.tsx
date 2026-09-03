import { useI18n } from "../../i18n/I18nContext";

interface HardSkill {
  name: string;
  cert?: string;
}

const HARD_SKILLS: HardSkill[] = [
  { name: "ANGULAR", cert: "https://community.open-bootcamp.com/user/therealsc/certificaciones/d95f15b4-84d6-4b5e-89c9-85378c649ab7" },
  { name: "REACT", cert: "https://community.open-bootcamp.com/user/therealsc/certificaciones/8e6f7461-3004-4b73-b01e-53e101ccff47" },
  { name: "NODE.JS", cert: "https://www.udemy.com/certificate/UC-02af85e9-7ce9-46de-b0d8-e6bc4bcecd94/" },
  { name: "SQL", cert: "https://community.open-bootcamp.com/user/therealsc/certificaciones/39f51d2f-36db-44bc-8de3-f67c34899368" },
  { name: "MONGODB" },
  { name: "POWER BI" },
  { name: "PYTHON" },
  { name: "VUE.JS" },
];

const MySkills = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-anchor bg-bg">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-primary">{t.skills.index}</span>
          <h2 className="font-heading text-5xl text-fg lg:text-6xl">{t.skills.title}</h2>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_400px]">
          <div>
            <p className="font-mono text-xs tracking-widest text-primary">{t.skills.hard}</p>
            <ul className="mt-6">
              {HARD_SKILLS.map((s, i) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between gap-4 border-b border-border py-4 first:border-t"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-heading text-2xl text-fg md:text-3xl">{s.name}</span>
                  </span>
                  {s.cert ? (
                    <a
                      href={s.cert}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-sm border border-primary px-2.5 py-1 font-mono text-[10px] tracking-widest text-primary transition-colors hover:bg-primary hover:text-bg"
                    >
                      {t.skills.certified}
                    </a>
                  ) : (
                    <span className="shrink-0 font-mono text-muted">—</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-primary">{t.skills.soft}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {t.skills.softList.map((skill) => (
                <li key={skill} className="flex items-center gap-3 font-body text-sm text-fg">
                  <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
