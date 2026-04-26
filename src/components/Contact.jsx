import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

const Contact = () => {
  const socials = [
    { icon: <Github size={20} />, link: "https://github.com/navyahmad", name: "Github" },
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/nvyahmd/", name: "Instagram" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/navy-ahmad-39521a368/", name: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-10"
        >
          07. Ready to Start?
        </motion.p>

        {/* Big Call to Action */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-heading font-bold tracking-tighter uppercase italic leading-[0.9] mb-16"
        >
          Let's Build <br /> Something <span className="text-accent">Great.</span>
        </motion.h2>

        {/* Magnetic Contact Button */}
        <div className="mb-20">
          <Magnetic>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadnavy826@gmail.com" target="_blank" rel="noreferrer"
              className="group relative w-40 h-40 md:w-56 md:h-56 bg-white text-black rounded-full flex items-center justify-center overflow-hidden transition-colors hover:bg-accent"
            >
              <div className="relative z-10 flex flex-col items-center group-hover:text-white transition-colors duration-500">
                <Mail size={32} className="mb-2" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Get In Touch</span>
              </div>
              {/* Efek Hover Fill */}
              <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full" />
            </a>
          </Magnetic>
        </div>

        {/* Social Links & Footer Info */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8 md:gap-0">
          <div className="flex gap-6">
            {socials.map((social, i) => (
              <Magnetic key={i}>
                <a 
                  href={social.link} 
                  target="_blank" 
                  className="text-muted hover:text-white flex items-center gap-2 text-xs uppercase font-mono tracking-widest transition-colors"
                >
                  {social.icon} {social.name}
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="text-right">
            <p className="text-[10px] text-muted uppercase tracking-[0.2em]">
              Designed & Built by <span className="text-white font-bold">NAVY AHMAD</span>
            </p>
            
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Contact;