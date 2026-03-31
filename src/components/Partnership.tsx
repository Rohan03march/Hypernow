"use client";

import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";

export default function Partnership() {
  return (
    <section id="partnership" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[150px] -top-1/4 -left-1/4 animate-pulse opacity-50" />
        <div className="absolute w-[800px] h-[800px] bg-accent-600/10 rounded-full blur-[150px] -bottom-1/4 -right-1/4 animate-pulse opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 glass-light rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/10 shadow-2xl group border-glow"
        >
          <Handshake className="w-10 h-10 text-accent-400 group-hover:scale-110 transition-transform duration-500" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-10 leading-[1.1] tracking-tight"
        >
          Partner For The Future of <br className="hidden md:block" />
          <span className="gradient-text">Quick Commerce</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We are actively looking for long-term partnerships with visionary companies. 
          Let us manage your infrastructure, while you focus on revolutionary growth 
          across India's fastest-growing markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-white rounded-full font-black text-lg transition-all hover:bg-primary-500 hover:scale-105 shadow-2xl shadow-primary-500/20"
          >
            Start The Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#services"
            className="inline-flex items-center justify-center px-10 py-5 glass-light text-white rounded-full font-bold text-lg transition-all hover:bg-white/10 hover:scale-105 border border-white/10"
          >
            Explore Solutions
          </a>
        </motion.div>

      </div>
    </section>
  );
}
