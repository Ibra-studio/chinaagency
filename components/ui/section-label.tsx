import type { ReactNode } from "react";

interface LabelSectionProps {
  children: ReactNode;
}

export function LabelSection({ children }: LabelSectionProps) {
  return (
    <div className="inline-flex items-center justify-center my-4">
      <div className="w-20 h-[2px] bg-primary" />
      <span className="px-4 text-sm md:text-lg font-bold tracking-wider text-primary uppercase whitespace-nowrap font-serif">
        {children}
      </span>
      <div className="w-20 h-[2px] bg-primary" />
    </div>
  );
}