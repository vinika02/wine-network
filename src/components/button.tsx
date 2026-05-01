import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

const buttonStyles = {
  primary:
    "bg-[linear-gradient(180deg,#c4c4c4_0%,#8f8f8f_100%)] text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] hover:brightness-105",
  secondary: "border border-white/14 bg-white/8 text-white hover:bg-white/12",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-medium uppercase tracking-[-0.04em] transition duration-200 ${buttonStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
