import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Hide on scroll logic
  useEffect(() => {
    const updateScrollDirection = () => {
      if (isOpen) return; // Prevent hiding nav when menu is open
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY && scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [lastScrollY, isOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none"
      >
        {/* Logo */}
        <a href="#home" className="pointer-events-auto text-xl font-heading font-extrabold tracking-tighter uppercase relative z-50 text-white">
          NAVY<span className="text-accent text-2xl">.</span>
        </a>

        {/* Nav Container (Desktop Only, Glassmorphism) */}
        <div className="hidden md:flex pointer-events-auto items-center bg-surface/40 backdrop-blur-xl border border-white/5 px-2 py-2 rounded-full shadow-2xl">
          <div className="flex gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-muted hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="pointer-events-auto flex items-center gap-4 relative z-50">
          {/* CTA Button (Desktop Only) */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/6288226120048?text=Halo%20Navy,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20project..." 
              target="_blank" rel="noreferrer"
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-black px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-500"
            >
              Let's Talk
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 bg-surface/40 backdrop-blur-xl border border-white/5 rounded-full text-white hover:bg-white/10 transition-all duration-300 active:scale-95 shadow-xl"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Overlay Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-[55] flex flex-col justify-center items-center px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
                  className="text-4xl sm:text-5xl font-heading font-black uppercase italic tracking-tighter text-white/50 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/6288226120048?text=Halo%20Navy,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20project..."
                target="_blank" rel="noreferrer"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * navLinks.length, ease: [0.76, 0, 0.24, 1] }}
                className="mt-8 text-xs font-mono font-bold uppercase tracking-[0.3em] border border-white/20 px-8 py-4 rounded-full text-white hover:bg-accent hover:border-accent transition-all duration-300 bg-surface/50"
              >
                Let's Talk
              </motion.a>
            </div>
            
            <div className="absolute bottom-10 left-0 w-full text-center">
              <p className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">
                {new Date().getFullYear()} © Navy
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;