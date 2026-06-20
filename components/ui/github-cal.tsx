"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function GithubSection() {
  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <GitHubCalendar
        username="PRIME08012004"
        colorScheme="dark"
        transformData={(contributions) => {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 10);

        return contributions.filter(
          (day) => new Date(day.date) >= sixMonthsAgo
        );
      }}
      />
    </div>
  );
}