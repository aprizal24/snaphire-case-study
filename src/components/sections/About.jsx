'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative w-full bg-[#EEF2FF] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-5xl font-serif font-normal text-gray-900 mb-16">
          About <span className="text-[#E98CFF]">Project</span>
        </h2>

        {/* Glass Content Card */}
        <motion.div
          className="w-full rounded-[32px] bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] backdrop-blur-xl border border-white/30 p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[clamp(2rem,4vw,4rem)] font-medium leading-tight">
            <span className="text-gray-900">SnapHire is a photography booking app that helps you </span>
            <span className="text-[#9CA9C5]">find, choose and book</span>
            <span className="text-gray-900"> professional photographers easily. It’s your way to capture moments </span>
            <span className="text-[#9CA9C5]">with confidence.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
