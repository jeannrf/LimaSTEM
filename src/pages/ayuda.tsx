import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { HelpCircle, Book, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Ayuda() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es LimaSTEM?",
      answer: "LimaSTEM es una plataforma que centraliza eventos, becas y oportunidades de networking para estudiantes y profesionales de carreras STEM en Lima."
    },
    {
      question: "¿Cómo me registro?",
      answer: "Simplemente haz clic en el botón 'Empezar ya' o 'Registrarme' en la parte superior derecha, completa tus datos y ¡listo!"
    },
    {
      question: "¿Tiene algún costo?",
      answer: "El acceso a la información de eventos y becas es totalmente gratuito. Algunos talleres o eventos específicos organizados por terceros podrían tener costo, pero LimaSTEM siempre te informará claramente."
    },
    {
      question: "¿Puedo publicar un evento?",
      answer: "¡Sí! Si eres organizador de un evento STEM, contáctanos a través de nuestras redes sociales o correo para gestionar la publicación de tu evento."
    }
  ];

  return (
    <MainLayout title="Centro de Ayuda | LimaSTEM">
      <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9d4edd] opacity-10 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3c096c] opacity-20 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c77dff] text-sm font-medium mb-8">
              <HelpCircle size={16} />
              <span>Centro de Soporte</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6">
              ¿Cómo podemos <span className="text-[#9d4edd]">ayudarte?</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Encuentra respuestas rápidas y aprende a sacar el máximo provecho de la plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9d4edd]/30 transition-all cursor-pointer group">
              <Book className="w-10 h-10 text-[#c77dff] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Guía de Inicio</h3>
              <p className="text-slate-400 text-sm mb-4">Aprende lo básico para navegar y encontrar las mejores oportunidades.</p>
              <span className="text-[#9d4edd] text-sm font-bold flex items-center gap-2">Ver Guía <ArrowRight size={14} /></span>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9d4edd]/30 transition-all cursor-pointer group">
              <MessageCircle className="w-10 h-10 text-[#c77dff] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Soporte Técnico</h3>
              <p className="text-slate-400 text-sm mb-4">¿Algo no funciona bien? Contáctanos y lo solucionaremos.</p>
              <span className="text-[#9d4edd] text-sm font-bold flex items-center gap-2">Contactar <ArrowRight size={14} /></span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="text-[#c77dff]" /> : <ChevronDown className="text-slate-400" />}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
