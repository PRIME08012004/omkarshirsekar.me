"use client";
import { useCallback, useState } from 'react';
import { Activity } from 'react-github-calendar';
import {GitHubCalendar }from "react-github-calendar";

export default function GithubSection() {
   const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    // Hack to calculate total count after rendering
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  return (
    <GitHubCalendar
      username="PRIME08012004"
      transformData={processContributions}
      
      totalCount={totalCount}
    />
  );
}