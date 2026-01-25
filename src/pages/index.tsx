import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award } from 'lucide-react';
import Layout from '@/layouts/MainLayout';
import { Button } from '@/components/Button';

export default function Home() {
    return (
        <Layout>
            <div className="relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-600/20 rounded-full blur-[120px] animate-pulse-slow" />

                <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6 inline-block">
                            Nueva Plataforma para Estudiantes
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
                            Impulsa tu carrera <br />
                            <span className="gradient-text">STEM en Lima</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                            Centralizamos becas, eventos y networking en tiempo real. La comunidad más grande de futuros ingenieros y científicos en un solo lugar.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
                            <Button variant="primary" size="lg" className="h-14">
                                Explorar Oportunidades
                            </Button>
                            <Button variant="glass" size="lg" className="h-14">
                                Ver Comunidad
                            </Button>
                        </div>
                    </motion.div>

                    {/* Features Quick Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                        {[
                            { icon: Calendar, title: "Eventos STEM", desc: "Talleres, hackathons y conferencias." },
                            { icon: Award, title: "Becas & Ayuda", desc: "Directorio actualizado de becas locales e internacionales." },
                            { icon: Users, title: "Networking", desc: "Conecta con estudiantes de tu misma carrera." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="stem-card text-left"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary-400">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </main>
            </div>
        </Layout>
    );
}
