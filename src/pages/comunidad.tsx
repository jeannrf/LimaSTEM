import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Users, Search, MessageCircle, UserPlus, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  role: string;
  interests: string[] | null;
}

export default function ComunidadPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoading(false);
    }
  }

  // Filter profiles
  const filteredProfiles = profiles.filter(p =>
    p.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    p.role?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout title="Comunidad | LimaSTEM">
      <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-[#0b011d]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9d4edd] opacity-5 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7b2cbf] opacity-5 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-7xl">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Conecta con <span className="text-[#c77dff]">Talento STEM</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Encuentra compañeros de equipo, universitarios y egresados apasionados por participar en eventos y postular a becas STEM.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#9d4edd] transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre, rol o interés..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9d4edd]/50 focus:bg-[#130725] transition-all text-lg shadow-xl"
            />
          </div>

          {/* Grid */}
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#9d4edd] animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProfiles.map((profile, index) => {
                // Generate Initials
                const initials = profile.full_name
                  ? profile.full_name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
                  : "??";

                return (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#130725] border border-white/5 rounded-3xl p-6 hover:border-[#9d4edd]/30 transition-all hover:shadow-2xl hover:shadow-[#9d4edd]/5 group flex flex-col items-center text-center relative overflow-hidden"
                  >
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] p-[2px]">
                        <div className="w-full h-full rounded-full bg-[#130725] flex items-center justify-center overflow-hidden">
                          {profile.avatar_url ? (
                            <img src={profile.avatar_url} alt={profile.full_name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-2xl font-bold text-white tracking-widest">{initials}</span>
                          )}
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#0b011d] flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-[#0b011d]" />
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#c77dff] transition-colors line-clamp-1">
                      {profile.full_name || "Usuario Anónimo"}
                    </h3>
                    <p className="text-xs font-medium text-[#9d4edd] bg-[#9d4edd]/10 px-3 py-1 rounded-full border border-[#9d4edd]/20 mb-4 uppercase tracking-wider">
                      {profile.role || 'Estudiante'}
                    </p>

                    {/* Interests Tags (Mocked if null) */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6 w-full h-12 overflow-hidden">
                      {(profile.interests || ['Tech', 'Innovation', 'Code']).slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] text-slate-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 w-full mt-auto">
                      <button className="flex-1 h-9 rounded-xl bg-white text-black text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#c77dff] hover:text-white transition-all">
                        <MessageCircle size={14} /> Mensaje
                      </button>
                      <button className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                        <UserPlus size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {!loading && filteredProfiles.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <p className="text-xl text-white">No se encontraron miembros.</p>
            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}
