"use client";

import { motion, Variants } from "framer-motion";
import { Building2, MapPin, Target, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-light text-primary-400 font-bold text-xs uppercase tracking-widest mb-6 border-glow">
                <Building2 className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8 leading-[1.1]">
                Mastering the <br />
                <span className="gradient-text">Logistics Frontier</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light">
                HyperNow Logistics is the definitive partner for <span className="text-white font-medium">dark store operations</span>. We don't just manage stock; we optimize the entire 10-minute fulfillment cycle with precision and scale.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: <Zap className="w-5 h-5 text-accent-400" />,
                  title: "Founded in 2026",
                  desc: "Born to solve the complexities of modern quick-commerce fulfillment.",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-primary-400" />,
                  title: "Pan-India Presence",
                  desc: "Operating from Bengaluru and Chennai with active scale-up in all major Indian metros.",
                },
                {
                  icon: <Target className="w-5 h-5 text-primary-400" />,
                  title: "Operational Rigor",
                  desc: "Deep expertise in dark store workflows and high-performance man-power management.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5"
                >
                  <div className="flex-shrink-0 w-12 h-12 glass rounded-xl flex items-center justify-center border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white/5 glass group">
              <img
                src="/images/quick-commerce-store.png"
                alt="Premium Quick Commerce Store"
                className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary-500/10" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] shadow-2xl border border-white/10 max-w-[260px] hidden md:block"
            >
              <div className="text-5xl font-heading font-black text-white mb-2 tracking-tight">10y+</div>
              <div className="text-xs font-bold text-accent-400 uppercase tracking-widest mb-3">Leadership Depth</div>
              <div className="text-sm text-slate-300 font-light leading-relaxed">Combined experience in fulfillment, dark stores, and hyper-local logistics.</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
