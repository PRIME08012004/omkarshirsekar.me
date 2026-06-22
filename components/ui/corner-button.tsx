"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type CornerButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

export default function CornerButton({
  children,
  onClick,
  href,
}: CornerButtonProps) {
  const { theme } = useTheme();
  const inner = (
    <motion.div
      className="relative inline-flex items-center justify-center px-8 py-3 group cursor-pointer overflow-hidden"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
    >
      <span
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 4px,
            rgba(255,255,255,0.04) 4px,
            rgba(255,255,255,0.04) 8px
          )`,
        }}
      />

      <motion.span
        className="absolute inset-0 bg-white  z-10 pointer-events-none origin-left"
        initial={{
          scaleX: 0,
          skewX: "-20deg",
          x: "-15%",
        }}
        variants={{
          hover: {
            scaleX: 1.0,
            x: 0,
            transition: {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{
          backgroundColor: theme === "dark" ? "#ffffff" : "#000000",
        }}
      />

      <span
        className="absolute top-0 left-0 w-3 h-3 border-t border-l  z-20"
        style={{
          borderColor: theme === "dark" ? "#ffffff" : "#000000",
        }}
      />
      <span
        className="absolute top-0 right-0 w-3 h-3 border-t border-r  z-20"
        style={{
          borderColor: theme === "dark" ? "#ffffff" : "#000000",
        }}
      />
      <span
        className="absolute bottom-0 left-0 w-3 h-3 border-b border-l  z-20"
        style={{
          borderColor: theme === "dark" ? "#ffffff" : "#000000",
        }}
      />
      <span
        className="absolute bottom-0 right-0 w-3 h-3 border-b border-r  z-20"
        style={{
          borderColor: theme === "dark" ? "#ffffff" : "#000000",
        }}
      />

<motion.span
  key={theme}
  className="relative z-20 text-[11px] font-medium tracking-widest uppercase font-mono"
  animate={{
    color: theme === "dark" ? "#fff" : "#000",
  }}
  variants={{
    hover: {
      color: theme === "dark" ? "#000" : "#fff",
    },
  }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <div suppressHydrationWarning onClick={onClick}>
      {inner}
    </div>
  );
}
