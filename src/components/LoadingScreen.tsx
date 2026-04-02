'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Minimum duration of 1.5s to ensure the logo and loader are seen
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
          
          <div className="relative flex flex-col items-center">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0 
              }}
              className="relative w-72 h-16 flex items-center justify-center"
            >
              <Image 
                src="/hypernow.png" 
                alt="HyperNow" 
                width={288}
                height={64}
                className="object-contain w-full h-auto drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]" 
                priority 
              />
            </motion.div>
          </div>
          
          {/* Brand Tagline or Message (Optional, subtle) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 text-xs font-sans tracking-[0.3em] uppercase text-slate-400"
          >
            Efficiency Redefined
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
