'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
    return (
        <section className="bg-[#050505] py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-2xl font-bold mb-12 border-l-4 border-[#00E5FF] pl-4"
                >
                    Visual Archives
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Gallery Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group rounded-2xl overflow-hidden md:col-span-2 border border-white/10"
                    >
                        <img src="/images/gallery-1.png" alt="Neon Street" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-mono text-sm">HILL VALLEY // 2015</p>
                        </div>
                    </motion.div>

                    {/* Gallery Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative group rounded-2xl overflow-hidden border border-white/10"
                    >
                        <img src="/images/gallery-2.png" alt="Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-mono text-sm">R&D FACILITY</p>
                        </div>
                    </motion.div>

                    {/* Gallery Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative group rounded-2xl overflow-hidden border border-white/10"
                    >
                        <img src="/images/gallery-3.png" alt="Core" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-mono text-sm">OBSIDIAN CORE</p>
                        </div>
                    </motion.div>

                    {/* Gallery filler for grid balance or just CSS art */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-gray-500 font-light tracking-widest text-xs uppercase z-10">Aether Dynamics™ Visual Record</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
