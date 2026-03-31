"use client";

import { motion } from "framer-motion";
import { TrendingUp, Scale, Settings, CheckCircle2 } from "lucide-react";

export default function Strengths() {
  return (
    <section id="strengths" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full glass-light text-accent-400 font-bold text-xs uppercase tracking-widest mb-6 border-glow">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8">
              Unmatched <span className="gradient-text">Operational</span> Strength
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl">
              HyperNow brings together over a decade of logistics expertise with a modern, tech-enabled approach to dark store management and rapid fulfillment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-heading font-black text-primary-400 mb-2 group-hover:scale-110 transition-transform origin-left">10+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Years</div>
              <div className="text-sm text-slate-300 font-medium">Domain Expertise</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-accent-500/30 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-400 mb-2 group-hover:scale-110 transition-transform origin-left">500+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Manpower</div>
              <div className="text-sm text-slate-300 font-medium">Ready Network</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-400/30 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-heading font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform origin-left">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Cities</div>
              <div className="text-sm text-slate-300 font-medium">Managed Presence</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-400/30 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-heading font-black text-emerald-400 mb-2 group-hover:scale-110 transition-transform origin-left">99%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Reliability</div>
              <div className="text-sm text-slate-300 font-medium">In Inventory Ops</div>
            </motion.div>
          </div>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Operational Expertise",
              desc: "Deep knowledge of process optimization and SLA adherence in high-velocity environments.",
              icon: Settings,
              color: "text-blue-400",
              bgColor: "bg-blue-400/10"
            },
            {
              title: "Scalable Model",
              desc: "Our systems and training protocols are designed for rapid replication across new geographies.",
              icon: Scale,
              color: "text-primary-400",
              bgColor: "bg-primary-400/10"
            },
            {
              title: "Performance Driven",
              desc: "Every metric is tracked, every operation is audited, and every person is accountable.",
              icon: TrendingUp,
              color: "text-accent-400",
              bgColor: "bg-accent-400/10"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-6 p-2"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
