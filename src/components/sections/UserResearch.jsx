'use client';

import { motion } from 'framer-motion';

export default function UserResearch() {
  return (
    <section className="relative w-full bg-[#EEF2FF] py-24 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-24 left-10 w-96 h-96 bg-[#C4D8FF]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-10 w-80 h-80 bg-[#C4D8FF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl font-serif font-normal text-gray-900 mb-16">
          User <span className="text-[#E98CFF]">Research</span>
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          {/* Problem Card */}
          <motion.div
            className="max-w-md w-full rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] backdrop-blur-xl border border-white/30 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block rounded-md px-4 py-2 bg-[#F6D9FF] font-semibold text-black mb-4">
              Problem
            </div>
            <p className="text-base leading-relaxed">
              Users struggle to find photographers that match their style and budget due to unclear portfolios and ratings. Booking is complicated, payments feel unsafe, and there’s no guarantee the photographer will arrive on time.
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            className="max-w-md w-full rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] backdrop-blur-xl border border-white/30 p-6 md:mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block rounded-md px-4 py-2 bg-[#F6D9FF] font-semibold text-black mb-4">
              Solution
            </div>
            <p className="text-base leading-relaxed">
              SnapHire helps users find photographers with clear profiles, portfolios, and pricing. Users can easily choose a schedule, make secure payments, and communicate directly through chat. The app also includes ratings & reviews, along with a dashboard for photographers to manage bookings.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}