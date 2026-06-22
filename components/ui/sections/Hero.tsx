"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile-data";

import CornerButton from "@/components/ui/corner-button";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10"
    >
     <div className="flex justify-between mt-8 md:mt-5">
         <div className="flex items-start gap-3 mb-2">
        <div className="w-18 h-18 rounded-full bg-neutral-700 overflow-hidden flex items-center justify-center text-sm font-medium text-neutral-300">
          <Image 
          width={200}
          height={200}
          alt="profile-pic"
          src={"/pf.jpeg"}
          />
        </div>
        <div className="p-2">
          <h1 className="text-3xl font-medium text-neutral-100">{profile.name}</h1>
          <p className="text-sm text-neutral-500">{profile.tagline}</p>
        </div>

      </div>
      <div className="flex items-center ">
         <CornerButton href="mailto:iamomkar0007@gmail.com">Let&apos;s Connect</CornerButton>
      </div>
     </div>
    </motion.div>
  );
}