import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'LimaSTEM' }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explorar', href: '#' },
    { name: 'Comunidad', href: '#' },
    { name: 'Agenda', href: '#' },
    { name: 'Mejora', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#0b011d] selection:bg-[#9d4edd]/30 font-sans text-white overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* --- TRADITIONAL PREMIUM NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${scrolled
          ? 'bg-[#0b011d]/90 backdrop-blur-xl border-white/10 py-4 shadow-2xl'
          : 'bg-[#0b011d]/60 backdrop-blur-md border-white/5 py-6'
          }`}
      >
        <div className="container mx-auto px-8 max-w-7xl flex items-center justify-between relative">

          {/* LOGO (Left) */}
          <div className="flex items-center z-10">
            <div className="text-xl font-bold tracking-tighter text-white cursor-pointer flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-[#7b2cbf] rounded-xl flex items-center justify-center shadow-lg shadow-[#9d4edd]/20 group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 border-2 border-white rounded-md" />
              </div>
              <span className="tracking-tight hidden sm:block">LimaSTEM</span>
            </div>
          </div>

          {/* BANKS (Centered) - Desktop Only */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-semibold text-slate-400 hover:text-[#c77dff] transition-all uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ACTIONS (Right) */}
          <div className="hidden lg:flex items-center gap-4 z-10">
            <Link href="/login" className="text-[11px] font-semibold text-slate-300 hover:text-white px-5 py-2.5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all uppercase tracking-widest leading-none">
              Ingresar
            </Link>
            <Link href="/register" className="text-[11px] font-semibold text-white bg-[#7b2cbf] hover:bg-[#9d4edd] px-6 py-3 rounded-2xl shadow-xl shadow-[#9d4edd]/20 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest leading-none">
              Registrarme
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0b011d]/98 backdrop-blur-3xl border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-semibold text-white hover:text-[#9d4edd] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-px bg-white/10 w-full my-2" />
            <div className="flex flex-col gap-4">
              <Link href="/login" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl border border-white/10 font-semibold uppercase tracking-widest text-sm text-white">
                Ingresar
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl bg-[#7b2cbf] font-semibold shadow-lg shadow-[#9d4edd]/20 uppercase tracking-widest text-sm text-white">
                Registrarme
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 lg:pt-0">{children}</main>

      <footer className="mt-40 border-t border-white/5 py-24 bg-[#0b011d]">
        <div className="container mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-lg font-extrabold text-white mb-8 tracking-tighter">LimaSTEM</div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">
              La plataforma central de eventos STEM y crecimiento personal en la ciudad de Lima.
            </p>
          </div>
          {[
            { title: 'Plataforma', links: ['Explorar Eventos', 'Agenda Semanal', 'Cursos Cortos'] },
            { title: 'Comunidad', links: ['Sobre nosotros', 'Contacto', 'Newsletter'] },
            { title: 'Legal', links: ['Privacidad', 'Términos de servicio'] }
          ].map((section) => (section && (
            <div key={section.title}>
              <div className="text-[11px] font-bold text-[#c77dff] uppercase tracking-[0.2em] mb-8">{section.title}</div>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          )))}
        </div>
        <div className="container mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-slate-500 font-bold uppercase tracking-widest">
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
