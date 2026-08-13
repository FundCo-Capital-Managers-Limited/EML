"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

const VISIBLE = 3;
const INTERVAL_MS = 4500;

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const count = projects.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [count]);

  function next() {
    setIndex((i) => (i + 1) % count);
  }
  function prev() {
    setIndex((i) => (i - 1 + count) % count);
  }

  const visible = Array.from({ length: VISIBLE }, (_, i) => projects[(index + i) % count]);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl bg-white/5 overflow-hidden hover:bg-white/10 transition-colors"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {p.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <Image src="/uploads/2025/09/prev.svg" alt="" width={16} height={12} className="invert" />
        </button>
        <span className="text-sm text-white/60 tabular-nums">
          {index + 1} / {count}
        </span>
        <button
          onClick={next}
          aria-label="Next project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <Image src="/uploads/2025/09/go_next.svg" alt="" width={16} height={12} className="invert" />
        </button>
      </div>
    </div>
  );
}
