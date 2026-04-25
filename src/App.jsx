import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechEducation from "./components/TechEducation";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import About from "./components/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Konfigurasi Lenis untuk feel "Premium"
  const lenisOptions = {
    lerp: 0.05,        // Semakin kecil angka, semakin halus/lambat (0.01 - 0.1)
    duration: 1.5,     // Durasi scroll
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative selection:bg-accent selection:text-white">
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <TechEducation />
            <Contact />
          </main>

          {/* Footer Simple */}
          <footer className="py-10 text-center border-t border-white/5">
             <p className="text-[10px] text-muted tracking-widest uppercase">
               © 2026 Navy Ahmad —  Indonesia.
             </p>
          </footer>
        </div>
      )}
    </ReactLenis>
  );
}

export default App;