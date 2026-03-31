"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-block px-3 py-1 rounded-full glass-light text-primary-400 font-bold text-xs uppercase tracking-widest mb-6 border-glow">
                Get in Touch
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8 tracking-tight">
                Let's Scale <span className="gradient-text">Operations</span> Together
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                Ready to transform your logistics efficiency? Reach out to our 
                strategic teams for a deep-dive into your operational needs.
              </p>
            </motion.div>

            <div className="space-y-10">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Call Operations", info: "+91 9036377680", link: "tel:+919036377680" },
                { icon: <Mail className="w-6 h-6" />, title: "Strategic Email", info: "info@hypernow.co.in", link: "mailto:info@hypernow.co.in" },
                { icon: <MapPin className="w-6 h-6" />, title: "HQ Location", info: "Bangalore, India", link: "#" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 items-center group"
                >
                  <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center flex-shrink-0 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 border border-white/5 border-glow">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                    {item.link !== "#" ? (
                      <a href={item.link} className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
                        {item.info}
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-white">{item.info}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 md:p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            {/* Form decorative accent blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 blur-[60px] pointer-events-none" />
            
            <h3 className="text-3xl font-heading font-black text-white mb-10">Send a Brief</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-6 py-5 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-white placeholder-slate-600 font-medium" placeholder="E.g. Harsheel Patel" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-6 py-5 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-white placeholder-slate-600 font-medium" placeholder="company@email.com" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Company Entity</label>
                <input type="text" id="company" className="w-full px-6 py-5 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-white placeholder-slate-600 font-medium" placeholder="Name of your company" />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Operational Requirement</label>
                <textarea id="message" rows={4} className="w-full px-6 py-5 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-white placeholder-slate-600 font-medium resize-none" placeholder="Brief about your dark store requirement..." />
              </div>

              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary-600/20 group/btn">
                Initiate Partnership
                <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
