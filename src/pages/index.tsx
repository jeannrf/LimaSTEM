import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    ArrowRight,
    MapPin,
    Target,
    Rocket,
    Sparkles,
    Clock,
    Zap,
} from "lucide-react";
import Layout from "@/layouts/MainLayout";

const EventCard = ({ title, date, loc }: { title: string; date: string; loc: string }) => (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/[0.05] transition-colors group cursor-default">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
            <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">{date}</div>
        </div>
        <div className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-primary-300 transition-colors">{title}</div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold italic">
            <MapPin size={10} className="text-primary-500/50" /> {loc}
        </div>
    </div>
);

export default function Home() {
    return (
        <Layout title="LimaSTEM — Agenda de Eventos y Crecimiento Personal">
            {/* Dynamic Purple Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative min-h-screen hero-grid flex flex-col items-center justify-center px-8">
                <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10 py-32">

                    {/* LEFT: Text Content (Supercharged Style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-md text-[11px] font-bold text-primary-300 uppercase tracking-[0.15em] mb-10">
                            <Sparkles size={14} className="text-primary-400" />
                            Tu agenda definitiva en Lima
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white mb-8 text-linear leading-[1.1] lg:max-w-xl">
                            Eventos <br /> increíbles <br /> para ti en Lima.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium tracking-tight">
                            Centralizamos workshops, conferencias y eventos de crecimiento personal.
                            Todo el ecosistema STEM de Lima a velocidad luz.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                            <button className="h-14 px-10 rounded-full bg-primary-600 text-white text-sm font-bold hover:bg-primary-500 shadow-2xl shadow-primary-500/30 transition-all flex items-center gap-3 group">
                                Explorar Eventos
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="h-14 px-10 rounded-full border border-white/10 text-white text-sm font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all">
                                Mejora Personal
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT: Visuals Group (Supercharged Inspired Layout) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 w-full flex flex-col gap-6"
                    >
                        {/* Main Center Card - The "Heart" of the UI */}
                        <div className="premium-card p-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border-white/10 relative overflow-visible">
                            {/* Decorative floating label */}
                            <div className="absolute -top-3 left-8 px-4 py-1.5 bg-primary-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary-500/20 z-30">
                                Agenda Lima
                            </div>

                            <div className="flex items-center justify-between mb-8 pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                                        <Calendar className="text-primary-400" size={16} />
                                    </div>
                                    <span className="text-sm font-extrabold text-white tracking-tight">Eventos de Hoy</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">En Vivo</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <EventCard title="Hackathon IA Lima 2026" date="AHORA" loc="UPC Monterrico" />
                                <EventCard title="Taller de Liderazgo para Científicos" date="16:30" loc="Virtual" />
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030014] bg-slate-800" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-slate-500 hover:text-primary-400 transition-colors cursor-pointer">Ver toda la semana →</span>
                            </div>
                        </div>

                        {/* Bottom Row - Supporting Widgets */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="premium-card p-5 border-white/10 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                        <Target size={16} />
                                    </div>
                                    <span className="text-[11px] font-bold text-white uppercase tracking-tighter">Crecimiento</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                                    <motion.div animate={{ width: "75%" }} className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                </div>
                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Soft Skills +45%</div>
                            </div>

                            <div className="premium-card p-5 border-white/10 flex flex-col justify-center text-center">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Impacto en Lima</div>
                                <div className="text-3xl font-black text-white tracking-tighter">4.2k</div>
                                <div className="text-[9px] font-bold text-primary-400 uppercase tracking-widest mt-1">Estudiantes</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- STATISTICS (Supercharged Style) --- */}
            <section className="py-24 border-y border-white/5 bg-[#030014] relative z-10">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 leading-none">
                        {[
                            { label: "Eventos Mensuales", value: "80+" },
                            { label: "Universidades", value: "15" },
                            { label: "Distritos", value: "12" },
                            { label: "Asistentes", value: "4,200" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="text-5xl font-black text-white tracking-tighter">
                                    {stat.value}
                                </div>
                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURES GRID --- */}
            <section className="py-40 bg-[#030014]">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="mb-24 lg:max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8 text-linear leading-tight">Increíble experiencia diseñada para ti.</h2>
                        <p className="text-lg text-slate-400 font-medium tracking-tight">
                            No somos una red social más. Somos el motor que impulsa el descubrimiento de cada workshop y taller en la capital.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="premium-card p-12 group hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-primary-600/20 flex items-center justify-center text-primary-400 border border-primary-500/20 mb-10 group-hover:scale-110 transition-transform">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Agenda Integrada</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Recopilamos eventos de universidades, institutos y centros tecnológicos de todo Lima en un formato impecable y fácil de navegar.
                            </p>
                        </div>
                        <div className="premium-card p-12 group hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-10 group-hover:scale-110 transition-transform">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Mejora Personal</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Accede a talleres enfocados en liderazgo, productividad y habilidades blandas específicamente para perfiles STEM.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
