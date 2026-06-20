"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "ghost" | "outline";
};

export default function Button({
  children,
  onClick,
  href,
  variant = "default",
}: ButtonProps) {
  const base = "relative inline-flex items-center gap-2 text-xs px-4 py-2 rounded-md font-medium tracking-wide transition-colors duration-150 cursor-pointer";

  const variants = {
    default: "bg-neutral-100 text-neutral-900 hover:bg-white",
    ghost:   "bg-transparent text-neutral-400 hover:text-neutral-100",
    outline: "bg-transparent border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-neutral-100",
  };

  const className = `${base} ${variants[variant]}`;

  const MotionTag = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionTag
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}