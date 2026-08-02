"use client";

import { motion, easeOut } from "framer-motion";
import { projects } from "@/data/profile-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

function displayHost(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2.01-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="mb-10">
      <p className="text-[21px] uppercase tracking-widest text-white mb-6">
        Projects
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-10"
      >
        {projects.map((p) => (
          <motion.article key={p.name} variants={item} className="group">
            {/* Vercel-style deployment preview */}
            <div className="project-preview mb-4 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-none transition-[border-color,box-shadow] duration-200 group-hover:border-neutral-600">
              <div className="preview-chrome flex items-center gap-3 border-b border-neutral-800 bg-neutral-900/80 px-3 py-2">
                <div className="flex shrink-0 gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-center">
                  <span className="preview-url truncate rounded-md bg-neutral-800/80 px-3 py-1 text-[10px] text-neutral-500">
                    {displayHost(p.link)}
                  </span>
                </div>
                <div className="w-[42px] shrink-0" aria-hidden />
              </div>

              <div className="preview-viewport relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <iframe
                  src={p.link}
                  title={`${p.name} preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  tabIndex={-1}
                  className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
                />
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Open ${p.name} live preview`}
                />
                <div className="preview-fade pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-950/40 to-transparent" />
              </div>
            </div>

            {/* Brief + actions */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm text-neutral-200 transition-colors duration-150 group-hover:text-white">
                {p.name}
              </h3>
              <span className="shrink-0 text-xs text-neutral-600">{p.date}</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              {p.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-500"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-100 px-3 py-1.5 text-[11px] font-medium tracking-wide text-neutral-900 transition-colors duration-150 hover:bg-white"
              >
                <ExternalIcon />
                Live
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-transparent px-3 py-1.5 text-[11px] font-medium tracking-wide text-neutral-300 transition-colors duration-150 hover:border-neutral-500 hover:text-neutral-100"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
