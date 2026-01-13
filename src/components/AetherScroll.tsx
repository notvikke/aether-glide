'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useScroll, useSpring, useTransform, motion, useMotionValue } from 'framer-motion';

const FRAME_COUNT = 192;

export default function AetherScroll({ onLoaderProgress, hoverMode }: { onLoaderProgress: (progress: number) => void; hoverMode: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Smooth out the scroll value for that weighted mechanical feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Load images on mount
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];
        const imagePromises: Promise<void>[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const src = `/images/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;

            const promise = new Promise<void>((resolve) => {
                img.onload = () => {
                    loadedCount++;
                    onLoaderProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                    resolve();
                };
                img.onerror = () => {
                    // Handle missing images gracefully - maybe skip or use previous
                    console.error(`Failed to load image ${src}`);
                    loadedCount++; // Still count as processed to avoid stall
                    onLoaderProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                    resolve();
                }
            });

            img.src = src;
            loadedImages[i - 1] = img; // store in index 0-191
            imagePromises.push(promise);
        }

        Promise.all(imagePromises).then(() => {
            setImages(loadedImages);
            setIsLoaded(true);
        });
    }, [onLoaderProgress]);


    // Draw to canvas
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (img) {
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, offsetX, offsetY;

            // Smart-Scale Logic:
            // Mobile Portrait (canvasRatio < 1): Prioritize fitting width (subject visibility)
            // Desktop (canvasRatio >= 1): Prioritize Cover (visual immersion)

            const isPortrait = canvasRatio < 1;

            if (isPortrait) {
                // "Fill Width" logic (like Contain, but we trust the background matches)
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;

                // Slight boost to ensure impact
                const mobileScale = 1.1;
                drawWidth *= mobileScale;
                drawHeight *= mobileScale;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = (canvasHeight - drawHeight) / 2;

            } else {
                // Desktop Cover Logic
                if (imgRatio > canvasRatio) {
                    drawHeight = canvasHeight;
                    drawWidth = canvasHeight * imgRatio;
                    offsetX = (canvasWidth - drawWidth) / 2;
                    offsetY = 0;
                } else {
                    drawWidth = canvasWidth;
                    drawHeight = canvasWidth / imgRatio;
                    offsetX = 0;
                    offsetY = (canvasHeight - drawHeight) / 2;
                }
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    // Animation Loop
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        // Initial draw
        renderFrame(0);

        const unsubscribe = smoothProgress.on("change", (latest) => {
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * (FRAME_COUNT - 1))
            );
            requestAnimationFrame(() => renderFrame(frameIndex));
        });

        return () => unsubscribe();
    }, [isLoaded, images, smoothProgress]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame
                const currentProgress = smoothProgress.get();
                const frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(currentProgress * (FRAME_COUNT - 1))
                );
                if (isLoaded && images.length > 0) {
                    renderFrame(frameIndex);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]); // re-bind usually fine, or refactor to avoid dep


    // Text Opacity Transforms
    const text1Opacity = useTransform(smoothProgress, [0, 0.15, 0.20], [1, 1, 0]);
    const text2Opacity = useTransform(smoothProgress, [0.25, 0.35, 0.45, 0.50], [0, 1, 1, 0]);
    const text3Opacity = useTransform(smoothProgress, [0.55, 0.65, 0.75, 0.80], [0, 1, 1, 0]);
    const text4Opacity = useTransform(smoothProgress, [0.85, 0.95, 1], [0, 1, 1]);


    return (
        <div ref={containerRef} className="relative h-[600vh] bg-[#050505]">
            <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className={`w-full h-full object-cover transition-all duration-1000 ${hoverMode ? 'drop-shadow-[0_0_50px_rgba(0,229,255,0.4)] scale-[1.02]' : ''}`}
                />

                {/* Simulated low-frequency hum via a separate glow layer that pulses independently if hoverMode is on */}
                {hoverMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[#00E5FF]/5 pointer-events-none z-0 mix-blend-overlay"
                    />
                )}

                {/* Text Overlays - Adaptive Placement */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-end md:justify-center items-center pb-20 md:pb-0">

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent opacity-80 md:opacity-0" />

                    <motion.div style={{ opacity: text1Opacity }} className="absolute text-center z-10 px-4">
                        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-4 text-glow">
                            Aether Glide.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 font-light tracking-widest uppercase">
                            Gravity is Optional.
                        </p>
                    </motion.div>

                    <motion.div style={{ opacity: text2Opacity }} className="absolute text-center z-10 px-4">
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-2 text-glow">
                            Superconducting
                        </h2>
                        <h2 className="text-4xl md:text-7xl font-bold text-[#00E5FF] box-glow-text">
                            Mag-Lev.
                        </h2>
                    </motion.div>

                    <motion.div style={{ opacity: text3Opacity }} className="absolute text-center z-10 px-4">
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
                            The Obsidian Core.
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
                            Forged from a single block of compressed carbon nanotubes.
                        </p>
                    </motion.div>

                    <motion.div style={{ opacity: text4Opacity }} className="absolute text-center z-10 px-4">
                        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter text-glow">
                            ASCEND.
                        </h2>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
