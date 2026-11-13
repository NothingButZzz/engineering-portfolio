import ScrollReveal from "@/components/animation/ScrollReveal";
import { asset } from "@/lib/utils";

/** The video is hosted once on the main site (same origin on GitHub Pages). */
const VIDEO_SRC = "https://nothingbutzzz.github.io/media/netherlands-2026.mp4";

const photos = [
  { src: "/media/nl/cobot.webp", caption: "Pre-departure · Collaborative robots" },
  { src: "/media/nl/philips.webp", caption: "Philips Museum" },
  { src: "/media/nl/high-tech-campus.webp", caption: "High Tech Campus Eindhoven" },
  { src: "/media/nl/pcb-wall.webp", caption: "Apple Museum · Early circuit boards" },
  { src: "/media/nl/tu-delft.webp", caption: "TU Delft" },
  { src: "/media/nl/tu-eindhoven.webp", caption: "TU Eindhoven" },
];

/** Featured overseas program: team film + photo strip. */
export default function Journey() {
  return (
    <ScrollReveal>
      <div className="glass-panel mt-16 p-6 sm:p-10">
        <p className="tech-label">Featured · Netherlands 2026</p>
        <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
          Youth Overseas Dream Fund — Smart Manufacturing Mobility
        </h3>
        <p className="mt-4 max-w-2xl text-muted">
          A summer studying engineering in practice: a century of R&amp;D at the
          Philips Museum, the High Tech Campus in Eindhoven, and the campuses of
          TU Delft and TU Eindhoven. Our team&apos;s film (narrated in Mandarin):
        </p>

        <video
          className="mt-8 aspect-video w-full rounded-2xl border border-white/10 bg-bg"
          src={VIDEO_SRC}
          poster={asset("/media/nl/tu-eindhoven.webp")}
          controls
          playsInline
          preload="none"
        />

        <p
          id="journey-questions"
          className="mt-6 scroll-mt-24 rounded-r-lg border-l-2 border-accent/50 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-muted"
        >
          Questions about the Youth Overseas Dream Fund program? Feel free to
          ask via this Instagram account:{" "}
          <a
            href="https://www.instagram.com/gj.kl.journey_9.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            @gj.kl.journey_9.1
          </a>
          .
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src}>
              <figure className="overflow-hidden rounded-xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-sized WebP */}
                <img
                  src={asset(photo.src)}
                  alt={photo.caption}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <figcaption className="px-3 py-2 text-xs text-faint">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
