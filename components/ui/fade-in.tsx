"use client";

import { motion } from "framer-motion";

type Direction = "bottom" | "left" | "right" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

const variants: Record<Direction, { x?: number; y?: number }> = {
  bottom:      { y: 40 },
  top:         { y: -40 },
  left:        { x: -40 },
  right:       { x: 40 },
  bottomLeft:  { x: -40, y: 40 },
  bottomRight: { x: 40,  y: 40 },
  topLeft:     { x: -40, y: -40 },
  topRight:    { x: 40,  y: -40 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "bottomLeft",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, ...variants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}