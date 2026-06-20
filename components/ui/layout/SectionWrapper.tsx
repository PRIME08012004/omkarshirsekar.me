import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({
  title,
  children,
}: Props) {
  return (
    <section className="border-t border-border py-20">
      <p className="mb-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </p>

      {children}
    </section>
  );
}