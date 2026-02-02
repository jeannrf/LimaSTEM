import Link from "next/link";
import { Users, MessageCircle, Share2, ArrowRight, Heart, Search, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export const LandingComunidad = () => {
  return (
    <div className="min-h-screen bg-[#0b011d] relative overflow-hidden flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7b2cbf] opacity-5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9d4edd] opacity-5 blur-[150px] rounded-full -z-10" />

      {/* Dots Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* Left Column: Mock UI (Swapped) */}
          <motion.div
            initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative lg:order-1 order-2"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#7b2cbf]/20 to-[#9d4edd]/20 blur-[60px] rounded-full -z-10" />

            {/* Profile Cards Stack */}
            <div className="relative h-[400px] w-full flex items-center justify-center">

              {/* Card 1 (Back) */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-6, -4, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-8 bg-[#1a0524] border border-white/5 p-4 rounded-3xl w-64 shadow-2xl opacity-60 z-0 grayscale"
              >
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-500/20" />
                  <div className="space-y-2 flex-1">
                    <div className="h-2 bg-white/20 rounded w-2/3" />
                    <div className="h-2 bg-white/10 rounded w-1/3" />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 (Middle) */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [3, 5, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 right-8 bg-[#1a0524] border border-white/5 p-4 rounded-3xl w-64 shadow-2xl opacity-80 z-10"
              >
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#9d4edd]/20" />
                  <div className="space-y-2 flex-1">
                    <div className="h-2 bg-white/20 rounded w-3/4" />
                    <div className="h-2 bg-white/10 rounded w-1/2" />
                  </div>
                </div>
                <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
              </motion.div>

              {/* Card 3 (Front - Main) */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-[#130725] border border-white/10 p-6 rounded-[32px] w-72 shadow-2xl z-20 relative backdrop-blur-md"
              >
                <div className="absolute top-4 right-4 text-[#c77dff]">
                  <Heart size={20} fill="currentColor" />
                </div>

                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#7b2cbf] to-[#9d4edd] mb-3">
                    <div className="w-full h-full rounded-full bg-[#130725] p-1">
                      <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full rounded-full object-cover" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sofía Dev</h3>
                  <p className="text-sm text-[#c77dff]">Frontend Engineer</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-300">React</span>
                  <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-300">UX/UI</span>
                  <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-300">Node</span>
                </div>

                <button className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={16} /> Contactar
                </button>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Content (Swapped) */}
          <div className="flex flex-col items-start text-left lg:order-2 order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/10 text-[11px] font-semibold text-[#c77dff] uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <Heart size={12} /> Comunidad LimaSTEM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-medium text-white mb-6 leading-[1.1] tracking-tight"
            >
              Conecta con el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77dff] to-[#7b2cbf]">Talento del Futuro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              Somos más de 4,000 estudiantes, mentores y profesionales STEM compartiendo oportunidades, recursos y experiencias cada día.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/register" className="h-14 px-8 rounded-full bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-semibold transition-all shadow-lg shadow-[#9d4edd]/20 flex items-center justify-center gap-2 group">
                Comenzar Networking <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-4 border-t border-white/5 pt-6 w-full max-w-md"
            >
              <div className="flex-1">
                <div className="text-2xl font-bold text-white">4.2k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Miembros</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex-1">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Mentores</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex-1">
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Eventos</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
