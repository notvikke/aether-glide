'use client';

import { motion } from 'framer-motion';

const events = [
    { year: "2024", title: "Concept", desc: "Prototype Alpha developed in secrecy." },
    { year: "2025", title: "Public Reveal", desc: "The world sees true levitation." },
    { year: "2026", title: "Global Launch", desc: "Shipping October 21, 2026." },
];

export default function Timeline() {
    return (
        <section id="timeline" className="bg-[#050505] py-32 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 font-mono mb-16 uppercase tracking-widest text-sm"
                >
                    Project Roadmap
                </motion.p>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none md:flex md:justify-between md:items-start pl-8 md:pl-0 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative mb-12 md:mb-0 text-left md:text-center md:flex-1 group"
                        >
                            {/* Mobile Dot */}
                            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center md:hidden">
                                <div className="w-2 h-2 bg-[#00E5FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Desktop Dot */}
                            <div className="hidden md:flex justify-center mb-6 relative">
                                <div className="w-3 h-3 bg-white rounded-full relative z-10 group-hover:bg-[#00E5FF] group-hover:box-glow transition-colors duration-300" />
                                {index !== events.length - 1 && (
                                    <div className="absolute top-1.5 left-[50%] w-full h-[1px] bg-white/10" />
                                )}
                            </div>

                            <div className="text-4xl font-bold text-white mb-2 md:text-5xl tracking-tighter">
                                {event.year}
                            </div>
                            <h3 className="text-[#00E5FF] font-bold text-xl mb-2">{event.title}</h3>
                            <p className="text-gray-400 text-sm max-w-xs mx-auto">{event.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 inline-block px-8 py-4 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm"
                >
                    <p className="text-gray-300 italic font-light tracking-wide">
                        &quot;Where we’re going, we don&apos;t need roads.&quot;
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
