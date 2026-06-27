"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";
const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function GithubSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

const months = isMobile ? 5 : 8;
  return (
    <div className="flex flex-col items-center gap-4 p-2 overflow-x-auto">
        <h1>Github Stats</h1>
      <GitHubCalendar
        username="PRIME08012004"
        colorScheme="dark"
        transformData={(contributions) => {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - months);

        return contributions.filter(
          (day) => new Date(day.date) >= sixMonthsAgo
        );
      }}
      />
    </div>
  );
}