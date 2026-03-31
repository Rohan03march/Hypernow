"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const leaders = [
  { 
    name: "Harsheel S Patel", 
    role: "Co-Founder", 
    id: "01",
    designation: "Strategic Vision",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    highlights: [
      "Architect and business innovation strategist with a long-term investment vision.",
      "Active investment partner in multiple ventures across diverse high-growth sectors.",
      "Specialist in rapid commerce infrastructure and dark store facility optimization.",
      "Deeply explores emerging business models for platforms like Blinkit and Zepto.",
    ]
  },
  { 
    name: "Vignesh S", 
    role: "Co-Founder", 
    id: "02",
    designation: "Growth Ops",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    highlights: [
      "10+ years of expertise in manufacturing, supply chain, and e-commerce logistics.",
      "Previous leadership roles at Amazon, Godrej, and Hindustan Foods Ltd.",
      "Specialist in warehouse operations, last-mile delivery, and inventory control.",
      "Proven expert in process improvement and large-scale team management.",
    ]
  },
  { 
    name: "Syed Nawaz", 
    role: "Co-Founder", 
    id: "03",
    designation: "Operational Rigor",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    highlights: [
      "MBA with 5+ years of dedicated expertise in the quick-commerce landscape.",
      "Former Darkstore Manager at Zepto and Blinkit, handling intensive operations.",
      "Managed high-volume stores processing massive 3000-4000 orders per day.",
      "Strong background in multi-store performance and logistics handling.",
    ]
  },
  { 
    name: "Chandan Lokesh", 
    role: "Co-Founder", 
    id: "04",
    designation: "Strategic Manpower",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    highlights: [
      "Founder of 'SOURCE ONE,' managing a successful workforce of 500+ employees.",
      "Strategic manpower provider for industry giants Blinkit, Zepto, and John Distilleries.",
      "Expert in recruitment, workforce development, and attrition management.",
      "Specialist in operational staffing and human resource scaling.",
    ]
  },
];

function LeaderRow({ leader, index }: { leader: typeof leaders[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-white/5 first:border-0"
    >
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start py-28 px-8 lg:px-12 transition-all duration-1000 hover:bg-white/[0.01]">
        
        {/* Identity Section (Left) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 relative z-10">
           <div className="flex items-center gap-6 mb-8">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-primary-500 tracking-[0.5em] mb-1">BOARD SEAT</span>
                 <span className="text-3xl font-heading font-black text-white/10 group-hover:text-white/30 transition-colors uppercase">{leader.id}</span>
              </div>
              <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center border border-white/5 text-slate-500 group-hover:text-primary-400 transition-all duration-700">
                {leader.icon({ className: "w-7 h-7" })}
              </div>
           </div>
           
           <div className="mb-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4 group-hover:text-slate-300 transition-colors">{leader.designation}</span>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-none tracking-tighter group-hover:text-primary-300 transition-colors duration-700">
                {leader.name}
              </h3>
           </div>
        </div>

        {/* Bio Section (Right) */}
        <div className="w-full lg:w-[55%] flex flex-col relative z-20 lg:pl-16 lg:border-l lg:border-white/5">
           <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
              <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              <span className="text-sm font-black text-slate-200 uppercase tracking-[0.3em] font-heading">{leader.role}</span>
           </div>

           <div className="space-y-6 lg:max-w-2xl">
              {leader.highlights.map((point, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-6 items-start group/point"
                >
                  <CheckCircle2 className="mt-1 w-5 h-5 text-primary-500 flex-shrink-0 opacity-40 group-hover/point:opacity-100 transition-opacity" />
                  <span className="text-base md:text-lg text-slate-400 font-medium leading-relaxed group-hover/point:text-white transition-colors">
                    {point}
                  </span>
                </motion.div>
              ))}
              <div className="pt-10 flex items-center justify-between border-t border-white/10 mt-4">
                 <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Architectural Insight Profile</span>
                 <LinkedInIcon className="w-6 h-6 text-slate-600 hover:text-primary-400 cursor-pointer transition-all hover:scale-110" />
              </div>
           </div>
        </div>

        {/* Animated Row Separator */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent transition-all duration-1000 ease-in-out" />
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.01]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-light text-primary-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10 border-glow"
          >
            Board of Directors
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-10 tracking-tighter"
          >
            Meet the <span className="gradient-text">Founders</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-tight"
          >
            The architectural minds driving India's next-generation quick-commerce infrastructure.
          </motion.p>
        </div>

        {/* Horizontal List Stack */}
        <div className="flex flex-col border-b border-white/5">
          {leaders.map((leader, index) => (
            <LeaderRow key={index} leader={leader} index={index} />
          ))}
        </div>

        {/* Final Sign-off */}
        <div className="mt-20 text-center">
           <p className="text-[10px] font-black text-slate-700 uppercase tracking-[1em]">Hypernow Management Group</p>
        </div>

      </div>
    </section>
  );
}
