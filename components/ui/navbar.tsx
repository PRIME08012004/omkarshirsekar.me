"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Codeicon from "./icons/codeicon";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navContent = (
    <div
      className="
      flex items-center gap-3
      px-20 py-2
      rounded-4xl
    "
      style={{
        background:
          theme === "dark" ? "rgba(20,10,50,0.10)" : "rgba(255,255,255,0.08)",

        border:
          theme === "dark"
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(255,255,255,0.55)",

        backdropFilter: "blur(8px) saturate(120%)",
        WebkitBackdropFilter: "blur(8px) saturate(120%)",

        boxShadow:
          theme === "dark"
            ? `
            0 2px 16px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.10)
          `
            : `
            0 2px 16px rgba(100,80,200,0.08),
            inset 0 1.5px 0 rgba(255,255,255,0.75),
            inset 0 -0.5px 0 rgba(160,130,255,0.15)
          `,
      }}
    >
      <NavIcon href="https://github.com/PRIME08012004" label="GitHub">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </NavIcon>

      <NavIcon href="https://linkedin.com/in/omkar-shirsekar" label="LinkedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </NavIcon>

      <NavIcon href="https://x.com" label="X / Twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        
      </NavIcon>
      <NavIcon href="" label="terminal">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

      </NavIcon>
    

      <span
        className="w-px h-[18px] mx-1"
        style={{
          background:
            theme === "dark"
              ? "rgba(255,255,255,0.12)"
              : "rgba(160,130,255,0.25)",
        }}
      />

      {mounted && (
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.07, y: -8 }}
          aria-label="Toggle theme"
          className="
    flex items-center justify-center
    w-[34px]
    h-[34px]
    rounded-xl
    transition-all
    duration-200
  "
          style={{
            background:
              theme === "dark"
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.55)",

            color:
               theme === "dark" ? "rgba(255,255,255,255)" : "rgba(0,0,0,0.8)",

            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",

            boxShadow:
              theme === "dark"
                ? `
          0 1px 3px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.08)
        `
                : `
          0 1px 3px rgba(100,80,200,0.10),
          inset 0 1px 0 rgba(255,255,255,0.9)
        `,
          }}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </motion.button>
      )}
    </div>
  );

  return (
    <>
      {/* mobile — fixed top center */}
      <motion.nav
        initial={{ opacity: 0, y: -10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        // whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="flex md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[9999]"
      >
        {navContent}
      </motion.nav>

      {/* desktop — fixed bottom center */}
      <motion.nav
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        // whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]"
      >
        {navContent}
      </motion.nav>
    </>
  );
}
function NavIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <motion.a
      suppressHydrationWarning
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex items-center justify-center
        w-[34px]
        h-[34px]
        rounded-xl
        transition-all
        duration-75
        
      "
      style={{
        background:
          theme === "dark"
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.55)",

        color:
          theme === "dark" ? "rgba(255,255,255,255)" : "rgba(0,0,0,0.8)",

        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",

        boxShadow:
          theme === "dark"
            ? `
              0 1px 3px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.08)
            `
            : `
              0 1px 3px rgba(100,80,200,0.10),
              inset 0 1px 0 rgba(255,255,255,0.9)
            `,
      }}
      whileHover={{
        scale: 1.07,
        y: -8,
      }}
      whileTap={{
        scale: 0.92,
      }}
    >
      {children}
    </motion.a>
  );
}
