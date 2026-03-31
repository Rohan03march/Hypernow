"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-32 lg:pt-48 pb-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-black tracking-tight mb-6 leading-[0.95]"
            >
              Scale At <br />
              <span className="gradient-text">Hyper Speed</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We are India's preferred operations partner for <span className="text-white font-medium italic">quick-commerce</span>. Building the backbone of 10-minute delivery infrastructure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_rgba(14,165,233,0.5)] hover:scale-[1.02]"
              >
                Start Partnership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/5 border border-white/10 transition-all"
              >
                Our Services
              </a>
            </motion.div>

            {/* Quick Stats Banner */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-8 items-center justify-center lg:justify-start border-t border-white/5 pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-semibold text-slate-300">99.9% Fulfillment Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-semibold text-slate-300">10+ Major Cities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="flex-1 relative w-full lg:w-auto mb-12 lg:mb-0"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[10px] border-white/5 shadow-2xl glass group">
              <img
                src="/hero-bg.png"
                alt="Operations Dashboard"
                className="w-full h-auto aspect-[4/3] object-cover mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 glass p-5 rounded-2xl border border-white/20 shadow-xl hidden sm:block"
            >
              <div className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-1">Live Efficiency</div>
              <div className="text-2xl font-bold text-white">94.8% <span className="text-emerald-400 text-sm font-normal">↑ 2.4%</span></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-6 z-20 glass p-6 rounded-2xl border border-white/20 shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center border border-accent-500/30">
                  <Play className="w-5 h-5 text-accent-400 fill-current ml-1" />
                </div>
                <div>
                  <div className="text-white font-bold">14,892+</div>
                  <div className="text-slate-400 text-xs font-medium">Orders / Day</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
