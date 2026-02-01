import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Code2, Target, Users, Zap, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function HackathonesLanding() {
  return (
    <MainLayout title="Hackathones | LimaSTEM">
      <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9d4edd] opacity-10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c77dff] text-sm font-medium mb-8">
            <Terminal size={16} />
            <span>Zona de Competencia</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-medium mb-8 tracking-tighter">
            Construye el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#c77dff]">Futuro</span>
          </h1>

          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Participa en las hackathones más importantes de Lima y del mundo virtual. Pon a prueba tus habilidades, gana premios y conecta con recruiters de top tech companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9d4edd]/30 transition-colors group">
              <Target className="w-10 h-10 text-[#9d4edd] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Desafíos Reales</h3>
              <p className="text-sm text-slate-400">Resuelve problemas propuestos por empresas y ONGs usando tecnología.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9d4edd]/30 transition-colors group">
              <Users className="w-10 h-10 text-[#9d4edd] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Forma Equipos</h3>
              <p className="text-sm text-slate-400">¿No tienes equipo? Nuestra plataforma te conecta con perfiles complementarios.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9d4edd]/30 transition-colors group">
              <Zap className="w-10 h-10 text-[#9d4edd] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Mentoria Expert</h3>
              <p className="text-sm text-slate-400">Recibe feedback en tiempo real de mentores senior durante el evento.</p>
            </div>
          </div>

          <Link href="/register" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-[#0b011d] font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105">
            <Code2 size={24} />
            Unirme a la comunidad
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
