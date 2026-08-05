import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-card border-2 border-brown/10 bg-white p-6">
      {children}
    </div>
  );
}
