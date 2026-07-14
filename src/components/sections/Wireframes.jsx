'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Wireframes() {
  return (
    <section className="relative w-full bg-[#EEF2FF] py-24 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C4D8FF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.h2 
          className="text-5xl font-serif font-normal text-gray-900 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Wire<span className="text-[#F08CFF]">frames</span>
        </motion.h2>

        {/* Main Container */}
        <motion.div 
          className="w-full rounded-[32px] backdrop-blur-xl border border-white/25 bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] relative overflow-hidden p-0 md:p-8 min-h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
        >
          <div className="relative w-full h-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/wireframes/wireframes-phone.png"
                alt="SnapHire Wireframes"
                fill
                sizes="100vw"
                className="object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
