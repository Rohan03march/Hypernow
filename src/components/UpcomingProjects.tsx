"use client";

import { motion } from "framer-motion";
import { Activity, Calendar, AlertCircle } from "lucide-react";

const location = {
  city: "Chennai Locations",
  client: "Zepto",
  status: "Discussion in Progress",
  details: "Finalizing operational terms for high-velocity dark store infrastructure at two strategic urban clusters in Chennai.",
  highlight: "2 Dark Stores Planned"
};

export default function UpcomingProjects() {
  return (
    <section id="expansion" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-light text-primary-400 font-bold text-xs uppercase tracking-widest mb-6 border-glow"
            >
              <Activity className="w-3 h-3" />
              Strategic Growth
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-8"
            >
              Expansion <span className="gradient-text">Roadmap</span>
            </motion.h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              We are actively scaling our operations to new horizons, partnering with industry leaders to redefine quick-commerce logistics.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-premium p-6 rounded-3xl border-l-4 border-yellow-500/50 flex items-start gap-4 max-w-md"
          >
            <div className="bg-yellow-500/20 p-2 rounded-xl text-yellow-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Paused for Elections</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strategic rollouts are currently on hold due to state elections. Discussions will conclude immediately following the polls.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden w-full max-w-4xl"
          >
            <div className="glass p-10 md:p-12 rounded-[3rem] border border-white/5 group-hover:border-primary-500/30 transition-all duration-700 h-full flex flex-col justify-between shimmer-effect">
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-40 h-16 flex items-center justify-start group-hover:scale-110 transition-all duration-500 overflow-hidden">
                    <img src="/images/Zepto.png" alt="Zepto" className="w-full h-full object-contain object-left pointer-events-none" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider">
                    {location.status}
                  </div>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 group-hover:text-primary-300 transition-colors tracking-tight">
                  {location.city} <span className="text-xl font-light text-slate-500 ml-2">For {location.client}</span>
                </h3>

                <p className="text-slate-400 text-xl leading-relaxed mb-10">
                  {location.details}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-white font-bold text-lg">
                  <Calendar className="w-6 h-6 text-primary-400" />
                  {location.highlight}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
