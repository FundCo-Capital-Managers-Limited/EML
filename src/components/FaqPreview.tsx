import Link from "next/link";

const FAQS = [
  {
    q: "What is a microgrid?",
    a: "A microgrid is a localized energy system that can operate independently or in conjunction with the main power grid. It relies on renewable energy sources such as solar or wind to provide reliable and sustainable energy to communities.",
  },
  {
    q: "What are the main benefits of using a microgrid?",
    a: "Microgrids provide reliable, affordable electricity in remote areas, promote productive use of energy, and reduce carbon emissions by leveraging renewable resources.",
  },
  {
    q: "How does a microgrid help reduce carbon emissions?",
    a: "By replacing diesel generators and fossil-fuel power sources with solar and other renewables, microgrids cut emissions while lowering the cost of energy access.",
  },
];

export default function FaqPreview() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">FAQ</h2>
      <p className="text-text-secondary mb-10">
        Do you have any questions for us? If there are any questions you
        want to ask, we would love to answer them for you.
      </p>
      <div className="text-left space-y-4">
        {FAQS.map((f) => (
          <div key={f.q} className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-semibold text-text mb-2">{f.q}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
      <Link
        href="/faqs"
        className="inline-block mt-8 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
      >
        View More
      </Link>
    </section>
  );
}
