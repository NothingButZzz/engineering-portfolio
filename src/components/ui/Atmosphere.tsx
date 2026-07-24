/**
 * Page-wide cinematic overlay: a very faint film grain + horizontal scanlines
 * for filmic cohesion across sections (spec 02 §13 cinematic contrast).
 * Fixed and non-interactive; extremely low opacity so it reads as texture,
 * never as noise.
 */
export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden>
      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
