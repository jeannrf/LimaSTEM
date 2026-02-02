import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X, Atom, LogOut, LayoutDashboard, UserCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { UserMenu } from '@/components/UserMenu';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'LimaSTEM' }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth(); // Access global auth state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Becas', href: '/becas' },
    { name: 'Hackathones', href: '/hackathones' },
    { name: 'Comunidad', href: '/comunidad' },
  ];

  return (
    <div className="min-h-screen bg-[#0b011d] selection:bg-[#9d4edd]/30 font-sans text-white overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* --- PREMIUM NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 border-b ${isOpen
          ? 'bg-transparent border-transparent py-5' // Transparent when open
          : scrolled
            ? 'bg-[#0b011d]/80 backdrop-blur-xl border-white/10 py-5 shadow-2xl'
            : 'bg-[#0b011d]/40 backdrop-blur-md border-white/5 py-5'
          }`}
      >
        <div className="container mx-auto px-8 max-w-7xl flex items-center justify-between relative">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href={user ? "/dashboard" : "/"} className="text-xl font-bold tracking-tighter text-white cursor-pointer flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300">
                <Atom size={20} className="text-white group-hover:rotate-180 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="tracking-tight text-white flex items-center gap-0.5">
                Lima<span className="text-[#c77dff]">STEM</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-semibold text-slate-400 hover:text-[#c77dff] transition-all uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c77dff] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* ACTIONS (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Link href="/login" className="text-[11px] font-semibold text-slate-300 hover:text-white px-5 py-2.5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all uppercase tracking-widest leading-none">
                  Ingresar
                </Link>
                <Link href="/register" className="text-[11px] font-semibold text-white bg-[#7b2cbf] hover:bg-[#9d4edd] px-6 py-3 rounded-2xl shadow-xl shadow-[#9d4edd]/20 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest leading-none">
                  Registrarme
                </Link>
              </>
            )}
          </div>

          {/* MOBILE TOGGLE (No specific Z as nav parent handles high Z) */}
          <button
            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-300 ${isOpen ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-white/10'
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#050110]/95 backdrop-blur-2xl z-[140] flex flex-col items-center justify-center p-8 pt-24"
          >
            <div className="flex flex-col gap-6 text-center w-full mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-bold text-white hover:text-[#c77dff] transition-colors uppercase tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 w-full max-w-[280px] border-t border-white/10 pt-8"
            >
              {user ? (
                <div className="space-y-4 w-full">
                  <Link href="/dashboard" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl border border-white/10 font-bold text-slate-300 hover:text-white bg-white/5">
                    <LayoutDashboard size={18} className="mr-2" /> Panel Principal
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="h-14 w-full flex items-center justify-center rounded-2xl bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20 border border-red-500/20"
                  >
                    <LogOut size={18} className="mr-2" /> Salir
                  </button>
                </div>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-[11px] text-white bg-white/5 shadow-sm">
                    Ingresar
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl bg-[#7b2cbf] font-bold shadow-xl shadow-[#9d4edd]/30 uppercase tracking-widest text-[11px] text-white">
                    Registrarme
                  </Link>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
