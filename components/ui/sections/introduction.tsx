"use client";

import { motion } from "framer-motion";
import { summary } from "@/data/profile-data";

export default function Summary() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className="text-[21px] uppercase tracking-widest text-white mb-4">
        About
      </p>
      <p className="text-sm text-neutral-400 leading-relaxed">{summary}</p>
    </motion.section>
  );
}