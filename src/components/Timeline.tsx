'use client';

import { motion } from 'framer-motion';

const events = [
    { year: "Q1 2026", title: "Public Reveal", desc: "Pre-orders Open to the Public." },
    { year: "Q3 2026", title: "Alpha Testing", desc: "Final Magnetic Slipstream Alpha Testing." },
    { year: "OCT 21 2026", title: "Global Launch", desc: "Worldwide Shipping Begins." },
];

export default function Timeline() {
    return (
        <section id="timeline" className="bg-[#050505] py-32 relative z-10 border-t border-white/5 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 font-mono mb-20 uppercase tracking-widest text-sm text-center"
                >
                    The Ascent Timeline
                </motion.p>

                {/* Vertical Timeline Design */}
                <div className="relative border-l-2 border-[#00E5FF]/20 ml-6 md:ml-1/2 space-y-16">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00E5FF] box-glow z-10" />

                            {/* Content Card */}
                            <div className="md:w-full">
                                <div className="text-4xl font-bold text-white mb-2 md:text-5xl tracking-tighter tabular-nums selection:bg-[#00E5FF] selection:text-black">
                                    {event.year}
                                </div>
                                <h3 className="text-[#00E5FF] font-bold text-xl mb-2 uppercase tracking-wide">{event.title}</h3>
                                <p className="text-gray-400 text-sm">{event.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 text-center"
                >
                    <p className="text-gray-400 italic font-light tracking-wide text-lg">
                        &quot;Where we’re going, we don&apos;t need roads.&quot;
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
