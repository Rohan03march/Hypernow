"use client";

import { motion } from "framer-motion";
import {
  Store,
  Users,
  PackageCheck,
  ClipboardList,
  Truck,
  Map,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    title: "Dark Store Management",
    description: "End-to-end management of rapid fulfillment centers ensuring 10-minute delivery SLAs.",
    icon: <Store className="w-6 h-6" />,
  },
  {
    title: "Workforce Solutions",
    description: "Recruitment, training, and deployment of reliable personnel scaled to your volume.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Quick Fulfillment",
    description: "Streamlined sorting, packing, and dispatch processes engineered for speed.",
    icon: <PackageCheck className="w-6 h-6" />,
  },
  {
    title: "Inventory Control",
    description: "Precise inwarding, automated tracking, and stock-out prevention systems.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Last Mile Coordination",
    description: "Optimized handover synchronization to fleet partners for immediate dispatch.",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: "Multi-City Expansion",
    description: "Rapid replication of operational blueprints across metros and tier-2 markets.",
    icon: <Map className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full glass-light text-primary-400 font-bold text-xs uppercase tracking-widest mb-6 border-glow"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8"
          >
            Our Core <span className="gradient-text">Services</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            We provide the infrastructure and expertise to scale your quick-commerce operations across India at record speeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass p-10 rounded-[2.5rem] transition-all hover:bg-white/5 border border-white/5 hover:border-primary-500/30 relative flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-500 shadow-xl group-hover:shadow-primary-500/20">
                  {/* Re-rendering the icon with primary color */}
                  <div className="text-primary-400 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
