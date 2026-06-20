import GithubSection from "@/components/ui/github-cal";
import Hero from "@/components/ui/sections/Hero";
import { cn } from "@/lib/utils";
import  { JetBrains_Mono } from "next/font/google"

const JM= JetBrains_Mono({subsets: ["latin"] })

export default function Home() {
  return (
    <div className={cn(JM.className,"flex flex-col flex-1 items-center justify-center gap-y-8")}>

         <Hero/>
          <GithubSection/>
     
    </div>
  );
}
