interface AccentProps {
  children: React.ReactNode;
}

export function Accent({ children }: AccentProps) {
  return <span className="text-primary">{children}</span>;
}
