"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile-data";

export default function Hero() {
  return (
    <section className=" flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-7xl font-bold tracking-tight">
          {profile.name}
        </h1>

        <p className="mt-6 text-2xl text-muted-foreground">
          {profile.role}
        </p>

        <p className="mt-8 max-w-xl text-lg">
          {profile.bio}
        </p>
      </motion.div>
    </section>
  );
}