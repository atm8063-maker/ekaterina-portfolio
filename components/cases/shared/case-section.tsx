import type { ReactNode } from "react";

type CaseSectionProps = {
  id?: string;
  children: ReactNode;
};

export function CaseSection({ id, children }: CaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      {children}
    </section>
  );
}
