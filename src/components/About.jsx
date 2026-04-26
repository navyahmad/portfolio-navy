import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../constants";
import { RiGamepadLine, RiTerminalBoxLine, RiCupLine, RiUserSmileLine, RiHeartPulseLine, RiCodeSSlashLine } from "react-icons/ri";
import { 
  SiLaravel, SiReact, SiNextdotjs, SiAstro, SiPhp, SiJavascript, SiPython, 
  SiGo, SiN8N, SiTailwindcss, SiBootstrap, SiFigma, SiFramer, SiGreensock, 
  SiMysql, SiGit, SiVite 
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-background overflow-hidden text-white">
      {/* Marquee Background - Pure CSS animation (compositor thread, tidak bebankan JS) */}
      <div className="absolute top-1/4 -left-10 w-[200%] overflow-hidden opacity-5 pointer-events-none z-0 rotate-[-2deg] flex">
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
           <span className="text-[12rem] md:text-[20rem] font-black uppercase text-transparent whitespace-nowrap" style={{ WebkitTextStroke: "2px #3b82f6" }}>
             BUILDING APP IS AN ART • EVERYTHING IS CANVAS • BUILDING APP IS AN ART • EVERYTHING IS CANVAS •
           </span>
           <span className="text-[12rem] md:text-[20rem] font-black uppercase text-transparent whitespace-nowrap" style={{ WebkitTextStroke: "2px #3b82f6" }}>
             BUILDING APP IS AN ART • EVERYTHING IS CANVAS • BUILDING APP IS AN ART • EVERYTHING IS CANVAS •
           </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-accent" />
            <p className="text-accent font-mono text-sm tracking-[0.3em] uppercase">02. Selected Expertise</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter uppercase italic text-white">
            Let's <span className="text-accent">Collaborate</span><span className="text-accent text-5xl">.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 h-[500px] md:h-[600px] rounded-[2rem] bg-surface relative overflow-hidden group"
          >
             <img 
               src={ABOUT_DATA.image} 
               loading="lazy"
               alt="Navy Ahmad" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
             />
             <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-2xl p-4 z-20 flex items-center justify-between border border-white/5">
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-wider">Navy Ahmad</h3>
                  <p className="text-accent text-sm font-mono hover:text-white transition-colors">Software Engineer</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <RiUserSmileLine size={24} />
                </div>
             </div>
          </motion.div>

          {/* Right Column Container */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Bio */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex-1 bg-surface border border-transparent hover:border-white/5 transition-all duration-500 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col justify-center"
            >
               <div className="flex items-center gap-3 mb-6 relative z-10">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                 <span className="text-white/40 text-sm font-mono font-bold uppercase tracking-widest">About Me</span>
               </div>
               
               <p className="text-base md:text-xl font-sans font-normal leading-[1.8] tracking-normal text-muted relative z-10 group-hover:text-white transition-colors duration-300">
                 {ABOUT_DATA.bio}
               </p>
               
               {/* Subtle background decoration instead of massive watermark text */}
               <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
            </motion.div>

            {/* Bottom Row inside Right Col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-64">
              
              {/* Gear (Redesigned) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-surface p-8 rounded-[2rem] flex flex-col relative overflow-hidden group border border-transparent hover:border-white/5 transition-all duration-500"
              >
                {/* Glow effect di background saat container di hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full w-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-white/40 group-hover:text-white transition-colors">Core Focus</h3>
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <RiTerminalBoxLine size={18} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    {ABOUT_DATA.focus.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-3.5 rounded-xl bg-black/30 border border-white/5 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5 cursor-default group/item"
                      >
                        <span className="text-white/60 font-mono text-xs font-semibold uppercase tracking-wider group-hover/item:text-accent transition-colors">
                          {item}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-sm bg-white/20 group-hover/item:bg-accent group-hover/item:rotate-45 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-accent p-8 rounded-[2rem] flex flex-col justify-between text-white relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm">Skills</h3>
                    <RiCodeSSlashLine size={24} className="text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-wrap gap-4 items-center justify-start text-white/80">
                    <SiLaravel size={26} title="Laravel" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiReact size={26} title="React" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiNextdotjs size={26} title="Next.js" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiAstro size={26} title="Astro.js" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiPhp size={26} title="PHP" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiJavascript size={26} title="JavaScript" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiPython size={26} title="Python" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiN8N size={26} title="n8n" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiTailwindcss size={26} title="Tailwind CSS" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiBootstrap size={26} title="Bootstrap" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiFigma size={26} title="Figma" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiFramer size={26} title="Framer Motion" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiGreensock size={26} title="GSAP" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiMysql size={26} title="MySQL" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiGit size={26} title="Git" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                    <SiVite size={26} title="Vite" className="hover:text-white hover:scale-125 transition-all cursor-help" />
                  </div>
                </div>
                
                {/* Decorative Background Element */}
                <div className="absolute -right-6 -bottom-6 text-black/10 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <RiCodeSSlashLine size={180} />
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;