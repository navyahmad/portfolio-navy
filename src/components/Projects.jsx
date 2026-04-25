import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import { ArrowUpRight, X, Github, Globe, ChevronRight, Plus } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const featuredProjects = PROJECTS.slice(0, 5);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">04. Selected Works</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter uppercase italic text-white">
              {isExpanded ? "Archive" : "Projects"}<span className="text-accent text-5xl">.</span>
            </h2>
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:border-accent transition-all group"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-white">
              {isExpanded ? "Back to Featured" : "View All Projects"}
            </span>
            {isExpanded ? <X size={16} className="text-white" /> : <Plus size={16} className="text-white group-hover:rotate-90 transition-transform" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* BENTO GRID MODE */
            <motion.div 
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]"
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`card-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-surface border border-white/5 cursor-pointer ${project.gridSpan || 'md:col-span-1'}`}
                >
                  <div className="absolute inset-0 z-0">
                    <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>
                  <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-mono text-accent uppercase mb-2">{project.category}</p>
                        <h3 className="text-xl md:text-2xl font-heading font-bold uppercase text-white">{project.title}</h3>
                      </div>
                      <div className="p-3 bg-white text-black rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* LIST ARCHIVE MODE */
            <motion.div 
              key="archive"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="flex flex-col border-t border-white/10"
            >
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] px-4 md:px-6 transition-all"
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-[10px] font-mono text-muted/50">0{index + 1}</span>
                    <div>
                      <h3 className="text-xl md:text-4xl font-heading font-bold uppercase italic text-white group-hover:text-accent group-hover:translate-x-2 md:group-hover:translate-x-4 transition-all duration-500">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 mt-6 md:mt-0 pl-8 md:pl-0">
                    <span className="text-[10px] font-mono text-muted/60 uppercase tracking-widest">{project.category}</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL DETAIL - FIXED RESPONSIVE */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setSelectedProject(null)} 
                className="absolute inset-0 bg-black/95 backdrop-blur-md" 
              />
              
              <motion.div 
                layoutId={`card-${selectedProject.id}`} 
                className="relative w-full max-w-5xl bg-surface rounded-[2rem] md:rounded-[3rem] overflow-hidden z-10 border border-white/10 shadow-2xl max-h-[90vh] flex flex-col"
              >
                {/* Close Button - Fixed Position */}
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-black/50 md:bg-white/10 hover:bg-accent text-white rounded-full transition-colors z-30 backdrop-blur-md"
                >
                  <X size={20} />
                </button>

                {/* Scrollable Container */}
                <div className="overflow-y-auto custom-scrollbar flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    
                    {/* Image Section */}
                    <div className="h-[250px] md:h-[400px] lg:h-full sticky lg:relative top-0 z-0 bg-black">
                      <img 
                        src={selectedProject.image} 
                        loading="lazy" 
                        className="w-full h-full object-cover object-top" 
                        alt={selectedProject.title} 
                      />
                      {/* Gradient to blend image with content smoothly */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/80 lg:hidden" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-surface relative z-10">
                      <p className="text-accent font-mono text-[10px] md:text-xs uppercase mb-4 tracking-[0.2em]">
                        {selectedProject.category}
                      </p>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 italic uppercase leading-tight text-white">
                        {selectedProject.title}
                      </h2>
                      <p className="text-muted leading-relaxed mb-8 text-sm md:text-base lg:text-lg">
                        {selectedProject.fullDescription}
                      </p>

                      {/* Tech List */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="text-[9px] md:text-[10px] px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full font-mono uppercase text-white/80">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        {selectedProject.github && (
                          <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-white text-black py-4 md:py-5 rounded-full font-bold uppercase text-[10px] md:text-xs hover:bg-accent hover:text-white transition-all shadow-lg shadow-white/5">
                            <Github size={18} /> GitHub
                          </a>
                        )}
                        {selectedProject.demo && (
                          <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 border border-white/20 text-white py-4 md:py-5 rounded-full font-bold uppercase text-[10px] md:text-xs hover:border-accent hover:text-accent transition-all">
                            <Globe size={18} /> Demo
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;