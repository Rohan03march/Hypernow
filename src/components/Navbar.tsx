"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Mission & Vision", href: "#mission-vision" },
  { name: "Services", href: "#services" },
  { name: "Strengths", href: "#strengths" },
  { name: "Founders", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "pt-4 px-4 sm:px-6" : "pt-8 px-6 sm:px-10"
          }`}
      >
        <div
          className={`mx-auto max-w-5xl transition-all duration-500 ${scrolled
            ? "bg-background rounded-full px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white/10"
            : "bg-transparent py-4 border-transparent"
            }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              layout
              className="flex items-center cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/hypernow.png"
                alt="HyperNow"
                className={`w-auto object-contain transition-all duration-500 ease-out brightness-200 contrast-125 ${scrolled ? 'h-8 md:h-10' : 'h-12 md:h-16'
                  }`}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-all rounded-full hover:bg-white/10 relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-full glass-light hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading font-bold text-white hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-10 py-4 bg-primary-500 text-white text-xl font-bold rounded-full"
              >
                Get Started
              </motion.a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-12 p-4 rounded-full glass-light text-white"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
