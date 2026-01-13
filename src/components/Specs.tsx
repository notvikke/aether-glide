'use client';
import { motion } from 'framer-motion';

const specs = [
    { label: "Top Speed", value: "45 mph", desc: "Frictionless Velocity" },
    { label: "Range", value: "120 miles", desc: "Dual Micro-Fusion Cells" },
    { label: "Weight", value: "4.2 kg", desc: "Aerogel-Carbon Web" },
    { label: "Hover Height", value: "4 inch", desc: "Adaptive Field Levitation" },
];

export default function Specs() {
    return (
        <section className="bg-[#050505] w-full py-32 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {specs.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 group">
                            <span className="text-gray-500 text-sm uppercase tracking-widest mb-4 group-hover:text-[#00E5FF] transition-colors">
                                {spec.label}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-medium text-white mb-2 font-mono tracking-tighter">
                                {spec.value}
                            </h3>
                            <p className="text-gray-400 text-sm font-light">
                                {spec.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
