import Link from "next/link";
import { GraduationCap, Globe, ArrowRight, BookOpen, Star, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const LandingBecas = () => {
  return (
    <div className="min-h-screen bg-[#0b011d] relative overflow-hidden flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#7b2cbf] opacity-10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9d4edd] opacity-5 blur-[150px] rounded-full -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* Left Column: Mock UI (Swapped) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative lg:order-1 order-2"
          >
            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#9d4edd]/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#9d4edd]/20 rounded-full" />

            {/* Main Success Card */}
            <div className="bg-[#130725] border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl max-w-md mx-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7b2cbf] opacity-20 blur-[40px] rounded-full -z-10" />

              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4 border border-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">¡Felicidades, Sofia!</h3>
                <p className="text-sm text-slate-400">Tu postulación ha sido enviada</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-2xl">🇬🇧</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Chevening Scholarship</h4>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <MapPin size={10} /> United Kingdom
                    </div>
                  </div>
                  <span className="ml-auto text-[10px] font-bold text-[#c77dff] bg-[#c77dff]/10 px-2 py-1 rounded border border-[#c77dff]/20">MASTER</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Cobertura</div>
                    <div className="text-white font-bold text-sm">100% Full</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Stipend</div>
                    <div className="text-white font-bold text-sm">£1,500/mo</div>
                  </div>
                </div>
              </div>

              <button className="w-full h-12 rounded-xl bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                Ver Estado <ArrowRight size={16} />
              </button>
            </div>

            {/* Floating Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-4 bg-[#1a0b2e] px-4 py-2 rounded-full border border-white/10 shadow-xl flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold text-white">Aceptado</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 bg-[#1a0b2e] p-3 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center gap-1 w-24"
            >
              <div className="text-[10px] text-slate-400 uppercase">Ahorro</div>
              <div className="text-lg font-bold text-[#c77dff]">$45k</div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content (Swapped) */}
          <div className="flex flex-col items-start text-left lg:order-2 order-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9d4edd]/20 bg-[#9d4edd]/5 text-[11px] font-semibold text-[#c77dff] uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <BookOpen size={12} /> Oportunidades Académicas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-medium text-white mb-6 leading-[1.1] tracking-tight"
            >
              Becas que cambian <br />
              <span className="text-[#c77dff]">tu carrera profesional</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              Accede a la base de datos más completa de becas, pasantías y ayudas financieras para estudiantes STEM en Perú y el mundo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/register" className="h-14 px-8 rounded-full bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(123,44,191,0.3)] flex items-center justify-center gap-2 group">
                Encontrar becas <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-3 text-sm text-slate-500"
            >
              <div className="flex items-center gap-1 text-[#ffdd00]">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p>Más de $500k en becas listadas</p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
