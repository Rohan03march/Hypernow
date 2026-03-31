"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { CheckCircle2, Eye, Flag, ShieldCheck, Zap, Users2, ArrowRight, Target } from "lucide-react";

const ParallaxCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHoverable, setIsHoverable] = useState(false);
  
  useEffect(() => {
    setIsHoverable(window.matchMedia("(hover: hover)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{
        rotateX: isHoverable ? rotateX : 0,
        rotateY: isHoverable ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <div
        style={{
          transform: isHoverable ? "translateZ(75px)" : "none",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      id="mission-vision" 
      ref={containerRef}
      className="py-20 md:py-32 lg:py-48 bg-background relative overflow-hidden bg-dot-grid"
    >
      {/* Immersive Background Elements - Scaled for Mobile */}
      <motion.div 
        style={{ y: orb1Y }}
        className="absolute top-10 md:top-20 right-[-20%] md:right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-600/10 blur-[80px] md:blur-[150px] rounded-full animate-drift" 
      />
      <motion.div 
        style={{ y: orb2Y }}
        className="absolute bottom-10 md:bottom-20 left-[-20%] md:left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent-600/10 blur-[80px] md:blur-[150px] rounded-full animate-drift" 
      />
      
      <div className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full glass-light text-primary-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 border-glow shimmer-effect"
          >
            <Target className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Our Purpose
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight"
          >
            Mission <span className="text-slate-700">&</span> <span className="gradient-text">Vision</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:items-stretch">
          
          {/* Mission Card - Spans 12 columns on mobile/tablet, 7 on LG */}
          <div className="lg:col-span-7">
            <ParallaxCard className="h-full">
              <div className="glass-premium p-6 sm:p-8 md:p-16 rounded-3xl md:rounded-[4rem] border border-white/10 h-full relative overflow-hidden group/card shimmer-effect">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="w-14 h-14 md:w-20 md:h-20 glass-light rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/20 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500">
                      <Flag className="w-6 h-6 md:w-10 md:h-10 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-5xl font-heading font-black text-white">Our Mission</h3>
                      <p className="text-primary-500/60 font-bold uppercase tracking-widest text-[10px] md:text-sm mt-0.5 md:mt-1">Operational Excellence</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    {[
                      { 
                        title: "High Volume", 
                        text: "Deliver dependable, high-volume dark store operations with zero fail rating.",
                        icon: <Zap className="w-5 h-5 text-primary-400" />
                      },
                      { 
                        title: "Workforce", 
                        text: "Leadership and trained manpower that redefine logistics standards.",
                        icon: <Users2 className="w-5 h-5 text-primary-400" />
                      },
                      { 
                        title: "Rapid Expansion", 
                        text: "Infrastructure scalability across India's emerging urban networks.",
                        icon: <ArrowRight className="w-5 h-5 text-primary-400" />
                      },
                      { 
                        title: "Fiscal Strength", 
                        text: "Maintaining robust financial health to fuel our clients' aggressive growth.",
                        icon: <ShieldCheck className="w-5 h-5 text-primary-400" />
                      },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all group/item"
                      >
                        <div className="mb-3 md:mb-4 w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary-500/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <h4 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ParallaxCard>
          </div>

          {/* Vision Card - Spans 12 columns on mobile/tablet, 5 on LG */}
          <div className="lg:col-span-5">
            <ParallaxCard delay={0.2} className="h-full">
              <div className="glass-premium p-6 sm:p-8 md:p-16 rounded-3xl md:rounded-[4rem] border border-white/10 h-full relative overflow-hidden group/card bg-gradient-to-br from-accent-600/10 via-transparent to-transparent shimmer-effect">
                
                {/* Large Background Icon - Scaled Down for Mobile */}
                <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 opacity-5 md:opacity-10 pointer-events-none group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-1000">
                  <Eye className="w-48 h-48 md:w-80 md:h-80 text-accent-400" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 md:mb-12">
                    <div className="w-14 h-14 md:w-20 md:h-20 glass-light rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/20 group-hover/card:scale-110 group-hover/card:-rotate-6 transition-all duration-500 mb-6 md:mb-8">
                      <Eye className="w-6 h-6 md:w-10 md:h-10 text-accent-400" />
                    </div>
                    <h3 className="text-2xl md:text-5xl font-heading font-black text-white">Our Vision</h3>
                    <p className="text-accent-500/60 font-bold uppercase tracking-widest text-[10px] md:text-sm mt-0.5 md:mt-1">The Future State</p>
                  </div>

                  <div className="space-y-8 md:space-y-12 mt-auto">
                    <div className="relative group/vision pl-4 md:pl-0">
                      <div className="absolute left-0 md:-left-6 top-0 bottom-0 w-1 md:w-1.5 bg-accent-500 rounded-full group-hover/vision:h-full transition-all duration-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                      <p className="text-lg md:text-3xl text-slate-100 font-light leading-snug">
                        To emerge as the absolute <span className="text-accent-400 font-black tracking-tight">Preferred Operations Partner</span> for quick-commerce pioneers.
                      </p>
                    </div>

                    <div className="relative group/vision pl-4 md:pl-0">
                      <div className="absolute left-0 md:-left-6 top-0 bottom-0 w-1 md:w-1.5 bg-primary-500 rounded-full group-hover/vision:h-full transition-all duration-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                      <p className="text-lg md:text-3xl text-slate-100 font-light leading-snug">
                        To build an unshakeable legacy as the most <span className="text-primary-400 font-black tracking-tight">Trusted Enabler</span> in the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          </div>

        </div>
      </div>
    </section>
  );
}
