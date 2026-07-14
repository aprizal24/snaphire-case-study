
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEF2FF]">
      {/* Centered Hero canvas container */}
      <div className="relative mx-auto w-full max-w-[1600px] h-[clamp(850px,100vh,1100px)] overflow-hidden">
        {/* Background decoration shapes */}
        <div className="absolute inset-0 z-0">
          {/* Left shapes - skyline */}
          <div
            className="absolute left-[-80px] bottom-0 flex items-end gap-4"
          >
            <div
              className="w-[50px] h-[140px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[70px] h-[260px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[90px] h-[380px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[110px] h-[410px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[75px] h-[260px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[60px] h-[140px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[85px] h-[340px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
          </div>

          {/* Right shapes - skyline */}
          <div
            className="absolute right-[-80px] bottom-0 flex items-end gap-4"
          >
            <div
              className="w-[85px] h-[340px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[60px] h-[140px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[75px] h-[260px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[110px] h-[410px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[90px] h-[380px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[70px] h-[260px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
            <div
              className="w-[50px] h-[140px] bg-gradient-to-t from-[#EEF2FF]/80 to-[#A8C1FF]/30 backdrop-blur-xl rounded-t-3xl overflow-hidden"  
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.25)" }}
            />
          </div>
        </div>

        {/* Metadata - top left */}
        <div className="absolute top-8 left-6 md:left-12 z-30 flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Category</span>
            <span className="text-lg font-bold text-gray-900">Mobile App</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Project Theme</span>
            <span className="text-lg font-bold text-gray-900">Booking photographer app</span>
          </div>
        </div>

        {/* Main visual - iPhone mockup */}
        <motion.div
          className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/mockups/hero-phone.png"
            alt="SnapHire iPhone mockup"
            width={400}
            height={800}
            className="object-contain w-[200px] sm:w-[250px] md:w-[310px] h-auto"
            priority
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Project title - bottom center, in front of phone */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
          {/* Base text layer */}
          <motion.h1
            className="text-[clamp(6rem,20vw,16rem)] font-black text-[#C4D8FF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            SnapHire
          </motion.h1>
          {/* Overlay layer for inner highlight/emboss effect */}
          <motion.h1
            className="absolute inset-0 text-[clamp(6rem,20vw,16rem)] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/70 via-transparent to-transparent"
            style={{
              WebkitTextStroke: "1px rgba(193, 199, 255, 0.6)",
              filter: "drop-shadow(0 -1px 1px rgba(199, 218, 252, 1))"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            SnapHire
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
