import React from "react";
import { motion } from "framer-motion";
import { SKILLS, EDUCATION } from "../constants";
import { GraduationCap, MapPin } from "lucide-react";

const TechEducation = () => {
  return (
    <section id="education" className="py-20 bg-background overflow-hidden">
      {/* INFINITE MARQUEE SKILLS */}
      <div className="relative flex overflow-x-hidden border-y border-white/5 bg-surface/20 py-10 mb-20">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Ulangi list 2 kali agar looping tidak terputus */}
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <span 
              key={index} 
              className="mx-10 text-4xl md:text-7xl font-heading font-black uppercase italic tracking-tighter text-white/20 hover:text-accent transition-colors duration-500 cursor-default"
            >
              {skill} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* EDUCATION SECTION */}
          <div>
            <p className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-6">06. Education</p>
            <h2 className="text-4xl font-heading font-bold mb-10 tracking-tighter uppercase italic">Identity Path<span className="text-accent">.</span></h2>
            
            <div className="space-y-12">
              {EDUCATION.map((edu) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={edu.id} 
                  className="group relative pl-6 border-l border-white/10 hover:border-accent transition-colors duration-500"
                >
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                  <span className="text-xs font-mono text-muted uppercase tracking-widest">{edu.date}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 group-hover:text-accent transition-colors">{edu.school}</h3>
                  <p className="text-sm font-medium text-white/80 mt-1 uppercase tracking-tight">{edu.major}</p>
                  
                  <div className="flex items-center gap-2 mt-4 text-muted">
                    <MapPin size={14} />
                    <span className="text-xs italic">{edu.location}</span>
                  </div>
                  
                  <p className="mt-4 text-sm text-muted leading-relaxed max-w-md italic">
                    "{edu.description}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ADDITIONAL INFO / QUOTE ALA FIQRI */}
          <div className="flex flex-col justify-center bg-surface/30 p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
               <GraduationCap size={200} />
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-6 leading-tight">
              Bridging the gap between <span className="text-accent">Artificial Intelligence</span> and <span className="text-accent">Web Scalability</span>.
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Based in Indonesia, currently expanding my horizons at Jember State Polytechnic. My journey is a continuous cycle of learning, building, and competing in the challenging world of software engineering.
            </p>
            <div className="flex gap-4">
               <div className="w-12 h-1 bg-accent rounded-full" />
               <div className="w-4 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechEducation;