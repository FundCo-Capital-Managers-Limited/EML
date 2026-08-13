const STATES = ["Jigawa", "Cross River", "Katsina", "Ondo", "Plateau", "Kogi", "Kano"];

export default function OperationsMap() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Where We Work
        </h2>
        <p className="mx-auto max-w-2xl text-text-secondary">
          Our mini-grid sites span seven states across Nigeria&rsquo;s
          geopolitical zones, bringing reliable solar power to rural and
          underserved communities.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 items-center">
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-sm">
          <iframe
            title="Electrify MicroGrid project states in Nigeria"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.5,4.0,15.0,14.0&layer=mapnik"
            className="w-full h-80 sm:h-96"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">
            States
          </h3>
          <div className="flex flex-wrap gap-3">
            {STATES.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-text shadow-sm hover:border-brand hover:text-brand transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
