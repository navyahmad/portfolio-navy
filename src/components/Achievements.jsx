import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";
import { Trophy, Star, ArrowUpRight, Award } from "lucide-react";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = [
    { id: "All", label: "All", icon: Award },
    { id: "Academic", label: "Academic", icon: Trophy },
    { id: "Non-Academic", label: "Non-Academic", icon: Star }
  ];

  const filteredAchievements = ACHIEVEMENTS.filter((ach) =>
    activeTab === "All" ? true : ach.category === activeTab
  );

  return (
    <section id="achievements" className="py-20 md:py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <p className="text-accent font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">
              05. Recognition
            </p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter uppercase italic text-white leading-none">
              Awards<span className="text-accent">&</span>Honors<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-muted text-[10px] font-mono uppercase tracking-[0.2em] italic border-b border-white/10 pb-2">
              National & International Merits
            </p>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 mb-12 border-b border-white/5 pb-8 w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group flex items-center justify-center shrink-0 gap-2 md:gap-3 px-4 sm:px-5 md:px-7 py-2.5 md:py-3 rounded-full font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-widest transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "text-white font-semibold shadow-lg shadow-black/20"
                    : "text-muted hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 bg-white/5 group-hover:bg-white/10 rounded-full -z-10 transition-all duration-300" />
                )}
                
                <Icon size={18} className={`transition-all duration-300 z-10 ${isActive ? 'scale-110 drop-shadow-md' : 'group-hover:rotate-12 group-hover:text-accent'}`} />
                <span className="z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid for Desktop, 1-Column for Mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((ach, index) => (
              <motion.div
                key={ach.id}
                layout
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="group relative flex flex-col bg-surface/20 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-accent/30 hover:bg-surface/40"
              >
                {/* Image Container (Top Section of Card) */}
                <div className="relative h-60 md:h-72 overflow-hidden">
                  <img 
                    src={ach.certificateImg} 
                    loading="lazy"
                    alt={ach.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 p-3 bg-background/80 backdrop-blur-md rounded-2xl text-accent border border-white/5 shadow-xl">
                    {ach.category === "Academic" ? <Trophy size={20} /> : <Star size={20} />}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                    <span className="text-[9px] font-mono text-white bg-accent/80 px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm shadow-md">
                      {ach.status}
                    </span>
                    <span className="text-[9px] font-mono text-white/80 bg-black/60 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm shadow-md">
                      {ach.category}
                    </span>
                  </div>
                </div>

                {/* Text Content (Bottom Section of Card) */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-muted font-mono text-[10px] tracking-widest uppercase italic">
                    <span>{ach.year}</span>
                    <span className="w-10 h-[1px] bg-white/10"></span>
                    <span>{ach.event}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase italic leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                    {ach.title}
                  </h3>
                  
                  <p className="text-muted text-sm leading-relaxed italic mb-8">
                    "{ach.description}"
                  </p>

                  {/* Footer of Card */}
                  <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-6">
                    <span className="text-[9px] font-mono text-muted uppercase tracking-[0.2em]">Verified Documentation</span>
                    <div className="text-white/20 group-hover:text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Subtle Decorative Number */}
                <div className="absolute -right-6 -bottom-6 text-9xl font-black text-white/[0.02] italic pointer-events-none group-hover:text-accent/[0.05] transition-colors duration-500">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAchievements.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            className="text-center py-20 text-muted font-mono"
          >
            No achievements found for this category.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;