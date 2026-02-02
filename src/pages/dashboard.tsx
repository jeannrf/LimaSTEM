import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Calendar, MapPin, Tag, Search, Filter, Loader2 } from 'lucide-react';
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

  if (!user) return null; // Prevent flash of content before redirect

  return (
    <MainLayout title="Panel Principal | LimaSTEM">
      <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9d4edd] opacity-10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-7xl">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Bienvenido de nuevo</p>
              <h1 className="text-3xl md:text-5xl font-medium text-white">
                Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77dff] to-white">{user.user_metadata?.full_name?.split(' ')[0]}</span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-auto relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Buscar eventos, becas..."
                className="w-full md:w-80 h-12 pl-11 pr-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9d4edd]/50 transition-all font-medium text-sm"
              />
            </div>
          </div>

          {/* Filters (Mockup for now) */}
          <div className="flex gap-3 overflow-x-auto pb-6 mb-8 scrollbar-hide">
            <button className="h-10 px-5 rounded-xl bg-[#7b2cbf] text-white text-sm font-bold shadow-lg shadow-[#9d4edd]/20 whitespace-nowrap">
              Todos
            </button>
            {['Tecnología', 'Ciencia', 'Matemáticas', 'Ingeniería', 'Hackathones', 'Talleres'].map((cat) => (
              <button key={cat} className="h-10 px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium transition-colors whitespace-nowrap">
                {cat}
              </button>
            ))}
            <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors ml-auto">
              <Filter size={18} />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card Mockup 1 */}
            <DashboardCard
              category="Conferencia"
              title="IA Summit Lima 2026"
              date="15 Mar, 2026"
              location="UTEC - Barranco"
              tags={['Inteligencia Artificial', 'Networking']}
              image="bg-gradient-to-br from-[#240046] to-[#3c096c]"
            />
            {/* Event Card Mockup 2 */}
            <DashboardCard
              category="Hackathon"
              title="HackMIT Perú Edition"
              date="22 Abr, 2026"
              location="PUCP - San Miguel"
              tags={['Programación', 'Premios']}
              image="bg-gradient-to-br from-[#3a0ca3] to-[#4361ee]"
            />
            {/* Event Card Mockup 3 */}
            <DashboardCard
              category="Taller"
              title="Robótica con Arduino"
              date="05 May, 2026"
              location="FabLab Lima"
              tags={['Hardware', 'Principiantes']}
              image="bg-gradient-to-br from-[#7209b7] to-[#f72585]"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function DashboardCard({ category, title, date, location, tags, image }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-3xl bg-[#130725] border border-white/5 overflow-hidden hover:border-[#9d4edd]/30 transition-all hover:shadow-2xl hover:shadow-[#9d4edd]/10 flex flex-col"
    >
      <div className={`h-40 w-full ${image} relative p-6 flex flex-col justify-between`}>
        <span className="self-start px-3 py-1 rounded-lg bg-black/30 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider border border-white/10">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c77dff] transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Calendar size={16} className="text-[#9d4edd]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin size={16} className="text-[#9d4edd]" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
