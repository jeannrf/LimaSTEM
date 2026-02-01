import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white hover:opacity-90 shadow-lg shadow-[#9d4edd]/25 border border-white/10 hover:shadow-[0_0_25px_rgba(157,78,221,0.4)]",
    secondary:
      "bg-white text-[#0b011d] hover:bg-gray-100 shadow-lg shadow-white/10 font-bold",
    glass: "glass text-white hover:bg-white/10 border border-white/5",
    outline: "border border-white/10 text-white hover:bg-white/5 hover:border-white/20",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
};
