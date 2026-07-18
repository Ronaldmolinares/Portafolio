"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Send, Loader2 } from 'lucide-react';


export default function Contact() {
    // Reemplaza "TU_FORM_ID" con el ID que te da Formspree en su dashboard
    const [state, handleSubmit] = useForm("TU_FORM_ID");

    return (
        <section
            id="contact"
            className="py-20 lg:py-26 px-6 mb-20 lg:px-10 bg-slate-950 text-white relative"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* --- ENCABEZADO --- */}
                <div className="text-center mb-16 flex flex-col items-center space-y-4">
                    <span className="inline-block mb-16 px-4 py-2 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md">
                        Let's work together
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400 leading-tight">
                        Contáctame
                        <div className="w-24 h-1 m-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mb-6" />
                    </h2>

                </div>

                {/* --- CONTENIDO PRINCIPAL --- */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* COLUMNA IZQUIERDA: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 p-8 rounded-sm border border-slate-900 bg-slate-900/10 backdrop-blur-xs flex flex-col justify-between space-y-12"
                    >
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold tracking-wide text-slate-100">
                                Información de contacto
                            </h3>

                            {/* Lista de Enlaces */}
                            <div className="space-y-6">
                                {/* Email */}
                                <a
                                    href="mailto:samirmolinares24@gmail.com"
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-purple-400 group-hover:border-purple-500/40 group-hover:bg-purple-950/20 transition-all duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Email</p>
                                        <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                            samirmolinares24@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/in/samir-molinares"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-purple-400 group-hover:border-purple-500/40 group-hover:bg-purple-950/20 transition-all duration-300">
                                        <FaLinkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">LinkedIn</p>
                                        <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                            linkedin.com/in/samir-molinares
                                        </p>
                                    </div>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/Ronaldmolinares"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-purple-400 group-hover:border-purple-500/40 group-hover:bg-purple-950/20 transition-all duration-300">
                                        <FaGithub className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">GitHub</p>
                                        <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                            github.com/Ronaldmolinares
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Estado actual */}
                        <div className="border-t border-slate-900 pt-6 space-y-3">
                            <h4 className="text-sm font-bold tracking-wider text-slate-400">
                                Estado Actual
                            </h4>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <p>Disponible para trabajos freelance y oportunidades de empleo a tiempo completo</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* COLUMNA DERECHA: Formulario Formspree */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 p-8 rounded-sm border border-slate-900 bg-slate-900/10 backdrop-blur-xs flex flex-col space-y-6"
                    >
                        <h3 className="text-xl font-bold tracking-wide text-slate-100">
                            Envíame un mensaje
                        </h3>

                        {state.succeeded ? (
                            // Mensaje de éxito optimizado cuando Formspree procesa el envío
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-purple-950/20 border border-purple-500/20 rounded-xl space-y-3"
                            >
                                <p className="text-xl font-bold text-purple-300">¡Mensaje enviado con éxito!</p>
                                <p className="text-sm text-slate-400 max-w-md">
                                    Gracias por escribir. Responderé a tu solicitud tan pronto como sea posible a través del correo que me proporcionaste.

                                </p>
                            </motion.div>
                        ) : (
                            // Formulario interactivo estándar
                            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    {/* Campo de Nombre */}
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            minLength={2}
                                            maxLength={50}
                                            placeholder="Tu Nombre"
                                            className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 rounded-sm text-slate-300 placeholder-slate-600 focus:outline-hidden focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition duration-200 text-sm"
                                        />
                                    </div>

                                    {/* Campo de Email */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            minLength={5}
                                            maxLength={100}
                                            placeholder="Tu Email"
                                            className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 rounded-sm text-slate-300 placeholder-slate-600 focus:outline-hidden focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition duration-200 text-sm"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1 block px-1" />
                                    </div>

                                    {/* Campo de Asunto */}
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            required
                                            minLength={3}
                                            maxLength={100}
                                            placeholder="Asunto"
                                            className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 rounded-sm text-slate-300 placeholder-slate-600 focus:outline-hidden focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition duration-200 text-sm"
                                        />
                                    </div>

                                    {/* Campo de Mensaje */}
                                    <div>
                                        <textarea
                                            name="message"
                                            id="message"
                                            required
                                            minLength={4}
                                            maxLength={1000}
                                            rows={5}
                                            placeholder="Tu Mensaje"
                                            className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 rounded-sm text-slate-300 placeholder-slate-600 focus:outline-hidden focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition duration-200 text-sm resize-none"
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1 block px-1" />
                                    </div>
                                </div>

                                {/* Botón de Envío */}
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.99] cursor-pointer"
                                >
                                    {state.submitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Enviando mensaje...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Enviar mensaje</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}