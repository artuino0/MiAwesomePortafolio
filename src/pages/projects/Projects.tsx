import { projects, GITHUB_PROFILE, type Project } from "../../data/data";
import { useI18n } from "../../i18n/I18nContext";

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useI18n();
  const meta = t.work.projects[project.id as keyof typeof t.work.projects];
  const href = project.link || project.github || undefined;

  return (
    <a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-bg transition-colors ${
        href ? "hover:border-primary" : "cursor-default"
      }`}
    >
      <div className="flex h-32 items-end bg-gradient-to-br from-[#0C1E38] to-black p-3.5">
        <span className="font-heading text-xs tracking-wider text-primary-soft">{project.stack}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-xl leading-tight text-fg">{meta.title}</h3>
        <p className="flex-1 font-body text-sm leading-relaxed text-muted">{meta.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const { t } = useI18n();

  return (
    <section id="work" className="section-anchor bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-primary">{t.work.index}</span>
            <h2 className="font-heading text-5xl text-fg lg:text-6xl">{t.work.title}</h2>
          </div>
          <span className="font-mono text-xs tracking-widest text-muted">{t.work.count}</span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-sm border border-border px-7 py-3.5 font-mono text-sm tracking-wide text-fg transition-colors hover:border-primary hover:text-primary"
          >
            {t.work.seeAll}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
