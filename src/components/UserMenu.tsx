import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut, ChevronDown, UserCircle, Settings, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const UserMenu = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitials = () => {
    if (!user?.email) return "U";
    // If we have full_name in metadata, use it
    const fullName = user.user_metadata?.full_name;
    if (fullName) {
      return fullName.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase();
    }
    return user.email[0].toUpperCase();
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
          {getInitials()}
        </div>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors max-w-[100px] truncate hidden md:block">
          {user?.user_metadata?.full_name || "Usuario"}
        </span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#130725] border border-white/10 shadow-2xl overflow-hidden z-[100]"
          >
            <div className="p-4 border-b border-white/5 bg-white/[0.02]">
              <p className="text-sm font-bold text-white truncate">
                {user?.user_metadata?.full_name || "Mi Cuenta"}
              </p>
              <p className="text-xs text-slate-400 truncate mt-0.5">
                {user?.email}
              </p>
            </div>

            <div className="p-2 space-y-1">
              <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                <LayoutDashboard size={16} className="text-[#c77dff]" />
                Panel Principal
              </Link>
              <Link href="/perfil" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                <UserCircle size={16} className="text-[#c77dff]" />
                Mi Perfil
              </Link>
              <button disabled className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 cursor-not-allowed">
                <Settings size={16} />
                Configuración <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded ml-auto">Pronto</span>
              </button>
            </div>

            <div className="p-2 border-t border-white/5">
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
              >
                <LogOut size={16} />
                Cerrar Sesión
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
