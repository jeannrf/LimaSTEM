import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout = ({ children, title = 'LimaSTEM' }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-950 font-sans antialiased text-slate-200">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent cursor-pointer">
                        LimaSTEM
                    </div>
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="/" className="hover:text-primary-400 transition-colors">Inicio</a>
                        <a href="/eventos" className="hover:text-primary-400 transition-colors">Eventos</a>
                        <a href="/becas" className="hover:text-primary-400 transition-colors">Becas</a>
                        <a href="/networking" className="hover:text-primary-400 transition-colors">Networking</a>
                    </nav>
                    <div>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                            Mi Perfil
                        </button>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer className="border-t border-white/5 py-8 mt-20">
                <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} LimaSTEM. Conectando talento STEM en Lima.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
