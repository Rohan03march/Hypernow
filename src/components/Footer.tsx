"use client";

import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img src="/hypernow.png" alt="HyperNow Logistics" className="h-12 w-auto object-contain brightness-110" />
            </div>
            <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm">
              The preferred operations partner for quick-commerce pioneers across India, 
              delivering dependable, high-volume scalable infrastructure.
            </p>
            <div className="flex gap-4">
              {/* Placeholder for social icons if needed, or just a sleek divider */}
              <div className="h-px w-12 bg-primary-500/50" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black mb-8 tracking-widest uppercase text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Strengths', 'Leadership'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="text-slate-400 hover:text-primary-400 transition-all font-medium text-sm flex items-center group"
                  >
                    {item}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-black mb-8 tracking-widest uppercase text-xs">Expertise</h4>
            <ul className="space-y-4">
              {['Dark Store Ops', 'Workforce Management', 'Fulfillment Prep', 'Inventory Precision', 'National Scaling'].map((item) => (
                <li key={item} className="text-slate-500 font-medium text-sm hover:text-slate-300 transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black mb-8 tracking-widest uppercase text-xs">Connect</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-slate-400 items-start group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="font-medium text-sm leading-relaxed">
                  Bangalore, Karnataka<br/>India
                </span>
              </li>
              <li className="flex gap-4 text-slate-400 items-center group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <a href="tel:+919036377680" className="font-medium text-sm hover:text-white transition-colors">+91 9036377680</a>
              </li>
              <li className="flex gap-4 text-slate-400 items-center group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <a href="mailto:info@hypernow.co.in" className="font-medium text-sm hover:text-white transition-colors">info@hypernow.co.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">
            &copy; {currentYear} <span className="text-white">HyperNow Logistics LLP</span>. Engineered for Speed.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
