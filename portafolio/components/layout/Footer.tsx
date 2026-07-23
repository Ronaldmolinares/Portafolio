"use client";

import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 px-6 lg:px-10 border-t border-slate-900 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* --- IZQUIERDA: Copyright & Credenciales --- */}
                <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
                    <p className="text-sm font-medium text-slate-300">
                        Ronald Samir Molinares Sanabria
                    </p>
                    <p className="text-sm text-slate-500">
                        &copy; {currentYear} Todos los derechos reservados.
                    </p>
                </div>

                {/* --- DERECHA: Redes rápidas --- */}
                <div className="flex items-center gap-4">
                    {/* GitHub */}
                    <a
                        href="https://github.com/Ronaldmolinares"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-purple-500/30 shadow-none hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-4 h-4" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/samir-molinares"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-indigo-500/30 shadow-none hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-4 h-4" />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:samirmolinares24@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-purple-500/30 shadow-none hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail className="w-4 h-4" />
                    </a>

                </div>

            </div>
        </footer>
    );
}