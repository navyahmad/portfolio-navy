import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/navy.webp"; // Pastikan path benar

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVars = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-start pt-[15vh] md:justify-center md:pt-0 px-6 md:px-12 overflow-hidden bg-background">
      
      {/* FOTO PORTRAIT */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
        className="absolute right-[-5%] md:right-[5%] bottom-0 h-[70vh] md:h-[90vh] z-10 pointer-events-none"
      >
        <img 
          src={profileImg} 
          alt="Navy Ahmad" 
          className="h-full w-auto object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      <motion.div variants={containerVars} initial="initial" animate="animate" className="relative z-20">
        {/* Baris Pertama: NAVY */}
        <div className="overflow-hidden leading-[0.85]">
          <motion.h1
            variants={itemVars}
            className="text-[20vw] md:text-[14vw] font-heading font-extrabold tracking-tighter uppercase italic text-white mix-blend-difference"
          >
            NAVY
          </motion.h1>
        </div>

        {/* Baris Kedua: AHMAD */}
        <div className="overflow-hidden leading-[0.85] ml-[10vw]">
          <motion.h1
            variants={itemVars}
            className="text-[20vw] md:text-[14vw] font-heading font-extrabold tracking-tighter uppercase italic text-white mix-blend-difference"
          >
            AHMAD
          </motion.h1>
        </div>

        {/* Subtitle & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-10"
        >
          <div className="flex flex-col">
            <p className="max-w-[300px] text-[10px] md:text-xs text-muted leading-relaxed uppercase tracking-widest font-mono">
              Software Engineer Based in Indonesia.
            </p>
          </div>
          <div className="h-[1px] w-20 bg-accent/50 hidden md:block"></div>
          <p className="text-[10px] md:text-xs text-muted/60 font-mono italic uppercase tracking-wider">
            Student at Jember State Polytechnic.
          </p>
        </motion.div>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-[30%] right-[0%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-accent/5 blur-[150px] rounded-full z-0 pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 font-mono text-[10px] uppercase tracking-[0.3em] text-muted rotate-90 md:rotate-0 origin-left"
      >
        Scroll to Explore →
      </motion.div>
    </section>
  );
};

export default Hero;