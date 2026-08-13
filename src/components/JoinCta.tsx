import Link from "next/link";

export default function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-navy to-dark text-white">
      <div
        className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Join Us
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">
          In Our Journey
        </h2>
        <p className="text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
          At EML, we are not just building mini-grids; we&rsquo;re lighting
          up lives, empowering communities, and fostering a sustainable
          future for Nigeria. Explore our projects, understand our impact,
          and join us in our mission to electrify Nigeria&rsquo;s rural
          landscapes for a brighter tomorrow.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-accent hover:text-dark hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Contact Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
