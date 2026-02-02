import Link from "next/link";
import { Trophy, Users, Rocket, ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const LandingHackathones = () => {
  return (
    <div className="min-h-screen bg-[#050011] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00f3ff] opacity-10 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 text-[11px] font-bold text-[#00f3ff] uppercase tracking-[0.2em] mb-8 font-mono shadow-[0_0_15px_rgba(0,243,255,0.3)]"
        >
          <Terminal size={12} /> Compite & Gana
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase max-w-5xl"
        >
          Build. Ship. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#00aeef] outline-text">Win.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-mono"
        >
          &lt;Entra al circuito competitivo de Lima. Encuentra equipos, premios en efectivo y retos que impulsarán tu carrera dev. /&gt;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <Link href="/register" className="h-14 px-10 bg-[#00f3ff] hover:bg-[#00d0db] text-black font-black uppercase tracking-widest skew-x-[-10deg] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center justify-center">
            <span className="skew-x-[10deg] flex items-center gap-2">Unirse al Reto <Terminal size={18} /></span>
          </Link>
          <Link href="/login" className="h-14 px-10 border border-[#00f3ff]/30 text-[#00f3ff] hover:bg-[#00f3ff]/10 font-bold uppercase tracking-widest skew-x-[-10deg] transition-all flex items-center justify-center">
            <span className="skew-x-[10deg]">Login</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[
            {
              icon: Trophy,
              title: "Premios Cash",
              desc: "Competencias con premios monetarios reales y seed capital.",
              border: "hover:border-[#ffdd00]/50",
              color: "text-[#ffdd00]"
            },
            {
              icon: Users,
              title: "Squad Building",
              desc: "Encuentra designers y devs para armar el equipo perfecto.",
              border: "hover:border-[#00f3ff]/50",
              color: "text-[#00f3ff]"
            },
            {
              icon: Rocket,
              title: "Lanzadera",
              desc: "Del código spaghetti al MVP en 48 horas. Demuestra tu nivel.",
              border: "hover:border-[#ff0055]/50",
              color: "text-[#ff0055]"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className={`bg-[#0a0514] border border-[#00f3ff]/10 p-8 clip-path-polygon hover:bg-[#00f3ff]/5 transition-all group ${item.border}`}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}
            >
              <item.icon size={32} className={`${item.color} mb-6`} />
              <h3 className="text-2xl font-black text-white mb-2 uppercase italic">{item.title}</h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
