import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { CalendarDays, ArrowRight, Share2, Search, Bell } from 'lucide-react';
import Link from 'next/link';

export default function EventosLanding() {
  return (
    <MainLayout title="Eventos | LimaSTEM">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9d4edd] opacity-10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center max-w-6xl">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c77dff] text-sm font-medium mb-8 w-fit">
              <CalendarDays size={16} />
              <span>Conecta y Aprende</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-none">
              Eventos Académicos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#c77dff]">STEM en Lima</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Una plataforma centralizada para descubrir congresos, talleres, meetups y conferencias. No te pierdas ninguna oportunidad de crecimiento profesional.
            </p>
            <div className="flex gap-4">
              <Link href="/register" className="px-8 py-4 rounded-xl bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#9d4edd]/20">
                Crear Cuenta Gratis
              </Link>
            </div>
          </div>

          {/* Visual Representation Abstract */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9d4edd]/20 to-transparent rounded-3xl blur-3xl -z-10" />
            <div className="grid gap-6 p-6 md:p-10 border border-white/10 bg-[#0b011d]/50 backdrop-blur-xl rounded-3xl">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#7b2cbf]/20 flex items-center justify-center text-[#c77dff] flex-shrink-0">
                  <Search size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Descubrimiento Centralizado</h3>
                  <p className="text-slate-400 text-sm">Olvídate de buscar en decenas de páginas de Facebook. Todo reunido en un solo lugar.</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#7b2cbf]/20 flex items-center justify-center text-[#c77dff] flex-shrink-0">
                  <Share2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Comunidad en Vivo</h3>
                  <p className="text-slate-400 text-sm">Ve quién más asistirá, coordina transporte o simplemente haz networking antes del evento.</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#7b2cbf]/20 flex items-center justify-center text-[#c77dff] flex-shrink-0">
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Alertas Personalizadas</h3>
                  <p className="text-slate-400 text-sm">Recibe notificaciones de eventos en tus áreas de interés (IA, Robótica, Biotecnología, etc).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
