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
          <label className="text-sm font-medium text-gray-200 ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary-400">
              <Icon size={18} />
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-gray-500 transition-all outline-none",
              "focus:border-primary-500/50 focus:bg-white/10 focus:ring-4 focus:ring-primary-500/10",
              "hover:border-white/20 hover:bg-white/[0.07]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-10",
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
