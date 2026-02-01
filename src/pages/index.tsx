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
    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/[0.08] transition-all group cursor-default hover:border-[#c77dff]">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#9d4edd] shadow-[0_0_12px_rgba(157,78,221,0.8)]" />
            <div className="text-[10px] text-[#c77dff] font-extrabold uppercase tracking-widest">{date}</div>
        </div>
        <div className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-[#c77dff] transition-colors">{title}</div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold italic">
            <MapPin size={10} className="text-[#9d4edd]" /> {loc}
        </div>
    </div>
);

export default function Home() {
    return (
        <Layout title="Potencia tu futuro con LimaSTEM">
            {/* Intense IDE Purple Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#7b2cbf]/20 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute bottom-[0%] left-[-20%] w-[60%] h-[60%] bg-[#9d4edd]/15 blur-[140px] rounded-full" />
                <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-[#3c096c]/40 blur-[120px] rounded-full" />
            </div>

            <div className="relative min-h-screen hero-grid flex flex-col items-center justify-center px-8 overflow-hidden">
                <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10 pt-24 pb-20">

                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/10 backdrop-blur-md text-[11px] font-bold text-[#c77dff] uppercase tracking-[0.2em] mb-10 shadow-lg shadow-[#9d4edd]/10">
                            <Sparkles size={14} className="text-[#9d4edd]" />
                            Tu agenda definitiva en Lima
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 text-linear leading-[1.2] lg:max-w-lg">
                            Potencia <br /> tu futuro con <br /> LimaSTEM
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium tracking-tight">
                            Centralizamos workshops, conferencias y eventos de crecimiento personal.
                            Todo el ecosistema STEM de Lima a velocidad luz.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                            <button className="h-14 px-10 rounded-full bg-[#7b2cbf] text-white text-sm font-bold hover:bg-[#9d4edd] shadow-2xl shadow-[#9d4edd]/40 transition-all flex items-center gap-3 group">
                                Explorar Eventos
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="h-14 px-10 rounded-full border border-[#9d4edd]/30 text-[#c77dff] text-sm font-bold bg-[#9d4edd]/5 hover:bg-[#9d4edd]/10 backdrop-blur-md transition-all">
                                Mejora Personal
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT: Visuals (Aggressively Purple) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 w-full flex flex-col gap-6"
                    >
                        <div className="premium-card p-8 shadow-[0_30px_100px_-20px_rgba(36,0,70,0.6)] border-[#9d4edd]/20 relative overflow-visible">
                            <div className="absolute -top-3 left-8 px-4 py-1.5 bg-[#7b2cbf] text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl shadow-[#9d4edd]/40 z-30">
                                Agenda Lima
                            </div>

                            <div className="flex items-center justify-between mb-8 pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-[#9d4edd]/20 flex items-center justify-center border border-[#9d4edd]/40">
                                        <Calendar className="text-[#9d4edd]" size={16} />
                                    </div>
                                    <span className="text-sm font-semibold text-white tracking-tight">Eventos de Hoy</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-[#9d4edd]/10 rounded-full border border-[#9d4edd]/20">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-[#c77dff] uppercase tracking-widest">En Vivo</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <EventCard title="Hackathon IA Lima 2026" date="AHORA" loc="UPC Monterrico" />
                                <EventCard title="Taller de Liderazgo para Científicos" date="16:30" loc="Virtual" />
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0b011d] bg-[#240046] flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-[#7b2cbf] to-[#240046]" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-[#9d4edd] hover:text-[#c77dff] transition-colors cursor-pointer">Ver toda la semana →</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="premium-card p-5 border-[#9d4edd]/20 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-xl bg-[#9d4edd]/20 flex items-center justify-center text-[#9d4edd] border border-[#9d4edd]/30 group-hover:scale-110 transition-transform">
                                        <Target size={16} />
                                    </div>
                                    <span className="text-[11px] font-bold text-white uppercase tracking-tighter">Crecimiento</span>
                                </div>
                                <div className="h-1.5 w-full bg-[#0b011d] rounded-full overflow-hidden mb-2">
                                    <motion.div animate={{ width: "75%" }} className="h-full bg-[#9d4edd] shadow-[0_0_15px_rgba(157,78,221,0.6)]" />
                                </div>
                                <div className="text-[9px] font-bold text-[#c77dff] uppercase tracking-widest leading-none">Soft Skills +45%</div>
                            </div>

                            <div className="premium-card p-5 border-[#9d4edd]/20 flex flex-col justify-center text-center">
                                <div className="text-[10px] font-bold text-[#c77dff] uppercase tracking-widest mb-2 leading-none">Impacto en Lima</div>
                                <div className="text-3xl font-semibold text-white tracking-tighter">4.2k</div>
                                <div className="text-[9px] font-bold text-[#c77dff] uppercase tracking-widest mt-1 leading-none">Estudiantes</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="py-24 border-y border-white/5 bg-midnight relative z-10">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 leading-none text-center lg:text-left">
                        {[
                            { label: "Eventos Mensuales", value: "80+" },
                            { label: "Universidades", value: "15" },
                            { label: "Distritos", value: "12" },
                            { label: "Asistentes", value: "4,200" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="text-5xl font-semibold text-white tracking-tighter text-linear">
                                    {stat.value}
                                </div>
                                <div className="text-[11px] font-bold text-[#c77dff] uppercase tracking-[0.2em] leading-none">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-40 bg-midnight relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full purple-atmosphere opacity-50" />
                <div className="container mx-auto px-8 max-w-6xl relative z-10">
                    <div className="mb-24 max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8 text-linear leading-tight">Increíble experiencia diseñada para ti.</h2>
                        <p className="text-lg text-slate-300 font-medium tracking-tight">
                            No somos una red social más. Somos el motor que impulsa el descubrimiento de cada workshop y taller en la capital.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="premium-card p-12 group hover:-translate-y-2 transition-transform duration-500 border-[#9d4edd]/20">
                            <div className="w-16 h-16 rounded-2xl bg-[#7b2cbf]/30 flex items-center justify-center text-[#9d4edd] border border-[#9d4edd]/30 mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-[#9d4edd]/20">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">Agenda Integrada</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Recopilamos eventos de universidades, institutos y centros tecnológicos de todo Lima en un formato impecable y fácil de navegar.
                            </p>
                        </div>
                        <div className="premium-card p-12 group hover:-translate-y-2 transition-transform duration-500 border-[#9d4edd]/20">
                            <div className="w-16 h-16 rounded-2xl bg-[#9d4edd]/20 flex items-center justify-center text-[#9d4edd] border border-[#9d4edd]/30 mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-[#9d4edd]/20">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">Mejora Personal</h3>
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
