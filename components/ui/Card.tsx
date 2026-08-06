import type { ReactNode } from "react";

export function Card({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={`rounded-card border-2 border-brown/10 bg-white ${compact ? "p-4" : "p-6"}`}>
      {children}
    </div>
  );
}
