import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  children: React.ReactNode;
  centered?: boolean;
}

export function SectionHeader({ children, centered = false }: SectionHeaderProps) {
  return (
    <div
      className={`text-xs tracking-[0.22em] text-white/70 flex items-center gap-2 ${
        centered ? "justify-center" : ""
      }`}
    >
      <Sparkles className="h-4 w-4 text-orange-400" />
      {children}
    </div>
  );
}
