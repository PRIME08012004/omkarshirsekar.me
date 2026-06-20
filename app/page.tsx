import GithubSection from "@/components/ui/github-cal";

import Achievements from "@/components/ui/sections/achivements";
import Footer from "@/components/ui/sections/footer";
import Skills from "@/components/ui/sections/skills";
import Header from "@/components/ui/sections/Hero";
import Projects from "@/components/ui/sections/project";
import Certifications from "@/components/ui/sections/certification";
import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";

const JM = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={cn(
          JM.className,
          "grid-bg flex flex-col flex-1 items-center justify-center gap-y-8",
        )}
      >
        <Header />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <GithubSection />
        <Footer />
      </div>
    </>
  );
}
