import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Objek sementara untuk menyimpan nilai counter agar bisa di-animate oleh GSAP
    const counter = { value: 0 };

    gsap.to(counter, {
      value: 100,
      duration: 2.5, // Kecepatan loading (detik)
      ease: "power3.inOut",
      onUpdate: () => {
        setProgress(Math.round(counter.value));
      },
      onComplete: () => {
        // Beri jeda sedikit setelah 100% sebelum menutup
        setTimeout(() => {
          finishLoading();
        }, 500);
      },
    });
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", // Animasi geser ke atas saat selesai
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative overflow-hidden px-10">
        {/* Teks Nama Navy Ahmad yang muncul halus */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-medium tracking-[0.2em] text-muted mb-4 uppercase"
        >
          Navy Ahmad — Portfolio
        </motion.p>
      </div>

      {/* Angka Persentase Besar */}
      <div className="flex items-baseline gap-2">
        <h1 className="text-8xl md:text-[12rem] font-heading font-extrabold tracking-tighter inline-block">
          {progress}
        </h1>
        <span className="text-4xl md:text-6xl font-heading font-bold text-accent">
          %
        </span>
      </div>

      {/* Progress Bar Tipis di bawah */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-100 ease-out" 
           style={{ width: `${progress}%` }} 
      />
      
      {/* Dekorasi kecil ala tech */}
      <div className="absolute top-10 right-10 flex flex-col items-end">
        <div className="w-12 h-[1px] bg-muted/30 mb-2" />
        <p className="text-[10px] font-mono text-muted/50 uppercase tracking-widest">
          Initializing System...
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;