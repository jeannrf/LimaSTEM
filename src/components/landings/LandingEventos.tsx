import Link from "next/link";
import { Calendar, Bell, Ticket, ArrowRight, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

export const LandingEventos = () => {
  return (
    <div className="min-h-screen bg-[#0b011d] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#7b2cbf] opacity-10 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/10 text-[11px] font-bold text-[#c77dff] uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <Star size={12} className="text-[#ffdd00]" /> Tu Agenda Tech en Lima
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl"
        >
          Nunca más te pierdas un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77dff] to-[#7b2cbf]">Evento STEM</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
        >
          Centralizamos todas las conferencias, talleres, meetups y hackathones de las mejores comunidades y universidades de Lima en un solo calendario inteligente.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link href="/register" className="h-14 px-8 rounded-full bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold transition-all shadow-lg shadow-[#9d4edd]/20 flex items-center justify-center gap-2 group">
            Ver Calendario Completo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/login" className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center">
            Iniciar Sesión
          </Link>
        </motion.div>

        {/* Feature Grid (Floating Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            {
              icon: Calendar,
              title: "Agenda Unificada",
              desc: "Adiós a buscar en 20 páginas de Facebook. Todo está aquí.",
              color: "bg-blue-500"
            },
            {
              icon: Bell,
              title: "Alertas Smart",
              desc: "Te avisamos cuando haya eventos de tus tecnologías favoritas.",
              color: "bg-purple-500"
            },
            {
              icon: Ticket,
              title: "Registro Fácil",
              desc: "Inscripción directa y gestión de tus entradas sin caos.",
              color: "bg-pink-500"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-[#130725] border border-white/5 p-8 rounded-3xl hover:border-[#9d4edd]/30 transition-all group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5`}>
                <item.icon size={24} className="text-white" />
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
