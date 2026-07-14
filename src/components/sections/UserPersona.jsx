'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function UserPersona() {
  const personas = [
    {
      name: 'Brian Julius',
      role: 'Photographer',
      imageSrc: '/images/persona/brian-julius.png',
      goals:
        'Get consistent clients and manage bookings more efficiently.',
      expectations:
        'Wants a platform to showcase portfolio, manage schedules, and receive bookings automatically.',
      painPoints:
        'Manual booking is inefficient. Frequently answers the same questions about pricing and schedule. Hard to manage multiple clients.',
    },
    {
      name: 'Uluthando',
      role: 'Mahasiswa',
      imageSrc: '/images/persona/uluthando.png',
      goals:
        'Find a suitable photographer quickly without a complicated process and within a limited budget.',
      expectations:
        'Wants an easy way to explore photographers, see clear pricing, and book instantly without hassle.',
      painPoints:
        'Confused choosing photographers due to unclear portfolios. Prices often change after booking, and availability is uncertain.',
    },
  ];

  return (
    <section className="relative w-full bg-[#EEF2FF] py-24 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-[#C4D8FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#C4D8FF]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl font-serif font-normal text-gray-900 mb-16">
          User <span className="text-[#E98CFF]">Persona</span>
        </h2>

        {/* Personas Container */}
        <div className="flex flex-col gap-12">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="rounded-[32px] bg-gradient-to-br from-[#EEF2FF] to-[#DCE7FF] backdrop-blur-xl border border-white/30 p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
                {/* Left: Profile Image */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="w-full aspect-[5/7] md:w-[300px] md:h-[420px] rounded-[32px] overflow-hidden bg-[#E8E5FF]/50 backdrop-blur-sm border border-white/20 relative">
                    <Image
                      src={persona.imageSrc}
                      alt={persona.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-4xl text-black">{persona.name}</h3>
                    <p className="text-gray-500">{persona.role}</p>
                  </div>
                </div>

                {/* Right: Info Cards */}
                <div className="md:col-span-7 flex flex-col gap-6">
                  {/* Top Row: Goals + Expectations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-gradient-to-br from-[#E8E5FF]/70 via-[#EEF2FF] to-[#E8E5FF]/70 backdrop-blur-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Goals & Motivation</h4>
                      <p className="text-sm leading-relaxed">{persona.goals}</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-[#E8E5FF]/70 via-[#EEF2FF] to-[#E8E5FF]/70 backdrop-blur-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Expectations</h4>
                      <p className="text-sm leading-relaxed">{persona.expectations}</p>
                    </div>
                  </div>

                  {/* Bottom: Pain Points */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#EEF2FF] via-[#E8E5FF]/70 to-[#EEF2FF] backdrop-blur-xl p-6">
                    <h4 className="font-semibold text-lg mb-3">Pain Points</h4>
                    <p className="text-sm leading-relaxed">{persona.painPoints}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
