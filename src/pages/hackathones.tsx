import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';
import { LandingHackathones } from '@/components/landings/LandingHackathones';
import { Terminal, Code2, Trophy, Users, Globe, ExternalLink, Loader2, Cpu } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface Hackathon {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  prize_pool: string;
  team_size: string;
  register_link: string;
}

export default function HackathonesPage() {
  const { user, loading: authLoading } = useAuth();
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHackathons();
  }, []);

  async function fetchHackathons() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('hackathons')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      if (data) setHackathons(data);
    } catch (error) {
      console.error('Error fetching hackathons:', error);
    } finally {
      setLoading(false);
    }
  }

  // 1. Loading State
  if (loading || authLoading) {
    return (
      <MainLayout title="Cargando... | LimaSTEM">
        <div className="min-h-screen bg-[#050011] flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#00f3ff] animate-spin" />
        </div>
      </MainLayout>
    );
  }

  // 2. Unauthenticated State -> Show Landing
  if (!user) {
    return (
      <MainLayout title="Hackathones y Retos de Programación | LimaSTEM">
        <LandingHackathones />
      </MainLayout>
    );
  }

  // 3. Authenticated State -> Show Dashboard
  return (
    <MainLayout title="Hackathones | LimaSTEM">
      <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-[#050011]">
        {/* Cyberpunk Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        {/* Neon Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#9d4edd] opacity-10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 text-[11px] font-bold text-[#00f3ff] uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(0,243,255,0.2)] font-mono">
              <Terminal size={14} /> Compite & Construye
            </span>
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 uppercase tracking-tighter">
              Hacka<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#7b2cbf] outline-text">thones</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-mono">
              &lt;Desafía tus límites en las competencias de programación más intensas de Lima. /&gt;
            </p>
          </div>

          {/* List */}
          <div className="grid grid-cols-1 gap-8">
            {hackathons.map((hack, index) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0514] border border-[#00f3ff]/20 rounded-2xl overflow-hidden hover:border-[#00f3ff]/60 transition-all duration-300"
              >
                {/* Neon Bar Left */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00f3ff] to-[#7b2cbf]" />

                <div className="flex flex-col md:flex-row">
                  {/* Date Block */}
                  <div className="md:w-48 bg-[#00f3ff]/5 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#00f3ff]/10">
                    <Cpu size={32} className="text-[#00f3ff] mb-2 opacity-80" />
                    <div className="text-sm font-mono text-[#00f3ff]">{hack.date ? new Date(hack.date).getFullYear() : 'TBA'}</div>
                    <div className="text-3xl font-black text-white uppercase">{hack.date ? new Date(hack.date).toLocaleDateString('es-PE', { month: 'short' }) : 'Soon'}</div>
                    <div className="text-xl font-bold text-white">{hack.date ? new Date(hack.date).getDate() : '--'}</div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-grow p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {hack.location === 'Virtual' ? (
                          <span className="px-2 py-0.5 rounded border border-[#c77dff]/30 text-[#c77dff] text-[10px] font-bold uppercase tracking-widest bg-[#c77dff]/10 flex items-center gap-1">
                            <Globe size={10} /> Online Global
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded border border-white/20 text-slate-300 text-[10px] font-bold uppercase tracking-widest bg-white/5">
                            📍 {hack.location}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded border border-[#00f3ff]/30 text-[#00f3ff] text-[10px] font-bold uppercase tracking-widest bg-[#00f3ff]/10 flex items-center gap-1">
                          <Users size={10} /> {hack.team_size}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-2 font-sans tracking-tight group-hover:text-[#00f3ff] transition-colors">
                        {hack.title}
                      </h3>
                      <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-3xl">
                        {hack.description || "Prepara tu equipo. El desafío está por comenzar. Construye soluciones innovadoras en tiempo récord."}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/5 border-dashed">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Premios</div>
                          <div className="text-xl font-bold text-[#ffdd00] flex items-center gap-2">
                            <Trophy size={18} /> {hack.prize_pool}
                          </div>
                        </div>
                      </div>

                      <button className="h-12 px-8 bg-[#00f3ff] hover:bg-[#00c2cc] text-[#050011] font-black uppercase tracking-widest skew-x-[-10deg] transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                        <span className="skew-x-[10deg] flex items-center gap-2">Inscribirse <Code2 size={18} /></span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!loading && user && hackathons.length === 0 && (
            <div className="text-center py-24 border border-white/5 rounded-2xl bg-white/[0.02]">
              <Cpu size={48} className="text-slate-600 mx-auto mb-4" />
              <p className="text-xl text-slate-400 font-mono">System.out.println("No hay hackathones activos");</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
