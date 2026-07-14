'use client';

import { motion } from 'framer-motion';

export default function DesignProcess() {
  const steps = [
    'Research',
    'UX Architecture',
    'Wireframes',
    'UI Design',
    'Presentation',
  ];

  return (
    <section className="relative w-full bg-[#EEF2FF] pt-5 pb-15 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#C4D8FF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C4D8FF]/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl font-serif font-normal text-gray-900 mb-16">
          Design <span className="text-[#E98CFF]">Process</span>
        </h2>

        {/* Glass Content Card */}
        <motion.div
          className="w-full rounded-[32px] bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] backdrop-blur-xl border border-white/20 p-10 md:p-16 min-h-[280px] relative overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 z-10">
            {steps.map((step) => (
              <div
                key={step}
                className="rounded-xl px-5 py-3 bg-[#E8E5FF] backdrop-blur-md font-semibold text-gray-900 whitespace-nowrap"
              >
                {step}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
