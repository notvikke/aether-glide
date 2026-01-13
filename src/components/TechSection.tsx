'use client';

import { motion } from 'framer-motion';

export default function TechSection() {
    return (
        <section id="tech" className="bg-[#050505] py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Blueprint Grid Background - localized */}
                    <div className="absolute -inset-10 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />

                    <h4 className="text-[#00E5FF] font-mono mb-6 tracking-widest uppercase text-xs border-b border-[#00E5FF]/30 inline-block pb-1">
                        Class: Antigravity Propulsion
                    </h4>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        The Science of Aether.
                    </h2>

                    <div className="space-y-8 font-light">
                        <div>
                            <h3 className="text-white text-lg font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#00E5FF] rounded-full box-glow" />
                                The Power Source
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l border-white/10 ml-1">
                                The <span className="text-white">Obsidian Core</span> discharges a 1.21-gigawatt burst for initial levitation, generating the localized gravity-well required for lift-off.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#00E5FF] rounded-full box-glow" />
                                Propulsion
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l border-white/10 ml-1">
                                Utilizing <span className="text-white">Magnetic Slipstream Technology</span>, the board ionizes air to create a frictionless pocket of zero-point energy.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#00E5FF] rounded-full box-glow" />
                                Smart-Balance
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l border-white/10 ml-1">
                                Equipped with neural-link sensors that micro-adjust pitch and yaw <span className="text-white">1,000 times per second</span> for a steady 4-inch hover height.
                            </p>
                        </div>
                    </div>

                </motion.div>

                {/* Visual / Graphic - Blueprint Interactive */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] w-full rounded-sm border border-[#00E5FF]/20 overflow-hidden bg-[#00E5FF]/[0.02]"
                >
                    {/* Blueprint Grid */}
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Central Reactor Visual */}
                        <div className="relative w-64 h-64 border border-[#00E5FF]/50 rounded-full animate-[spin_12s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -ml-0.5 w-[1px] h-full bg-[#00E5FF]/30" />
                            <div className="absolute left-0 top-1/2 -mt-0.5 w-full h-[1px] bg-[#00E5FF]/30" />

                            {/* Inner Core */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00E5FF]/10 rounded-full box-glow animate-pulse flex items-center justify-center border border-[#00E5FF]">
                                <span className="text-[10px] text-[#00E5FF] font-mono animate-pulse">CORE ACTIVE</span>
                            </div>
                        </div>

                        {/* Floating Labels */}
                        <div className="absolute top-12 left-12 text-[10px] text-[#00E5FF] font-mono border border-[#00E5FF]/50 px-2 py-1 bg-black/80">
                            FIG 1.A: FLUX EMITTER
                        </div>
                        <div className="absolute bottom-12 right-12 text-[10px] text-[#00E5FF] font-mono border border-[#00E5FF]/50 px-2 py-1 bg-black/80">
                            OUTPUT: 1.21 GW
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
