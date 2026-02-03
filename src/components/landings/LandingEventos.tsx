import Link from "next/link";
import { Calendar, ArrowRight, Zap, MapPin, Clock, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export const LandingEventos = () => {
  return (
    <div className="min-h-screen bg-[#0b011d] relative overflow-hidden flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7b2cbf] opacity-10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9d4edd] opacity-5 blur-[150px] rounded-full -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-[#c77dff] uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <Star size={12} className="text-[#c77dff]" /> Tu Agenda Definitiva en Lima
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-medium text-white mb-6 leading-[1.1] tracking-tight"
            >
              Potencia tu futuro con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#c77dff]">LimaSTEM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              Centralizamos workshops, conferencias y eventos de crecimiento profesional. Todo el ecosistema STEM de Lima a velocidad luz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/register" className="h-14 px-8 rounded-full bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(123,44,191,0.5)] flex items-center justify-center gap-2 group">
                Descubrir eventos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>


          </div>

          {/* Right Column: Mock UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-[#7b2cbf] opacity-20 blur-[60px] rounded-[40px] -z-10" />

            {/* Main Interactive Card */}
            <div className="bg-[#130725] border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">

              {/* Header Mock */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7b2cbf]/20 flex items-center justify-center text-[#c77dff]">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Agenda Lima</h3>
                    <p className="text-xs text-slate-400">Próximos 7 días</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20 flex items-center gap-1 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> EN VIVO
                </span>
              </div>

              {/* Event Items Mock */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-2xl border border-white/5 group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-[#c77dff] uppercase tracking-wider flex items-center gap-1">
                      <Zap size={10} /> Ahora
                    </span>
                  </div>
                  <h4 className="text-white font-bold mb-1 group-hover:text-[#c77dff] transition-colors">Conferencia Tech Lima 2026</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin size={12} /> <span className="truncate">UPC Monterrico, Lima</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-2xl border border-white/5 group cursor-pointer opacity-80">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Clock size={10} /> 16:30
                    </span>
                  </div>
                  <h4 className="text-white font-bold mb-1">Taller de Liderazgo para Científicos</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin size={12} /> <span>Virtual</span>
                  </div>
                </div>
              </div>

              {/* Fake Stats / Footer Mock */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#2a1b4e] border-2 border-[#130725]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#c77dff] cursor-pointer hover:underline">Ver toda la semana →</span>
              </div>

            </div>
          </motion.div>



        </div>
      </div>
    </div>
  );
}
