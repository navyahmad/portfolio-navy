import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const items = gsap.utils.toArray(".experience-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const handleMouseMove = (e) => {
      // Kita ambil posisi relatif terhadap viewport
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-background relative overflow-visible">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <p className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">
            03. Career 
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter uppercase italic text-white">
            Experience<span className="text-accent text-5xl">.</span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:grid md:grid-cols-1 gap-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              className="experience-item relative pl-8 md:pl-12 pb-12 group cursor-crosshair"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Dot Timeline */}
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-accent group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-30" />

              {/* Konten Teks */}
              <div className="relative z-20">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight group-hover:text-accent transition-colors text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-mono text-muted uppercase tracking-widest bg-surface px-3 py-1 rounded-full border border-white/5">
                    {exp.year}
                  </span>
                </div>

                <p className="text-accent/80 font-medium mb-4 text-sm uppercase tracking-wider">
                  {exp.company}
                </p>

                <p className="max-w-2xl text-muted text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded uppercase group-hover:border-accent/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* FLOATING IMAGE REVEAL - Muncul di area kursor dalam baris ini */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      x: mousePos.x - (window.innerWidth > 768 ? 400 : 100), // Posisi horizontal mengikuti kursor
                      top: mousePos.y - (window.innerHeight > 768 ? 300 : 200) // Posisi vertikal mengikuti kursor
                    }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    className="fixed pointer-events-none z-50 w-48 h-32 md:w-80 md:h-52 rounded-2xl overflow-hidden border border-accent/40 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                  >
                    <img 
                      src={exp.image} 
                      loading="lazy"
                      alt="Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;