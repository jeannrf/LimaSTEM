import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import { Calendar, MapPin, Trophy, Star, ArrowRight, Bookmark, Zap, User, GraduationCap, Code2, Loader2, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Protect the route
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b011d] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#9d4edd] animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <MainLayout title="Panel Principal | LimaSTEM">
      <div className="pt-4 md:pt-32 pb-8 px-6 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7b2cbf] opacity-5 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-7xl">
          {/* 1. HEADER & STATS BAR */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-medium text-white mb-2">
                Panel de <span className="font-bold text-white">{user.user_metadata?.full_name?.split(' ')[0]}</span>
              </h1>
              <p className="text-slate-400 text-sm">Bienvenido a tu centro de control.</p>
            </div>

            {/* Stats Pills */}
            <div className="flex gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#130725] border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#9d4edd]/10 flex items-center justify-center text-[#9d4edd]">
                  <Bookmark size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none">0</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Guardados</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#130725] border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#2ecc71]/10 flex items-center justify-center text-[#2ecc71]">
                  <Trophy size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none">0</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Logros</div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN LAYOUT - Flex to ensure equal height columns */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* 2. MAIN CONTENT - AGENDA & RECOMMENDATIONS (2/3 Width) */}
            <div className="lg:w-2/3 flex flex-col gap-8">

              {/* Hero Action Card - Compact Version */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-gradient-to-r from-[#240046] to-[#10002b] border border-[#9d4edd]/20 p-6 relative overflow-hidden group flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9d4edd] opacity-10 blur-[80px] rounded-full -z-0 group-hover:opacity-20 transition-opacity" />

                <div className="relative z-10 max-w-lg">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#9d4edd]/20 border border-[#9d4edd]/30 text-[#c77dff] text-[10px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles size={12} /> Sugerencia del día
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Tu agenda está vacía esta semana.</h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    ¿Por qué no empiezas explorando los eventos más populares?
                  </p>
                </div>

                <div className="relative z-10 shrink-0">
                  <Link href="/eventos" className="inline-flex items-center gap-2 h-10 px-6 rounded-xl bg-white text-[#240046] text-sm font-bold hover:bg-[#c77dff] hover:text-white transition-all shadow-lg hover:shadow-[#c77dff]/25 whitespace-nowrap">
                    Explorar Eventos <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              {/* Weekly Top Picks (Horizontal) */}
              <div className="flex-grow flex flex-col">
                <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-[#00f3ff]" /> Tendencias en Lima
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                  {/* Pick 1 */}
                  <div className="bg-[#130725] border border-white/5 rounded-2xl p-5 hover:border-[#00f3ff]/30 transition-all group cursor-pointer relative overflow-hidden flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-[#00f3ff]/10 flex items-center justify-center text-[#00f3ff] mb-4 shrink-0">
                      <Code2 size={20} />
                    </div>
                    <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hackathon</div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#00f3ff] transition-colors">NASA Space Apps Lima</h4>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">El hackathon más grande del universo llega a la PUCP este mes.</p>
                    <div className="text-xs font-bold text-[#00f3ff] flex items-center gap-1 mt-auto">
                      Ver inscripción <ArrowRight size={12} />
                    </div>
                  </div>

                  {/* Pick 2 */}
                  <div className="bg-[#130725] border border-white/5 rounded-2xl p-5 hover:border-[#ffdd00]/30 transition-all group cursor-pointer relative overflow-hidden flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-[#ffdd00]/10 flex items-center justify-center text-[#ffdd00] mb-4 shrink-0">
                      <Trophy size={20} />
                    </div>
                    <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Concurso</div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#ffdd00] transition-colors">Impact Startup Challenge</h4>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">Presenta tu idea de startup y gana capital semilla.</p>
                    <div className="text-xs font-bold text-[#ffdd00] flex items-center gap-1 mt-auto">
                      Más información <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* 3. SIDEBAR (1/3 Width) - Full Height */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* Preferences Prompt */}
              <div className="bg-[#130725] border border-white/5 rounded-3xl p-6 shrink-0">
                <div className="flex gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#9d4edd]/10 shrink-0 flex items-center justify-center text-[#9d4edd]">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Mejora tus recomendaciones</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      ¡Te recomendaremos eventos y becas según tus preferencias!
                    </p>
                  </div>
                </div>
                <Link href="/perfil" className="w-full py-2.5 rounded-xl border border-white/10 text-slate-300 text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/5 hover:text-white transition-all">
                  <User size={16} /> Editar mis preferencias
                </Link>
              </div>

              {/* Upcoming Timeline - Flex Grow to Fill Height */}
              <div className="bg-[#130725] border border-white/5 rounded-3xl p-6 relative overflow-hidden flex-grow flex flex-col">
                <h3 className="font-bold text-white text-sm mb-6 flex items-center gap-2 shrink-0">
                  <Clock size={16} className="text-[#c77dff]" /> Próximos Eventos
                </h3>

                {/* Timeline Line */}
                <div className="absolute left-9 top-16 bottom-6 w-px bg-white/5" />

                <div className="space-y-6 relative z-10 flex-grow">
                  {/* Empty State Item */}
                  <div className="flex gap-4 opacity-50">
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 shrink-0 mt-0.5" />
                    <div className="bg-white/5 rounded-xl p-3 w-full border border-white/5">
                      <div className="h-3 w-24 bg-white/10 rounded mb-2" />
                      <div className="h-2 w-full bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-4 opacity-30">
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 shrink-0 mt-0.5" />
                    <div className="bg-white/5 rounded-xl p-3 w-full border border-white/5">
                      <div className="h-3 w-20 bg-white/10 rounded mb-2" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center shrink-0">
                  <p className="text-xs text-slate-500 mb-2">No tienes eventos próximos</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

// Simple Components are inline for now to ensure replace works smoothly
const SparklesIcon = () => <Sparkles size={20} className="text-[#FFDD00]" />;
