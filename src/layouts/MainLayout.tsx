import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X, Atom, LogOut, LayoutDashboard, ChevronDown, Calendar, GraduationCap, Code, Users, UserCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { UserMenu } from '@/components/UserMenu';
import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'LimaSTEM' }: LayoutProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu (Guest)
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Mobile Profile Dropdown (User)
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Eventos', href: '/eventos', icon: Calendar },
    { name: 'Becas', href: '/becas', icon: GraduationCap },
    { name: 'Hackathones', href: '/hackathones', icon: Code },
    { name: 'Comunidad', href: '/comunidad', icon: Users },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b011d] selection:bg-[#9d4edd]/30 font-sans text-white overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 border-b ${isOpen
          ? 'bg-transparent border-transparent py-4'
          : scrolled
            ? 'bg-[#0b011d]/90 backdrop-blur-xl border-white/10 py-3 shadow-2xl'
            : 'bg-[#0b011d]/60 backdrop-blur-md border-white/5 py-4'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl flex items-center justify-between relative">
          {/* LOGO */}
          <div className="flex items-center z-[150]">
            <Link href={user ? "/dashboard" : "/"} className="text-xl font-bold tracking-tighter text-white cursor-pointer flex items-center gap-3 group">
              <div className="relative w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300">
                <Atom size={20} className="text-white group-hover:rotate-180 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="tracking-tight text-white flex items-center gap-0.5 text-lg lg:text-xl">
                Lima<span className="text-[#c77dff]">STEM</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
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

          {/* ACTIONS & MOBILE CONTROLS */}
          <div className="flex items-center gap-4 z-[150]">
            {/* Desktop Actions */}
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

            {/* Mobile Controls */}
            <div className="lg:hidden">
              {user ? (
                // LOGGED IN MOBILE: Profile Pill
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-3 bg-[#1e142b] border border-white/10 rounded-full pl-1 pr-4 py-1 active:scale-95 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] flex items-center justify-center text-xs font-bold text-white uppercase shadow-lg shadow-purple-500/20">
                      {user.email?.[0]}
                    </div>
                    <span className="text-sm font-semibold text-slate-200 max-w-[80px] truncate">
                      {user.user_metadata?.full_name?.split(' ')[0] || 'Usuario'}
                    </span>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-64 bg-[#1e142b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[200]"
                      >
                        <div className="p-4 border-b border-white/5 bg-white/[0.02]">
                          <p className="text-sm font-bold text-white truncate">
                            {user?.user_metadata?.full_name || "Mi Cuenta"}
                          </p>
                          <p className="text-xs text-slate-400 truncate mt-0.5">
                            {user?.email}
                          </p>
                        </div>

                        <div className="p-2 space-y-1">
                          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                            <LayoutDashboard size={16} className="text-[#c77dff]" /> Panel Principal
                          </Link>
                          <Link href="/perfil" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                            <UserCircle size={16} className="text-[#c77dff]" /> Mi Perfil
                          </Link>
                          <button disabled className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 cursor-not-allowed text-left">
                            <Menu size={16} className="opacity-50" /> Configuración <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded ml-auto">Pronto</span>
                          </button>
                        </div>

                        <div className="p-2 border-t border-white/5">
                          <button
                            onClick={() => signOut()}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                          >
                            <LogOut size={16} /> Cerrar Sesión
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // GUEST MOBILE: Hamburger
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all ${isOpen ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-white/10'
                    }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- QUICK ICON NAVIGATION BAR (Logged In Only) --- */}
      {user && (
        <div className="lg:hidden pt-[76px] pb-2 px-6 bg-[#0b011d]">
          <div className="flex justify-between items-center bg-[#191024] border border-white/5 rounded-2xl p-2 shadow-lg">
            {navLinks.map((link) => {
              const isActive = (router.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all ${isActive
                    ? 'bg-[#7b2cbf] text-white shadow-lg shadow-[#9d4edd]/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <link.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {/* Optional: Tiny label if needed later */}
                  {/* <span className="text-[9px] font-bold mt-1 uppercase tracking-wider">{link.name}</span> */}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* MOBILE MENU OVERLAY (Only for Guests) */}
      <AnimatePresence>
        {isOpen && !user && (
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
              <Link href="/login" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-[11px] text-white bg-white/5 shadow-sm">
                Ingresar
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="h-14 flex items-center justify-center rounded-2xl bg-[#7b2cbf] font-bold shadow-xl shadow-[#9d4edd]/30 uppercase tracking-widest text-[11px] text-white">
                Registrarme
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`flex-grow ${user ? "pt-2 lg:pt-0" : "pt-20 lg:pt-0"}`}>
        {children}
      </main>

      <footer className="mt-12 border-t border-white/5 py-16 bg-[#0b011d]">
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
