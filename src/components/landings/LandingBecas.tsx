import Link from "next/link";
import { GraduationCap, Globe, Briefcase, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const LandingBecas = () => {
  return (
    <div className="min-h-screen bg-[#0b011d] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#2ecc71] opacity-5 blur-[200px] rounded-full -z-10" />

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2ecc71]/30 bg-[#2ecc71]/10 text-[11px] font-bold text-[#2ecc71] uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <BookOpen size={12} /> Oportunidades Académicas
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl"
        >
          Financia tu futuro <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#2bd687]">Sin Límites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
        >
          Accede a la base de datos más completa de becas, pasantías y ayudas económicas para estudiantes STEM en Perú y el mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link href="/register" className="h-14 px-8 rounded-full bg-[#2ecc71] hover:bg-[#27ae60] text-black font-bold transition-all shadow-lg shadow-[#2ecc71]/20 flex items-center justify-center gap-2 group">
            Buscar Becas Gratis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/login" className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center">
            Ya tengo cuenta
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            {
              icon: GraduationCap,
              title: "Becas de Estudio",
              desc: "Maestrías, doctorados y pregrado con cobertura total o parcial.",
              color: "bg-[#2ecc71]"
            },
            {
              icon: Globe,
              title: "Intercambios",
              desc: "Programas de movilidad estudiantil global para peruanos.",
              color: "bg-blue-400"
            },
            {
              icon: Briefcase,
              title: "Pasantías",
              desc: "Prácticas remuneradas en tech giants y startups unicornio.",
              color: "bg-purple-400"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-[#130725] border border-white/5 p-8 rounded-3xl hover:border-[#2ecc71]/30 transition-all group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5`}>
                <item.icon size={24} className={i === 0 ? "text-[#2ecc71]" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
