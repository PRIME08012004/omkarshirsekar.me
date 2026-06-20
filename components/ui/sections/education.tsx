"use client";

import { motion } from "framer-motion";
import { education } from "@/data/profile-data";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className="text-[21px] uppercase tracking-widest text-white mb-4">
        Education
      </p>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-200">{education.degree}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{education.college}</p>
          <p className="text-xs text-neutral-600 mt-0.5">{education.university}</p>
        </div>
        <span className="text-xs text-neutral-600 shrink-0">{education.period}</span>
      </div>
    </motion.section>
  );
}