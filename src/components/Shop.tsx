'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const products = [
    {
        id: 'stealth',
        name: "Stealth Black",
        price: "$2,999",
        description: "Matte finish. Radar absorbent coating.",
        gradient: "from-zinc-900 to-black"
    },
    {
        id: 'titanium',
        name: "Titanium Silver",
        price: "$3,149",
        description: "Brushed raw alloy. Industrial aesthetic.",
        gradient: "from-gray-300 to-gray-500"
    },
    {
        id: 'supernova',
        name: "Supernova White",
        price: "$3,299",
        description: "Pearlescent ceramic. Zero-G styling.",
        gradient: "from-white to-gray-200"
    }
];

export default function Shop() {
    return (
        <section className="bg-[#050505] w-full py-32 relative z-10 pb-48">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Select Your Vessel
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#00E5FF] mx-auto box-glow rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-[#00E5FF]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            <div className={`h-48 w-full rounded-2xl mb-8 bg-gradient-to-br ${product.gradient} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden shadow-2xl`}>
                                {/* Abstract visual for the board color */}
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                <div className="absolute bottom-4 right-4 text-black/50 font-bold text-xs uppercase tracking-widest">
                                    Series 01
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">{product.description}</p>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-mono text-white">{product.price}</span>

                                <button className="relative px-6 py-3 bg-white text-black font-bold rounded-full overflow-hidden group/btn hover:text-white transition-colors duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Pre-Order <ArrowRight size={16} />
                                    </span>
                                    <div className="absolute inset-0 bg-[#00E5FF] transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
