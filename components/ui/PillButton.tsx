"use client";

import { ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export function PillButton({
  children,
  variant = "primary",
  href,
  onClick,
}: PillButtonProps) {
  const base =
    "inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primaryHover hover:shadow-glow"
      : "bg-white/0 border border-white/10 text-white hover:border-white/20 hover:bg-white/5";

  const content = (
    <>
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black transition-transform group-hover:scale-105">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} group`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} group`}>
      {content}
    </button>
  );
}
