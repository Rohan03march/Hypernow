"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  { icon: <Phone className="w-8 h-8" />, title: "Call Operations", info: "+91 9036377680", link: "tel:+919036377680" },
  { icon: <Mail className="w-8 h-8" />, title: "Strategic Email", info: "info@hypernow.co.in", link: "mailto:info@hypernow.co.in" },
  { icon: <MapPin className="w-8 h-8" />, title: "HQ Location", info: "Chennai & Bengaluru, India", link: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-1.5 rounded-full glass-light text-primary-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10 border-glow"
          >
            Direct Access
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-10 tracking-tighter max-w-6xl"
          >
            Connect with our <span className="gradient-text">Leadership</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-tight mb-24"
          >
            Bypassing the noise for direct operational scaling. Reach out to our
            strategic teams for high-volume dark store requirements.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-none">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-dark p-12 rounded-[3.5rem] border border-white/5 transition-all duration-700 h-full flex flex-col items-center hover:border-primary-500/30 hover:bg-white/[0.05] shadow-2xl">
                  <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-slate-500 group-hover:text-primary-400 transition-all duration-700 border border-white/5 mb-8">
                    {item.icon}
                  </div>
                  <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 group-hover:text-slate-300 transition-colors">
                    {item.title}
                  </h4>
                  {item.link !== "#" ? (
                    <a href={item.link} className="text-xl md:text-2xl font-black text-white hover:text-primary-400 transition-colors tracking-tight">
                      {item.info}
                    </a>
                  ) : (
                    <span className="text-xl md:text-2xl font-black text-white tracking-tight">{item.info}</span>
                  )}

                  {/* Decorative line */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-32 border-t border-white/5 pt-12 w-full flex flex-col items-center"
          >
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[1em] mb-4">Hypernow Strategic Infrastructure</p>
            <div className="flex gap-4 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500/20" />
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Scaling India's Retail Future</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
