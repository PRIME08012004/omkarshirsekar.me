import GithubSection from "@/components/ui/github-cal";
import Achievements from "@/components/ui/sections/achivements";
import Footer from "@/components/ui/sections/footer";
import Skills from "@/components/ui/sections/skills";
import Header from "@/components/ui/sections/Hero";
import Projects from "@/components/ui/sections/project";
import Certifications from "@/components/ui/sections/certification";
import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";
import Education from "@/components/ui/sections/education";
import Summary from "@/components/ui/sections/introduction";

const JM = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid-bg min-h-screen flex justify-center px-5 py-16">
        <div
          className={cn(
            JM.className,
            " flex flex-col flex-1 justify-center gap-y-8 max-w-3xl sm:gap-y-8 w-full  sm:max-w-2xl md:max-w-3xl",
          )}
        >
          <Header />
          <Summary/>
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Education/>
          <GithubSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
