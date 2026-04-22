'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);

  // Blur + opacity
  const blur = useTransform(scrollY, [0, 400], [0, 12]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  // ✅ FIX HERE
  const blurFilter = useMotionTemplate`blur(${blur}px)`;
  const glassBlur = useMotionTemplate`blur(${blur}px)`;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <motion.div 
        style={{ 
          y: bgY,
          filter: blurFilter,
          opacity
        }}
        className="absolute inset-0"
      >
        <Image
          src="/Hero bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Glass Overlay */}
      <motion.div 
        style={{
          backdropFilter: glassBlur,
        }}
        className="absolute inset-0 bg-slate-900/40"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-900/85"></div>

      {/* Content */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center py-20"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Innovate. Build. Scale.
        </h1>

        <p className="text-lg text-gray-200 mb-8">
         Delivering world-class digital solutions built to scale, perform, and transform the way you operate.
        </p>

        
      </motion.div>
    </section>
  );
}