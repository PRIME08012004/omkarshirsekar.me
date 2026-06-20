"use client";

import { motion , easeOut} from "framer-motion";
import { skills } from "@/data/profile-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Skills() {
  return (
    <section className="mb-10">
      <p className="text-[21px] uppercase tracking-widest text-white mb-4">Skills</p>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div key={category} variants={item} className="flex gap-4">
            <span className="text-xs text-neutral-600 w-20 shrink-0 pt-0.5">{category}</span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}