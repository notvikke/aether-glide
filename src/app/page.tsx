'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AetherScroll from '@/components/AetherScroll';
import Specs from '@/components/Specs';
import Shop from '@/components/Shop';
import Navbar from '@/components/Navbar';
import TechSection from '@/components/TechSection';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hoverMode, setHoverMode] = useState(false);

  // Once loading hits 100%, delay slightly then fade out
  useEffect(() => {
    if (loadingProgress >= 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [loadingProgress]);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#00E5FF] selection:text-black">

      {/* Navbar */}
      <Navbar hoverMode={hoverMode} setHoverMode={setHoverMode} />

      {/* High-End Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          >
            {/* Logo Breathing Animation */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mb-8"
            >
              {/* Custom Aether Logo SVG */}
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Central Beam */}
                <path d="M50 10L50 90" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                {/* Left Wing */}
                <path d="M45 20C20 20 10 40 10 60C10 70 20 80 45 80" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Right Wing */}
                <path d="M55 20C80 20 90 40 90 60C90 70 80 80 55 80" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Inner accents */}
                <circle cx="50" cy="50" r="4" fill="#00E5FF" className="box-glow" />
              </svg>
            </motion.div>

            {/* Percentage Counter */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-mono font-light text-white tracking-widest">
                {loadingProgress}%
              </span>
              <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#00E5FF] box-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AetherScroll onLoaderProgress={setLoadingProgress} hoverMode={hoverMode} />

      <div id="specs">
        <Specs />
      </div>

      <TechSection />

      <Timeline />

      <Gallery />

      <Shop />

      <footer className="py-8 text-center text-gray-600 text-xs uppercase tracking-widest bg-[#050505] border-t border-white/5 relative z-10 flex flex-col items-center gap-4">
        <p>© 2026 Aether Dynamics. All Rights Reserved.</p>
        <p>
          Made by <a href="https://notvikke.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition-colors duration-300">Vignesh</a>
        </p>
      </footer>
    </main>
  );
}
