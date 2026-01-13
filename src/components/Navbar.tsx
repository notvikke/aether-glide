'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    hoverMode: boolean;
    setHoverMode: (mode: boolean) => void;
}

export default function Navbar({ hoverMode, setHoverMode }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Smooth scroll handler
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between backdrop-blur-md bg-[#050505]/50 border-b border-white/5 transition-all duration-300">
            {/* Brand */}
            <div className="flex items-center gap-6">
                <span className="text-xl font-bold tracking-tighter text-white">AETHER</span>

                {/* Hover Mode Toggle - Refined */}
                <button
                    onClick={() => setHoverMode(!hoverMode)}
                    className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase border transition-all duration-500 ${hoverMode ? 'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/10 box-glow' : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'}`}
                >
                    <div className={`w-1.5 h-1.5 rounded-full ${hoverMode ? 'bg-[#00E5FF] animate-pulse' : 'bg-gray-500'}`} />
                    {hoverMode ? 'System: Active' : 'Hover Mode'}
                </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase">
                <button onClick={() => scrollToSection('specs')} className="text-gray-400 hover:text-white transition-colors">The Board</button>
                <button onClick={() => scrollToSection('tech')} className="text-gray-400 hover:text-white transition-colors">Science</button>
                <button onClick={() => scrollToSection('timeline')} className="text-gray-400 hover:text-white transition-colors">Timeline</button>

                <button className="px-6 py-2.5 bg-white text-black font-bold rounded-full relative group overflow-hidden box-glow-hover transition-all">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Pre-Order</span>
                    <div className="absolute inset-0 bg-[#00E5FF] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay - Full Screen Aesthetic */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 h-screen bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-8 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-light tracking-wide text-white/80">
                            <button onClick={() => scrollToSection('specs')} className="text-left hover:text-[#00E5FF]">The Board</button>
                            <button onClick={() => scrollToSection('tech')} className="text-left hover:text-[#00E5FF]">Science</button>
                            <button onClick={() => scrollToSection('timeline')} className="text-left hover:text-[#00E5FF]">Timeline</button>
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 uppercase">Interactive</span>
                            <button
                                onClick={() => setHoverMode(!hoverMode)}
                                className={`px-4 py-2 rounded-full text-xs font-mono uppercase border transition-all ${hoverMode ? 'border-[#00E5FF] text-[#00E5FF]' : 'border-white/20 text-gray-400'}`}
                            >
                                {hoverMode ? 'Active' : 'Enable Hover'}
                            </button>
                        </div>

                        <button className="w-full py-4 bg-[#00E5FF] text-black font-bold text-lg rounded-full mt-4 box-glow">
                            PRE-ORDER NOW
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
