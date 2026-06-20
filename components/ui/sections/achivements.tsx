"use client";

import { motion ,easeOut } from "framer-motion";
import { achievements } from "@/data/profile-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Achievements() {
  return (
    <section className="mb-10">
      <p className="text-[11px] uppercase tracking-widest text-neutral-500 mb-4">
        Achievements & Leadership
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {achievements.map((a) => (
          <motion.div key={a.title} variants={item} className="py-2">
            <p className="text-sm text-neutral-200">{a.title}</p>
            <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{a.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}