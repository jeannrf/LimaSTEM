import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { GraduationCap, Globe, BookOpen, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BecasLanding() {
  return (
    <MainLayout title="Becas | LimaSTEM">
      <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#c77dff] opacity-10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center max-w-6xl">
          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c77dff] text-sm font-medium mb-8 w-fit">
              <GraduationCap size={16} />
              <span>Financia tus Sueños</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-none">
              Becas y Oportunidades <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77dff] to-white">Globales</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Accede a una base de datos curada de becas de pregrado y posgrado. Filtra por país, carrera o tipo de financiamiento.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1"><Globe size={20} className="text-[#c77dff]" /></div>
                <div>
                  <h4 className="font-bold text-white">Cobertura Nacional e Internacional</h4>
                  <p className="text-sm text-slate-400">Desde PRONABEC hasta Fulbright y becas universitarias privadas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><Clock size={20} className="text-[#c77dff]" /></div>
                <div>
                  <h4 className="font-bold text-white">Recordatorios de Cierre</h4>
                  <p className="text-sm text-slate-400">Nunca más pierdas una fecha límite de postulación.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><BookOpen size={20} className="text-[#c77dff]" /></div>
                <div>
                  <h4 className="font-bold text-white">Guías de Postulación</h4>
                  <p className="text-sm text-slate-400">Recursos y tips para preparar tu ensayo y entrevista.</p>
                </div>
              </div>
            </div>

            <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#9d4edd]/20 w-fit">
              Explorar Becas <ArrowRight size={18} />
            </Link>
          </div>

          {/* Visual / Card Stack */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Card 1 */}
            <div className="absolute top-0 right-10 w-64 h-80 bg-[#1a0b2e] border border-white/10 rounded-2xl rotate-6 z-10 p-6 flex flex-col justify-between shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-[#c77dff] opacity-20" />
              <div className="space-y-2">
                <div className="h-2 w-16 bg-white/20 rounded" />
                <div className="h-4 w-full bg-white/10 rounded" />
                <div className="h-4 w-2/3 bg-white/10 rounded" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative w-64 h-80 bg-[#240046] border border-white/10 rounded-2xl -rotate-6 z-20 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-[#c77dff]/20 flex items-center justify-center text-[#c77dff]">
                  <GraduationCap size={24} />
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-green-500/20 text-green-400">ABIERTA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Beca Generación</h3>
                <p className="text-xs text-slate-400">Estudios de maestría y doctorado en las mejores universidades del mundo.</p>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#c77dff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
