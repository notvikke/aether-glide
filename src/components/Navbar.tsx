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
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5">
            {/* Brand */}
            <div className="flex items-center gap-4">
                <span className="text-xl font-bold tracking-tighter text-white">AETHER</span>

                {/* Hover Mode Toggle */}
                <div
                    onClick={() => setHoverMode(!hoverMode)}
                    className={`cursor-pointer px-3 py-1 rounded-full text-xs font-mono uppercase border transition-all duration-300 ${hoverMode ? 'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/10 box-glow' : 'border-white/20 text-gray-400 hover:border-white/50'}`}
                >
                    {hoverMode ? 'Hover On' : 'Hover Off'}
                </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                <button onClick={() => scrollToSection('specs')} className="text-gray-400 hover:text-white transition-colors">THE BOARD</button>
                <button onClick={() => scrollToSection('tech')} className="text-gray-400 hover:text-white transition-colors">TECH</button>
                <button onClick={() => scrollToSection('timeline')} className="text-gray-400 hover:text-white transition-colors">TIMELINE</button>

                <button className="px-5 py-2 bg-white text-black font-bold rounded-full relative group overflow-hidden">
                    <span className="relative z-10 group-hover:text-white transition-colors">PRE-ORDER</span>
                    <div className="absolute inset-0 bg-[#00E5FF] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                    >
                        <button onClick={() => scrollToSection('specs')} className="text-left text-gray-400 hover:text-white">THE BOARD</button>
                        <button onClick={() => scrollToSection('tech')} className="text-left text-gray-400 hover:text-white">TECH</button>
                        <button onClick={() => scrollToSection('timeline')} className="text-left text-gray-400 hover:text-white">TIMELINE</button>
                        <button className="w-full py-3 bg-[#00E5FF] text-black font-bold rounded">PRE-ORDER</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
