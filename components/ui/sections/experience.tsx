"use client";

import { motion, easeOut } from "framer-motion";
import { experience } from "@/data/profile-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Experience() {
  return (
    <section className="mb-10">
      <p className="text-[21px] uppercase tracking-widest text-white mb-4">
        Experience
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-6"
      >
        {experience.map((job) => (
          <motion.div key={`${job.company}-${job.role}`} variants={item}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-neutral-200">{job.role}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{job.company}</p>
              </div>
              <span className="text-xs text-neutral-600 shrink-0">
                {job.period}
              </span>
            </div>

            {job.project && (
              <p className="mt-2 text-xs text-neutral-400">
                Project:{" "}
                {job.projectLink ? (
                  <a
                    href={job.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 underline underline-offset-2 decoration-neutral-700 hover:text-white hover:decoration-neutral-500 transition-colors duration-150"
                  >
                    {job.project}
                  </a>
                ) : (
                  <span className="text-neutral-300">{job.project}</span>
                )}
              </p>
            )}

            <ul className="mt-3 space-y-1.5">
              {job.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-xs leading-relaxed text-neutral-500"
                >
                  <span className="text-neutral-600 shrink-0 select-none">
                    –
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
