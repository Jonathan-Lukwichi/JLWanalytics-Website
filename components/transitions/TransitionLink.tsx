"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useTransition } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TransitionLink({
  href,
  children,
  className = "",
  onClick,
}: TransitionLinkProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.();

      startTransition(() => {
        router.push(href);
      });
    },
    [href, router, onClick]
  );

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} ${isPending ? "pointer-events-none" : ""}`}
    >
      {children}
    </Link>
  );
}
