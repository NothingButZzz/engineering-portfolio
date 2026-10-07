import type { Project, ProjectMedia } from "@/types";
import { asset } from "@/lib/utils";

/** Engineering case-study card (spec 06 §9). */
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const accent =
    project.accent === "green" ? "var(--color-accent-2)" : "var(--color-accent)";

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/60 p-8 transition-all duration-500 hover:border-white/20 sm:p-10"
      style={{ transitionTimingFunction: "var(--ease-mech)" }}
    >
      {/* hover glow */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
        style={{ background: accent }}
        aria-hidden
      />

      {/* large engineering index numeral */}
      <span
        className="pointer-events-none absolute right-6 top-4 select-none font-[family-name:var(--font-mono)] text-6xl font-bold leading-none text-white/[0.04] sm:text-7xl"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              {project.category}
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-faint">
            {project.year}
          </span>
        </div>

        {project.images && <Gallery images={project.images} />}

        {project.video && (
          <figure className="mt-3">
            <video
              className="aspect-video w-full rounded-2xl border border-white/10 bg-bg"
              src={project.video.src}
              poster={project.images ? asset(project.images[0].src) : undefined}
              controls
              playsInline
              preload="none"
            />
            <figcaption className="mt-2 text-xs text-faint">
              {project.video.caption}
            </figcaption>
          </figure>
        )}

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <CaseField term="Problem" desc={project.problem} />
          <CaseField term="Solution" desc={project.solution} />
        </dl>

        <div className="mt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-faint">
            Technology
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6">
          <span
            className="mt-1 h-2 w-2 shrink-0 rounded-full"
            style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
          />
          <p className="text-sm text-muted">
            <span className="text-fg">Result — </span>
            {project.result}
          </p>
        </div>
      </div>
    </article>
  );
}

function CaseField({ term, desc }: { term: string; desc: string }) {
  return (
    <div>
      <dt className="mb-2 text-xs uppercase tracking-[0.2em] text-faint">
        {term}
      </dt>
      <dd className="text-sm leading-relaxed text-muted">{desc}</dd>
    </div>
  );
}

/** Cover photo plus a strip of thumbnails; each opens the full image. */
function Gallery({ images }: { images: ProjectMedia[] }) {
  const [cover, ...rest] = images;
  return (
    <div className="mt-8">
      <Shot media={cover} className="aspect-[16/10] !object-contain" />
      {rest.length > 0 && (
        <ul className="mt-3 grid grid-cols-3 gap-3">
          {rest.map((m) => (
            <li key={m.src}>
              <Shot media={m} className="aspect-[4/3]" small />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Shot({
  media,
  className,
  small,
}: {
  media: ProjectMedia;
  className: string;
  small?: boolean;
}) {
  return (
    <a
      href={asset(media.src)}
      target="_blank"
      rel="noreferrer"
      className="group/shot block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-sized WebP */}
      <img
        src={asset(media.src)}
        alt={media.caption}
        loading="lazy"
        className={`${className} w-full object-cover transition-transform duration-500 group-hover/shot:scale-105`}
      />
      <span
        className={`block px-3 py-2 text-faint ${small ? "truncate text-[0.7rem]" : "text-xs"}`}
      >
        {media.caption}
      </span>
    </a>
  );
}
