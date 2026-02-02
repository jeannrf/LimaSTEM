import Link from "next/link";
import { Trophy, Users, Rocket, ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export const LandingHackathones = () => {
  return (
    <div className="min-h-screen bg-[#050011] relative overflow-hidden flex items-center">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,44,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,44,191,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7b2cbf] opacity-5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/5 text-[11px] font-semibold text-[#c77dff] uppercase tracking-[0.2em] mb-8 font-mono shadow-[0_0_15px_rgba(157,78,221,0.3)]"
            >
              <Terminal size={12} /> Compite & Gana
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tighter uppercase max-w-5xl leading-none"
            >
              Build. Ship. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#c77dff]">Win.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mb-10 font-mono leading-relaxed"
            >
              &lt;Entra al circuito competitivo de Lima. Encuentra equipos, premios en efectivo y retos que impulsarán tu carrera dev. /&gt;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <Link href="/register" className="h-14 px-10 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-semibold uppercase tracking-widest skew-x-[-10deg] transition-all hover:scale-105 shadow-[0_0_30px_rgba(123,44,191,0.4)] flex items-center justify-center">
                <span className="skew-x-[10deg] flex items-center gap-2">Unirse al Reto <Terminal size={18} /></span>
              </Link>
              <Link href="/login" className="h-14 px-10 border border-[#9d4edd]/30 text-[#c77dff] hover:bg-[#9d4edd]/10 font-medium uppercase tracking-widest skew-x-[-10deg] transition-all flex items-center justify-center">
                <span className="skew-x-[10deg]">Login</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Cyberpunk decoration borders */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#9d4edd]/30 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#9d4edd]/30 rounded-br-3xl pointer-events-none" />

            <div className="bg-[#0a0514]/90 border border-[#9d4edd]/20 p-8 clip-path-polygon relative backdrop-blur-xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}>
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-[#9d4edd]/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-auto text-[10px] font-mono text-[#c77dff]/50">user@limastem:~/hackathons</div>
              </div>

              {/* Hackathon List */}
              <div className="space-y-4 font-mono">
                <div className="flex items-center gap-4 group cursor-pointer hover:bg-[#9d4edd]/5 p-2 rounded transition-colors">
                  <div className="text-[#c77dff] opacity-50 group-hover:opacity-100">01</div>
                  <div>
                    <div className="text-white font-bold group-hover:text-[#c77dff]">&gt; Blockchain Summit</div>
                    <div className="text-xs text-slate-500">Prize: $5,000 USD</div>
                  </div>
                  <div className="ml-auto text-xs text-green-400 border border-green-500/30 px-2 py-1 rounded">OPEN</div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer hover:bg-[#9d4edd]/5 p-2 rounded transition-colors">
                  <div className="text-[#c77dff] opacity-50 group-hover:opacity-100">02</div>
                  <div>
                    <div className="text-white font-bold group-hover:text-[#c77dff]">&gt; AI for Good Lima</div>
                    <div className="text-xs text-slate-500">Prize: Incubation + Cash</div>
                  </div>
                  <div className="ml-auto text-xs text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded">SOON</div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="mt-8 flex gap-4">
                <div className="bg-[#9d4edd]/10 border border-[#9d4edd]/20 p-3 rounded flex-1 text-center">
                  <Trophy size={20} className="text-[#c77dff] mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">12</div>
                  <div className="text-[10px] text-slate-400">Active Events</div>
                </div>
                <div className="bg-[#9d4edd]/10 border border-[#9d4edd]/20 p-3 rounded flex-1 text-center">
                  <Users size={20} className="text-[#c77dff] mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">340</div>
                  <div className="text-[10px] text-slate-400">Hackers Ready</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
