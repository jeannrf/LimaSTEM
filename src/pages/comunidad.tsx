import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Users, MessageSquare, Share2 } from 'lucide-react';

export default function Comunidad() {
  return (
    <MainLayout title="Comunidad | LimaSTEM">
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#9d4edd] opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#3c096c] opacity-20 blur-[120px] rounded-full" />



        <h1 className="text-5xl md:text-7xl font-medium mb-6">
          Comunidad <span className="text-[#9d4edd]">LimaSTEM</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mb-12">
          Estamos construyendo el espacio definitivo para conectar a estudiantes, mentores y profesionales STEM en Lima.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <Users className="w-10 h-10 text-[#c77dff] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Networking</h3>
            <p className="text-sm text-slate-400">Conecta con pares de otras universidades y carreras.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <MessageSquare className="w-10 h-10 text-[#c77dff] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Foros / Chat</h3>
            <p className="text-sm text-slate-400">Discute temas académicos y comparte recursos en tiempo real.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <Share2 className="w-10 h-10 text-[#c77dff] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Colaboración</h3>
            <p className="text-sm text-slate-400">Encuentra equipo para tu próximo proyecto o hackathon.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
