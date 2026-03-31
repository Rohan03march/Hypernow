"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Eye, Flag, ShieldCheck, Zap, Users2 } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-900/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full glass-light text-primary-400 font-bold text-xs uppercase tracking-widest mb-6 border-glow"
          >
            Our Purpose
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white"
          >
            Mission & <span className="gradient-text">Vision</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-[3rem] border border-white/5 hover:border-primary-500/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Flag className="w-32 h-32" />
            </div>
            
            <div className="w-16 h-16 glass-light rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 transition-transform">
              <Flag className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-3xl font-heading font-black text-white mb-8">Our Mission</h3>
            <ul className="space-y-6">
              {[
                { text: "Deliver dependable, high-volume dark store operations." },
                { text: "Empower through leadership and trained manpower." },
                { text: "Enable rapid expansion across India's urban networks." },
                { text: "Remain financially robust to fuel client growth." },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 group/item">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <p className="text-slate-400 leading-relaxed group-hover/item:text-slate-200 transition-colors">{item.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-light p-12 rounded-[3rem] border border-white/10 hover:border-accent-500/30 transition-all group relative overflow-hidden bg-gradient-to-br from-accent-600/5 to-transparent"
          >
            <div className="absolute -bottom-10 -right-10 p-10 opacity-10 pointer-events-none transform rotate-12 group-hover:scale-125 transition-transform duration-1000">
              <Eye className="w-64 h-64 text-accent-400" />
            </div>

            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-10 border border-white/5 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-accent-400" />
            </div>
            
            <h3 className="text-3xl font-heading font-black text-white mb-8">Our Vision</h3>
            
            <div className="space-y-10">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent-500/30 rounded-full" />
                <p className="text-xl md:text-2xl text-slate-200 font-light leading-snug">
                  To emerge as the absolute <span className="text-accent-400 font-bold">preferred operations partner</span> for quick-commerce pioneers across India.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary-500/30 rounded-full" />
                <p className="text-xl md:text-2xl text-slate-200 font-light leading-snug">
                  To build an unshakeable legacy as the most <span className="text-primary-400 font-bold">trusted infrastructure enabler</span> in the quick-commerce industry.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
