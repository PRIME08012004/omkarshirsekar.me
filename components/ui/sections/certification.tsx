"use client";

import { motion, easeOut } from "framer-motion";
import { certifications } from "@/data/profile-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Certifications() {
  return (
    <section className="mb-10">
      <p className="text-[21px] uppercase tracking-widest text-white mb-4">Certifications</p>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {certifications.map((c) => (
          <motion.a
            key={c.name}
            variants={item}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-2 group cursor-pointer"
          >
            <div>
              <span className="text-sm text-neutral-200 group-hover:text-white transition-colors duration-150">
                {c.name}
              </span>
              <p className="text-xs text-neutral-500 mt-0.5">by {c.by}</p>
            </div>
            <span className="text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors duration-150">
              view →
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}