'use client';

import { motion } from 'framer-motion';

export default function TechSection() {
    return (
        <section id="tech" className="bg-[#050505] py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-[#00E5FF] font-mono mb-4 tracking-widest uppercase text-sm">The Science</h4>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Flux-Capacitance Levitation.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Traditional magnetism is limited by friction. We rewrote the laws of physics.
                        Utilizing a <span className="text-white font-semibold">1.21-gigawatt burst</span> for initial lift-off,
                        the board locks into a magnetic slipstream, creating a quantum-locked corridor for frictionless travel.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="p-4 border-l border-[#00E5FF]/30">
                            <div className="text-3xl font-bold text-white mb-1">0.00μ</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Surface Friction</div>
                        </div>
                        <div className="p-4 border-l border-[#00E5FF]/30">
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Emission Free</div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-96 w-full rounded-3xl bg-black/50 border border-white/10 overflow-hidden group"
                >
                    {/* Abstract 'Flux' simulation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 via-transparent to-purple-500/20 opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48 border border-[#00E5FF] rounded-full animate-[spin_8s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -ml-1 w-2 h-4 bg-white box-glow" />
                            <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-4 bg-white box-glow" />
                            <div className="absolute left-0 top-1/2 -mt-1 h-2 w-4 bg-white box-glow" />
                            <div className="absolute right-0 top-1/2 -mt-1 h-2 w-4 bg-white box-glow" />
                        </div>
                        <div className="absolute w-32 h-32 border border-white/20 rounded-full animate-[spin_4s_linear_infinite_reverse]" />
                        <div className="absolute w-4 h-4 bg-[#00E5FF] rounded-full box-glow animate-pulse" />
                    </div>

                    <div className="absolute bottom-6 left-6 font-mono text-xs text-[#00E5FF]">
                        SYSTEM STATUS: NOMINAL
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
