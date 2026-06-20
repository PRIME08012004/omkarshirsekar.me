"use client";

import { motion, easeOut } from "framer-motion";
import { projects } from "@/data/profile-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Projects() {
  return (
    <section className="mb-10">
      <p className="text-[21px] uppercase tracking-widest text-white mb-4">Projects</p>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {projects.map((p) => (
          <motion.a
            key={p.name}
            variants={item}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-4 py-2 group cursor-pointer"
          >
            <div className="flex-1 min-w-0">
              <span className="text-sm text-neutral-200 group-hover:text-white transition-colors duration-150">
                {p.name}
              </span>
              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-xs text-neutral-600 shrink-0 mt-0.5">{p.date}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}