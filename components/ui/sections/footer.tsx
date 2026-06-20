"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile-data";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="pt-4 pb-12 flex gap-4"
    >
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-150"
      >
        GitHub
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-150"
      >
        LinkedIn
      </a>
      <a
        href={profile.links.email}
        className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-150"
      >
        Email
      </a>
    </motion.footer>
  );
}