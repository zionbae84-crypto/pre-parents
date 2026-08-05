import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
}

const baseClass =
  "inline-flex items-center justify-center rounded-button px-4 py-3 font-body font-bold text-[15px] transition-colors";

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-coral text-white hover:bg-coral-dark border-2 border-transparent",
  outline: "bg-transparent text-coral border-2 border-coral hover:bg-coral/10",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const className = `${baseClass} ${variantClass[variant]}`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
