import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'LimaSTEM' }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#030014] selection:bg-primary-500/30 font-sans">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#030014]/60 backdrop-blur-xl">
        <div className="container mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-xl font-extrabold tracking-tighter text-white cursor-pointer flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 border-2 border-white rounded-md" />
              </div>
              <span>LimaSTEM</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Explorar', 'Comunidad', 'Agenda', 'Mejora'].map((item) => (
                <a key={item} href="#" className="text-[13px] font-semibold text-slate-400 hover:text-white transition-colors tracking-tight">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[13px] font-semibold text-slate-400 hover:text-white transition-colors">
              Ingresar
            </button>
            <button className="text-[13px] font-bold text-white bg-primary-600 hover:bg-primary-500 px-6 py-2.5 rounded-full shadow-xl shadow-primary-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
              Registrarme
            </button>
          </div>
        </div>
      </nav>

      <main className="">{children}</main>

      <footer className="mt-40 border-t border-white/5 py-24 bg-[#05001a]">
        <div className="container mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-lg font-extrabold text-white mb-8 tracking-tighter">LimaSTEM</div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
              La plataforma central de eventos STEM y crecimiento personal en la ciudad de Lima.
            </p>
          </div>
          {[
            { title: 'Plataforma', links: ['Explorar Eventos', 'Agenda Semanal', 'Cursos Cortos'] },
            { title: 'Comunidad', links: ['Sobre nosotros', 'Contacto', 'Newsletter'] },
            { title: 'Legal', links: ['Privacidad', 'Términos de servicio'] }
          ].map((section) => (
            <div key={section.title}>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">{section.title}</div>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-slate-600 font-bold uppercase tracking-widest">
          <div>© {new Date().getFullYear()} LimaSTEM / Hecho en Lima</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
