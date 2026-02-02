import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';
import { LandingEventos } from '@/components/landings/LandingEventos';
import { Calendar, MapPin, Search, Filter, Loader2, Sparkles, Bell, Ticket, ChevronDown, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

// Types for our Event data
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  image_url: string | null;
  is_featured: boolean;
}

const INTERESTS = ['Blockchain', 'Ciberseguridad', 'Data Science', 'Diseño UX/UI', 'Inteligencia Artificial', 'Programación', 'Robótica'];

export default function EventosPage() {
  const [events, setEvents] = useState<Event[]>([]);
  // Use auth context for user verification
  const { user, loading: authLoading } = useAuth();

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');
  const [isInterestOpen, setIsInterestOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  useEffect(() => {
    // Fetch events for everyone
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      if (data) setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredEvents = events.filter(e => {
    const matchesCategory = filter === 'Todos' || e.category === filter;
    // const matchesInterest = !selectedInterest || (e.tags && e.tags.includes(selectedInterest));
    return matchesCategory;
  });

  // Gradient helper for cards
  const getGradient = (index: number) => {
    const gradients = [
      'from-[#7b2cbf] to-[#9d4edd]',
      'from-[#3a0ca3] to-[#4361ee]',
      'from-[#7209b7] to-[#f72585]',
      'from-[#240046] to-[#3c096c]'
    ];
    return gradients[index % gradients.length];
  };

  // 1. Loading State
  if (loading || authLoading) {
    return (
      <MainLayout title="Cargando... | LimaSTEM">
        <div className="min-h-screen bg-[#0b011d] flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-[#9d4edd] animate-spin" />
        </div>
      </MainLayout>
    );
  }

  // 2. Unauthenticated State -> Show Landing
  if (!user) {
    return (
      <MainLayout title="Eventos Tech y STEM en Lima | LimaSTEM">
        <LandingEventos />
      </MainLayout>
    );
  }

  // 3. Authenticated State -> Show Dashboard
  return (
    <MainLayout title="Eventos | LimaSTEM">
      <div className="min-h-screen pt-4 md:pt-32 pb-20 px-6 relative overflow-hidden bg-[#0b011d]">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9d4edd] opacity-5 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7b2cbf] opacity-5 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-7xl">

          {/* HEADER: Title & Type Filters */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-white mb-3 tracking-tight">
                Explora el Calendario <span className="text-[#c77dff] font-bold">STEM</span>
              </h1>
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                Conferencias, talleres y meetups seleccionados para tu crecimiento profesional.
              </p>
            </div>

            {/* Type Filters (Moved to Header) */}
            <div className="flex gap-2 overflow-x-auto pb-2 xl:pb-0 scrollbar-hide w-full xl:w-auto shrink-0">
              {['Todos', 'Conferencia', 'Taller', 'Meetup', 'Webinar'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`h-10 px-5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${filter === cat
                    ? 'bg-[#7b2cbf] border-[#7b2cbf] text-white shadow-lg shadow-[#9d4edd]/20'
                    : 'bg-[#130725] border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* TOOLBAR: Search & Interest Dropdown */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {/* Search Bar */}
            <div className="relative flex-grow group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#9d4edd] transition-colors">
                <Search size={22} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Buscar evento por nombre..."
                className="w-full h-12 pl-14 pr-6 rounded-xl bg-[#130725] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9d4edd]/50 focus:bg-[#1a0b30] focus:shadow-lg focus:shadow-[#9d4edd]/10 transition-all font-medium"
              />
            </div>

            {/* Interest Dropdown */}
            <div className="relative shrink-0 z-50">
              <button
                onClick={() => setIsInterestOpen(!isInterestOpen)}
                className={`w-full md:w-auto h-12 px-6 rounded-xl border flex items-center justify-between gap-3 transition-all font-bold text-sm ${selectedInterest
                  ? 'bg-[#7b2cbf]/20 border-[#7b2cbf] text-[#c77dff]'
                  : 'bg-[#130725] border-white/10 text-slate-300 hover:border-white/30'}`}
              >
                <div className="flex items-center gap-2">
                  <Filter size={18} />
                  {selectedInterest || "Filtrar por Interés"}
                </div>
                {selectedInterest ? (
                  <div
                    onClick={(e) => { e.stopPropagation(); setSelectedInterest(null); }}
                    className="p-0.5 hover:bg-white/20 rounded-full"
                  >
                    <X size={14} />
                  </div>
                ) : (
                  <ChevronDown size={16} className={`transition-transform ${isInterestOpen ? 'rotate-180' : ''}`} />
                )}
              </button>

              <AnimatePresence>
                {isInterestOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsInterestOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-full md:w-64 bg-[#1e142b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 py-1"
                    >
                      {INTERESTS.map((interest) => (
                        <button
                          key={interest}
                          onClick={() => { setSelectedInterest(interest); setIsInterestOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-white/5 transition-colors ${selectedInterest === interest ? 'text-[#c77dff] bg-white/5' : 'text-slate-300'}`}
                        >
                          {interest}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Real Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#130725] border border-white/5 rounded-3xl overflow-hidden hover:border-[#9d4edd]/30 transition-all hover:shadow-2xl hover:shadow-[#9d4edd]/5"
              >
                {/* Image / Gradient Header */}
                <div className={`h-48 w-full bg-gradient-to-br ${getGradient(index)} relative p-6 flex flex-col justify-between overflow-hidden`}>
                  {/* Decorative blurred circle */}
                  <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-white/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                      {event.category}
                    </span>
                    {event.is_featured && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#ffdd00]/20 text-[#ffdd00] text-[10px] font-bold border border-[#ffdd00]/30">
                        <Sparkles size={10} /> DESTACADO
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c77dff] transition-colors leading-tight min-h-[3.5rem]">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
                    {event.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <Calendar size={16} className="text-[#9d4edd]" />
                      <span>
                        {new Date(event.date).toLocaleDateString('es-PE', {
                          day: 'numeric', month: 'long', year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <MapPin size={16} className="text-[#9d4edd]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Action (Sutil) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>

          {!loading && filteredEvents.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <p className="text-xl text-white">No se encontraron eventos.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
