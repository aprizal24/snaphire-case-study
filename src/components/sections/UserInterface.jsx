'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// UI categories data
const uiCategories = [
  {
    id: 'authentication',
    title: 'Authentication',
    description: 'Secure and simple account creation for both clients and photographers.',
    imageSrc: '/images/ui/authentication.png',
    imageAlt: 'SnapHire Authentication UI'
  },
  {
    id: 'explore-discovery',
    title: 'Explore & Discovery',
    description: 'Browse featured photographers directly from the home screen and explore detailed profiles to find the right match for every occasion.',
    imageSrc: '/images/ui/explore-discovery.png',
    imageAlt: 'SnapHire Explore & Discovery UI'
  },
  {
    id: 'booking-experience',
    title: 'Booking Experience',
    description: 'Schedule sessions, confirm bookings, and complete secure payments through a seamless booking process.',
    imageSrc: '/images/ui/booking-experience.png',
    imageAlt: 'SnapHire Booking Experience UI'
  },
  {
    id: 'messaging',
    title: 'Messaging',
    description: 'Communicate directly with photographers to discuss requirements, share details, and stay updated throughout the booking.',
    imageSrc: '/images/ui/messaging.png',
    imageAlt: 'SnapHire Messaging UI'
  },
  {
    id: 'photographer-dashboard',
    title: 'Photographer Dashboard',
    description: 'Manage bookings, portfolios, schedules, and client requests efficiently from a centralized dashboard.',
    imageSrc: '/images/ui/photographer-dashboard.png',
    imageAlt: 'SnapHire Photographer Dashboard UI'
  }
];

export default function UserInterface() {
  return (
    <section className="relative w-full bg-[#EEF2FF] py-24 overflow-hidden">
      {/* Background decorative ellipse */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[1200px] h-[750px] rounded-full bg-[#EEF2FF] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.h2 
          className="text-5xl font-serif font-normal text-gray-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          User <span className="text-[#F08CFF]">Interface</span>
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-600 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Explore the main user experience across authentication, client, and photographer interfaces.
        </motion.p>

        {/* Categories */}
        <div className="flex flex-col gap-20 md:gap-32">
          {uiCategories.map((category, index) => {
            const isAlternate = index % 2 === 1;
            return (
              <motion.div
                key={category.id}
                className="w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
              >
                <div className={`flex flex-col ${isAlternate ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                  {/* Text Column (40-45%) */}
                  <div className="w-full md:w-2/5 flex flex-col justify-center">
                    {/* Category Header */}
                    <div className="mb-6">
                      <motion.div 
                        className={`flex items-center gap-3 mb-4`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        {isAlternate ? (
                          <>
                            {/* Phone on left: Dot → Line → Title */}
                            <div className="w-4 h-4 rounded-full bg-[#F08CFF] flex-shrink-0" />
                            {/* Decorative line */}
                            <div className="flex-1 h-px bg-gray-300 relative overflow-hidden">
                              <motion.div 
                                className="absolute left-0 top-0 bottom-0 bg-[#F08CFF]"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                              />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{category.title}</h3>
                          </>
                        ) : (
                          <>
                            {/* Phone on right: Title → Line → Dot */}
                            <h3 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{category.title}</h3>
                            {/* Decorative line */}
                            <div className="flex-1 h-px bg-gray-300 relative overflow-hidden">
                              <motion.div 
                                className="absolute left-0 top-0 bottom-0 bg-[#F08CFF]"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                              />
                            </div>
                            <div className="w-4 h-4 rounded-full bg-[#F08CFF] flex-shrink-0" />
                          </>
                        )}
                      </motion.div>
                      <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                      >
                        {category.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Image Column (55-60%) */}
                  <div className="w-full md:w-3/5">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                    >
                      <Image
                        src={category.imageSrc}
                        alt={category.imageAlt}
                        width={1440}
                        height={800}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                        className="w-full h-auto object-contain"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        priority={index === 0}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Note */}
        <motion.div 
          className="mt-24 pt-10 border-t border-gray-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">29+ High-Fidelity Screens</h3>
          <p className="text-lg text-gray-600">
            More screens were designed to ensure a complete and seamless user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
