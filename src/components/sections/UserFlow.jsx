'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function UserFlow() {
  return (
    <section className="relative w-full bg-[#EEF2FF] py-24 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C4D8FF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl font-serif font-normal text-gray-900 mb-16">
          User <span className="text-[#E98CFF]">Flow</span>
        </h2>

        {/* Main Flow Container */}
        <motion.div
          className="w-full rounded-[32px] bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] backdrop-blur-xl border border-white/30 relative overflow-hidden p-10 pt-0 pb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* User Flow Image */}
          <div className="relative w-full h-[800px]">
            <Image
              src="/images/userflow/userflow.png"
              alt="SnapHire User Flow"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
