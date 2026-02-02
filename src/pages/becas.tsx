import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';
import { LandingBecas } from '@/components/landings/LandingBecas';
import { Calendar, Building2, Coins, ExternalLink, Loader2, GraduationCap } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface Scholarship {
  id: string;
  title: string;
  organization: string;
  description: string;
  amount: string;
  deadline: string;
  category: string;
  apply_link: string;
}

export default function BecasPage() {
  const { user, loading: authLoading } = useAuth();
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScholarships();
  }, []);

  async function fetchScholarships() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('scholarships')
        .select('*')
        .order('deadline', { ascending: true }); // Order by closest deadline

      if (error) throw error;
      if (data) setScholarships(data);
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    } finally {
      setLoading(false);
    }
  }

  // 1. Loading State
  if (loading || authLoading) {
    return (
      <MainLayout title="Cargando... | LimaSTEM">
        <div className="min-h-screen bg-[#0b011d] flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-[#2ecc71] animate-spin" />
        </div>
      </MainLayout>
    );
  }

  // 2. Unauthenticated State -> Show Landing
  if (!user) {
    return (
      <MainLayout title="Becas y Financiamiento STEM | LimaSTEM">
        <LandingBecas />
      </MainLayout>
    );
  }

  // 3. Authenticated State -> Show List
  return (
    <MainLayout title="Becas | LimaSTEM">
      <div className="min-h-screen pt-4 md:pt-32 pb-20 px-6 relative overflow-hidden bg-[#0b011d]">
        {/* Background Elements */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#9d4edd] opacity-5 blur-[180px] rounded-full -z-10" />

        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/10 text-[11px] font-bold text-[#c77dff] uppercase tracking-widest mb-6 shadow-lg shadow-[#9d4edd]/10">
              <GraduationCap size={14} /> Oportunidades Académicas
            </span>
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Becas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77dff] to-white">Financiamiento</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              No dejes que el dinero sea un obstáculo. Encuentra becas completas y parciales para estudiar tecnología.
            </p>
          </div>

          {/* List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((beca, index) => (
              <motion.div
                key={beca.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#130725] border border-white/5 rounded-3xl p-8 hover:border-[#9d4edd]/30 transition-all hover:shadow-2xl hover:shadow-[#9d4edd]/5 group flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
              >
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7b2cbf] opacity-10 blur-[60px] rounded-full group-hover:opacity-20 transition-opacity" />

                {/* Left: Icon & Org */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Building2 size={28} className="text-[#c77dff]" />
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Organizado por</div>
                  <div className="text-sm font-bold text-white">{beca.organization}</div>
                </div>

                {/* Right: Content */}
                <div className="flex-grow space-y-4 relative z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#c77dff] transition-colors">
                      {beca.title}
                    </h3>
                    <span className="self-start md:self-auto px-3 py-1 bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20 rounded-lg text-xs font-bold uppercase tracking-wider">
                      {beca.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {beca.description || "Una oportunidad increíble para impulsar tu carrera profesional en el mundo de la tecnología."}
                  </p>

                  {/* Meta Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5 border-b mb-2">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        <Coins size={14} className="text-[#e0aaff]" /> Beneficio
                      </div>
                      <div className="text-lg font-bold text-white">{beca.amount}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        <Calendar size={14} className="text-[#e0aaff]" /> Cierre
                      </div>
                      <div className="text-lg font-bold text-white">
                        {new Date(beca.deadline).toLocaleDateString('es-PE', { day: 'numeric', month: 'short' })}
                      </div>
                    </div>
                  </div>

                  <button className="w-full h-12 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-[#c77dff] hover:text-white transition-all shadow-lg hover:shadow-[#c77dff]/25 mt-2">
                    Aplicar ahora <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {!loading && scholarships.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <p className="text-xl text-white">No hay becas disponibles por el momento.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
