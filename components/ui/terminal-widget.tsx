"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTheme } from "next-themes";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  name: string;
  desc: string;
  stack: string;
  link: string;
}

interface Certification {
  name: string;
  by: string;
  link: string;
}

interface ContactEntry {
  key: string;
  val: string;
  href: string;
}

type LineSegment =
  | { kind: "text"; content: string; color?: string }
  | { kind: "link"; content: string; href: string }
  | { kind: "spacer" };

interface OutputLine {
  id: string;
  segments: LineSegment[];
}

interface HistoryEntry {
  id: string;
  type: "welcome" | "cmd" | "output" | "error";
  cmd?: string;
  lines?: OutputLine[];
  errorMsg?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const DATA = {
  about: [
    ["name", "Omkar Shirsekar"],
    ["role", "Full-Stack Developer & DevOps Enthusiast"],
    ["location", "Panvel, Maharashtra, India"],
    ["college", "Pillai HOC College of Engg. & Tech."],
    ["degree", "B.E. Computer Engineering (2022-2026)"],
    ["email", "iamomkar0007@gmail.com"],
    ["status", "Open to work"],
  ] as [string, string][],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Java", "C"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "HTML5"],
    Backend: ["Node.js", "Express.js", "Socket.io", "REST APIs"],
    Databases: ["MongoDB", "PostgreSQL", "Prisma ORM"],
    DevOps: ["Docker", "AWS (EC2, S3)", "CI/CD", "GitHub Actions"],
    Tools: ["Git", "Turborepo", "Prisma", "Linux"],
  } as Record<string, string[]>,

  projects: [
    {
      name: "Vivace",
      desc: "Salon booking platform",
      stack: "Next.js · Prisma · PostgreSQL · NextAuth",
      link: "https://vivace.vercel.app",
    },
    {
      name: "CodeNest",
      desc: "Real-time collaborative code editor",
      stack: "React · Node.js · Socket.io · WebSockets",
      link: "https://code-nest-tau.vercel.app",
    },
    {
      name: "HMS",
      desc: "Hostel Grievance Redressal System",
      stack: "MERN · JWT · Role-based access control",
      link: "https://phcet-hms.vercel.app",
    },
    {
      name: "Quendora",
      desc: "Secure journaling app with AI",
      stack: "React · Node.js · MongoDB",
      link: "https://quendora.vercel.app",
    },
  ] as Project[],

  certifications: [
    {
      name: "JavaScript",
      by: "Jonas Schmedtmann",
      link: "https://drive.google.com/file/d/1t8cCCXw44jabRTnodt03kWNRq8cKLX0G/view",
    },
    {
      name: "Node.js/Express",
      by: "Jonas Schmedtmann",
      link: "https://drive.google.com/file/d/1NoqsRlQiAeNUNFaPCBOZhEjjRDEUeuX8/view",
    },
    {
      name: "DevOps",
      by: "Harkirat Singh",
      link: "https://drive.google.com/file/d/1uiEIC7Iu3HE0QvX0vUaStFKQ82qLdPBf/view",
    },
  ] as Certification[],

  contact: [
    {
      key: "email",
      val: "iamomkar0007@gmail.com",
      href: "mailto:iamomkar0007@gmail.com",
    },
    {
      key: "linkedin",
      val: "linkedin.com/in/omkar-shirsekar",
      href: "https://linkedin.com/in/omkar-shirsekar",
    },
    {
      key: "github",
      val: "github.com/PRIME08012004",
      href: "https://github.com/PRIME08012004",
    },
    { key: "phone", val: "+91 9529388077", href: "tel:+919529388077" },
  ] as ContactEntry[],
};

// ─── Tiny helpers ─────────────────────────────────────────────────────────────

let _uid = 0;
const uid = () => String(++_uid);

// Tokyo Night colours
const C = {
  default: "#a9b1d6",
  green: "#9ece6a",
  blue: "#7aa2f7",
  purple: "#bb9af7",
  cyan: "#7dcfff",
  orange: "#ff9e64",
  red: "#f7768e",
  yellow: "#e0af68",
  muted: "#565f89",
};

const MONO = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace";

// Line-segment constructors
const t = (content: string, color?: string): LineSegment => ({
  kind: "text",
  content,
  color,
});
const lnk = (content: string, href: string): LineSegment => ({
  kind: "link",
  content,
  href,
});
const sp = (): LineSegment => ({ kind: "spacer" });
const ln = (...segs: LineSegment[]): OutputLine => ({
  id: uid(),
  segments: segs,
});

// ─── Commands ────────────────────────────────────────────────────────────────

const COMMANDS: Record<string, () => OutputLine[] | null> = {
  help: () => [
    ln(t("available commands", C.cyan)),
    ln(t("  about          ", C.green), t("-- who am i", C.muted)),
    ln(t("  skills         ", C.green), t("-- tech stack & tools", C.muted)),
    ln(t("  projects       ", C.green), t("-- things i've built", C.muted)),
    ln(t("  certifications ", C.green), t("-- courses & credentials", C.muted)),
    ln(t("  contact        ", C.green), t("-- get in touch", C.muted)),
    ln(t("  resume         ", C.green), t("-- open my resume", C.muted)),
    ln(t("  whoami         ", C.green), t("-- quick intro", C.muted)),
    ln(t("  clear          ", C.green), t("-- clear terminal", C.muted)),
    ln(sp()),
    ln(
      t("tip: ", C.muted),
      t("arrow keys", C.green),
      t(" for history · ", C.muted),
      t("Tab", C.green),
      t(" to autocomplete", C.muted),
    ),
  ],

  whoami: () => [
    ln(
      t("Omkar Shirsekar", C.purple),
      t(" · ", C.muted),
      t("Full-Stack Dev", C.default),
      t(" · ", C.muted),
      t("Panvel, India", C.default),
    ),
    ln(t("Final-year CS student building real products with the MERN stack.")),
    ln(t("Currently open to full-time roles in fullstack & DevOps.", C.green)),
  ],

  about: () => [
    ln(t("~/about", C.cyan)),
    ...DATA.about.map(([k, v]) =>
      ln(t(k.padEnd(12), C.green), t(" -> ", C.muted), t(v)),
    ),
  ],

  skills: () => [
    ln(t("~/skills", C.cyan)),
    ...Object.entries(DATA.skills).flatMap(([cat, items]) => [
      ln(sp()),
      ln(t(cat, C.purple)),
      ln(t("  " + items.join("  ·  "))),
    ]),
  ],

  projects: () => [
    ln(t("~/projects", C.cyan)),
    ...DATA.projects.flatMap((p, i) => [
      ln(sp()),
      ln(t("[" + (i + 1) + "] ", C.orange), t(p.name, C.orange)),
      ln(t("    " + p.desc)),
      ln(t("    stack: ", C.muted), t(p.stack, C.purple)),
      ln(t("    link:  ", C.muted), lnk(p.link, p.link)),
    ]),
  ],

  certifications: () => [
    ln(t("~/certifications", C.cyan)),
    ...DATA.certifications.flatMap((c) => [
      ln(sp()),
      ln(t(c.name, C.green), t("  by  ", C.muted), t(c.by)),
      ln(t("  "), lnk("view certificate ->", c.link)),
    ]),
  ],

  contact: () => [
    ln(t("~/contact", C.cyan)),
    ...DATA.contact.map((c) =>
      ln(t(c.key.padEnd(10), C.green), t(" -> ", C.muted), lnk(c.val, c.href)),
    ),
  ],

  resume: () => {
    setTimeout(
      () =>
        window.open(
          "https://drive.google.com/file/d/1t8cCCXw44jabRTnodt03kWNRq8cKLX0G/view",
          "_blank",
        ),
      300,
    );
    return [
      ln(t("opening resume...", C.green)),
      ln(t("if nothing opens, check your popup blocker.", C.muted)),
    ];
  },

  clear: () => null,
};

const ALL_CMDS = Object.keys(COMMANDS);

// ─── Prompt ───────────────────────────────────────────────────────────────────

function Prompt() {
  return (
    <span className="select-none shrink-0" style={{ fontFamily: MONO }}>
      <span style={{ color: C.green }}>omkar</span>
      <span style={{ color: C.muted }}>@</span>
      <span style={{ color: C.blue }}>portfolio</span>
      <span style={{ color: C.muted }}> </span>
      <span style={{ color: C.purple }}>~</span>
      <span style={{ color: C.green }}> % </span>
    </span>
  );
}

// ─── Single output line ───────────────────────────────────────────────────────

function OutputLineRow({ line }: { line: OutputLine }) {
  const isSpacer =
    line.segments.length === 1 && line.segments[0].kind === "spacer";
  if (isSpacer) return <div className="h-1.5" />;

  return (
    <div style={{ lineHeight: "1.65" }}>
      {line.segments.map((seg, i) => {
        if (seg.kind === "spacer") return null;
        if (seg.kind === "link") {
          return (
            <a
              key={i}
              href={seg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: C.blue }}
              onClick={(e) => e.stopPropagation()}
            >
              {seg.content}
            </a>
          );
        }
        return (
          <span key={i} style={{ color: seg.color ?? C.default }}>
            {seg.content}
          </span>
        );
      })}
    </div>
  );
}

// ─── Terminal body ────────────────────────────────────────────────────────────

function TerminalBody() {
  const [entries, setEntries] = useState<HistoryEntry[]>([
    {
      id: uid(),
      type: "welcome",
      lines: [
        ln(t("welcome to omkar's portfolio", C.green), t("  v1.0.0", C.muted)),
        ln(
          t("type ", C.muted),
          t("help", C.green),
          t(" to see available commands", C.muted),
        ),
        ln(sp()),
      ],
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [entries]);

  const runCmd = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistory((h) => [cmd, ...h]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setEntries([]);
      return;
    }

    const fn = COMMANDS[cmd];
    if (fn) {
      const result = fn();
      setEntries((e) => [
        ...e,
        { id: uid(), type: "cmd", cmd },
        ...(result
          ? [{ id: uid(), type: "output" as const, lines: result }]
          : []),
      ]);
    } else {
      setEntries((e) => [
        ...e,
        { id: uid(), type: "cmd", cmd },
        { id: uid(), type: "error", errorMsg: cmd },
      ]);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCmd(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistIdx((i) => {
        const next = Math.min(i + 1, cmdHistory.length - 1);
        setInputVal(cmdHistory[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistIdx((i) => {
        const next = i - 1;
        if (next < 0) {
          setInputVal("");
          return -1;
        }
        setInputVal(cmdHistory[next] ?? "");
        return next;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = inputVal.toLowerCase();
      const match = ALL_CMDS.find((c) => c.startsWith(partial));
      if (match) setInputVal(match);
    }
  };

  return (
    <div
      className="flex flex-col flex-1 min-h-0 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Scrollable output */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-2">
        {entries.map((entry) => {
          if (entry.type === "cmd") {
            return (
              <div
                key={entry.id}
                className="flex items-start mt-1"
                style={{ lineHeight: "1.65" }}
              >
                <Prompt />
                <span style={{ color: C.default }}>{entry.cmd}</span>
              </div>
            );
          }
          if (entry.type === "error") {
            return (
              <div key={entry.id} style={{ lineHeight: "1.65" }}>
                <span style={{ color: C.red }}>
                  zsh: command not found: {entry.errorMsg}
                </span>
                <span style={{ color: C.muted }}>
                  {" "}
                  -- type &apos;help&apos; to see available commands
                </span>
              </div>
            );
          }
          if (entry.type === "welcome" || entry.type === "output") {
            return (
              <div key={entry.id} className="mt-0.5">
                {entry.lines?.map((l) => (
                  <OutputLineRow key={l.id} line={l} />
                ))}
              </div>
            );
          }
          return null;
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div
        className="flex items-center px-4 py-2.5 shrink-0"
        style={{ borderTop: "0.5px solid #2a2b3d" }}
      >
        <Prompt />
        <input
          ref={inputRef}
          autoFocus
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
          placeholder="type 'help' to get started"
          className="flex-1 bg-transparent outline-none text-[13px]"
          style={{
            fontFamily: MONO,
            color: C.default,
            caretColor: C.blue,
          }}
        />
      </div>
    </div>
  );
}

// ─── Framer Motion variants ───────────────────────────────────────────────────

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  exit: { opacity: 0, transition: { duration: 0.18, ease: "easeIn" as const } },
};

// macOS-style spring: overshoots slightly, then settles
const EASE_IN_BEZIER: [number, number, number, number] = [0.4, 0, 1, 1];

const popupVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.86,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.2, ease: "easeOut" as const },
      scale: { type: "spring", stiffness: 360, damping: 26, mass: 0.8 },
      y: { type: "spring", stiffness: 360, damping: 26, mass: 0.8 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 12,
    transition: {
      duration: 0.16,
      ease: EASE_IN_BEZIER,
    },
  },
};

// ─── TerminalWidget ───────────────────────────────────────────────────────────

interface TerminalWidgetProps {
  /**
   * Controlled open state. Leave undefined for uncontrolled (self-managed) mode.
   */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * Custom trigger. Wrap clicks yourself or let TerminalWidget handle it.
   * Defaults to the built-in pill button.
   */
  trigger?: React.ReactNode;
}

export function TerminalWidget({
  open: controlledOpen,
  onOpenChange,
  trigger,
}: TerminalWidgetProps) {
  const isControlled = controlledOpen !== undefined;
  const [self, setSelf] = useState(false);
  const open = isControlled ? controlledOpen! : self;
   const { theme, setTheme } = useTheme();
  const setOpen = useCallback(
    (next: boolean) => {
      if (isControlled) onOpenChange?.(next);
      else setSelf(next);
    },
    [isControlled, onOpenChange],
  );

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, setOpen]);

  return (
    <>
      {/* Trigger */}
      <span onClick={() => setOpen(!open)} className="contents">
        {/* {trigger ?? <DefaultTriggerButton active={open} />} */}
      </span>

      {/* Overlay + popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="terminal-backdrop"
              className="fixed inset-0 z-50"
              style={{
                backgroundColor: "rgba(8, 8, 18, 0.65)",
                backdropFilter: "blur(6px)",
              }}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* Popup */}
            <motion.div
              key="terminal-popup"
              className="fixed inset-0 z-50 flex items-end justify-center pb-6 pointer-events-none sm:items-center"
            >
              <motion.div
                className="mx-3 w-full max-w-2xl pointer-events-auto"
                // originY: 1 anchors the spring to the bottom edge (where the navbar is)
                style={{ originY: 1, originX: 0.5 }}
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Window frame */}
                <div
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: theme === "dark" ? "#0a0a0a" : "#fafafa",
                    border: "1px solid #2a2b3d",
                    fontFamily: MONO,
                    fontSize: "13px",
                    height: "460px",
                    boxShadow:
                      "0 32px 72px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.04) inset",
                  }}
                >
                  {/* Title bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3 shrink-0"
                    style={{ borderBottom: "0.5px solid #2a2b3d" }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setOpen(false)}
                      aria-label="Close terminal"
                      className="w-3 h-3 rounded-full outline-none"
                      style={{ background: C.red }}
                    />
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: C.yellow }}
                    />
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: C.green }}
                    />
                    <span
                      className="flex-1 text-center text-[11px] select-none tracking-wide"
                      style={{ color: C.muted }}
                    >
                      omkar — portfolio ~ zsh
                    </span>
                    {/* Mirror the dots width so title stays centred */}
                    <span className="w-[52px]" />
                  </div>

                  {/* Body */}
                  <TerminalBody />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Default trigger ──────────────────────────────────────────────────────────

function DefaultTriggerButton({ active }: { active: boolean }) {
  //   return (
  //     // <motion.button
  //     //   aria-label="Toggle terminal"
  //     //   whileHover={{ scale: 1.05 }}
  //     //   whileTap={{ scale: 0.94 }}
  //     //   transition={{ type: "spring", stiffness: 400, damping: 20 }}
  //     //   className={[
  //     //     "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px]",
  //     //     "border transition-colors duration-200 select-none outline-none",
  //     //     "focus-visible:ring-2 focus-visible:ring-[#7aa2f7]/50",
  //     //     active
  //     //       ? "border-[#7aa2f7]/30 bg-[#7aa2f7]/10 text-[#7aa2f7]"
  //     //       : "border-white/[0.12] bg-white/[0.05] text-white/50 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.09]",
  //     //   ].join(" ")}
  //     //   style={{ fontFamily: MONO }}
  //     // >
  //     //   <TerminalIcon />
  //     //   <span>terminal</span>
  //     // </motion.button>
  //   );
}

function TerminalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polyline
        points="2,4 6,7 2,10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="7"
        y1="10"
        x2="12"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Navbar convenience export ────────────────────────────────────────────────

/**
 * Drop this directly into your Navbar component:
 *
 *   import { NavbarTerminalButton } from "@/components/TerminalWidget";
 *
 *   <nav>
 *     ...
 *     <NavbarTerminalButton />
 *   </nav>
 */
export function NavbarTerminalButton() {
  return <TerminalWidget />;
}
