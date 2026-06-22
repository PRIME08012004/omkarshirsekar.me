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
import FadeIn from "@/components/ui/fade-in";
import Navbar from "@/components/ui/navbar";
const JM = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="grid-bg min-h-screen flex justify-center px-5 py-16 z-0 ">
        <div
          className={cn(
            JM.className,
            " flex flex-col flex-1 justify-center gap-y-8 max-w-3xl sm:gap-y-8 w-full  sm:max-w-xl md:max-w-3xl ",
          )}
        >
       <FadeIn direction="bottomLeft"><Header /></FadeIn>
       <FadeIn direction="bottomLeft" delay={0.1}><Summary /></FadeIn>
       
       <FadeIn direction="bottomLeft" delay={0.1}><Skills /></FadeIn>
       <FadeIn direction="bottomRight" delay={0.1}><Projects /></FadeIn>
       <FadeIn direction="bottomLeft" delay={0.1}><Certifications /></FadeIn>
       <FadeIn direction="bottomRight" delay={0.1}><Education /></FadeIn>
       <FadeIn direction="bottomRight" delay={0.1}><Achievements /></FadeIn>
       <FadeIn direction="bottomLeft" delay={0.1}><GithubSection /></FadeIn>
       {/* <FadeIn direction="bottomLeft" delay={0.1}><Footer /></FadeIn> */}
        </div>
      </div>
    </>
  );
}
