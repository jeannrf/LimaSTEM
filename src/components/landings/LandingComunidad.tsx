import Link from "next/link";
import { Users, MessageCircle, Share2, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const LandingComunidad = () => {
  return (
    <div className="min-h-screen bg-[#0b011d] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Soft Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff0080] opacity-5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7928ca] opacity-5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff0080]/30 bg-[#ff0080]/10 text-[11px] font-bold text-[#ff0080] uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <Heart size={12} /> Comunidad LimaSTEM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl"
        >
          Conecta con el <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#7928ca]">Talento del Futuro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
        >
          Somos más de 4,000 estudiantes, mentores y profesionales STEM compartiendo oportunidades, recursos y experiencias cada día.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link href="/register" className="h-14 px-8 rounded-full bg-gradient-to-r from-[#ff0080] to-[#7928ca] hover:opacity-90 text-white font-bold transition-all shadow-lg shadow-[#ff0080]/20 flex items-center justify-center gap-2 group">
            Crear mi Perfil Profesional <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/login" className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center">
            Entrar a la Tribu
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            {
              icon: Users,
              title: "Directorio de Talentos",
              desc: "Encuentra perfiles por stack tecnológico, universidad o intereses.",
              color: "text-[#ff0080]",
              bg: "bg-[#ff0080]/10"
            },
            {
              icon: MessageCircle,
              title: "Networking Real",
              desc: "Mensajería directa para buscar mentores, socios o amigos.",
              color: "text-[#7928ca]",
              bg: "bg-[#7928ca]/10"
            },
            {
              icon: Share2,
              title: "Marca Personal",
              desc: "Hazte visible ante reclutadores con un perfil verificado STEM.",
              color: "text-[#0070f3]",
              bg: "bg-[#0070f3]/10"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-[#130725] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all group flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={26} className={item.color} />
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
