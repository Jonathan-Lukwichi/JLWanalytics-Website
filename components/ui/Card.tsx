interface CardProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function Card({ children, className = "", active = false }: CardProps) {
  return (
    <div
      className={`glass-card hover-lift rounded-lg2 ${
        active ? "card-active" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
