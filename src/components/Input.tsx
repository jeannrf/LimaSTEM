import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon: Icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative group">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-[#9d4edd]">
              <Icon size={18} />
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-2xl border border-white/5 bg-[#0b011d]/50 px-4 py-2 text-sm text-white placeholder:text-gray-600 transition-all outline-none",
              "focus:border-[#9d4edd]/50 focus:bg-[#0b011d]/80 focus:ring-4 focus:ring-[#9d4edd]/10",
              "hover:border-white/10 hover:bg-[#0b011d]/60",
              "disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-11",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-red-500 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
