import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: 1,
    title: 'Natural Ingredients',
    description: 'Brewed with raw, carefully selected cumin seeds, fresh lemons, and organic herbs.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c5.523 0 10 4.477 10 10-5.523 0-10-4.477-10-10Z" />
        <path d="M12 2v20c0-5.523 4.477-10 10-10H2c5.523 0 10 4.477 10 10Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Eco Packaging',
    description: 'Committed to sustainability with 100% recyclable, light-shielded glass and premium PET.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 11h10v8H7z" />
        <path d="M12 2v5M5 7h14M10 21v-4M14 21v-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'FSSAI & BIS Certified',
    description: 'Accredited with Indian national safety and quality standard seals for pristine purity.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Global Reach',
    description: 'An international player, catering to Middle East & Dubai markets with premium Indian fizz.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20" />
      </svg>
    ),
  },
];

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Features() {
  return (
    <section id="features" className="bg-soft py-16 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 text-center"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.28em] font-medium text-muted">
            Why Choose Pinch
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-brown">
            Crafted with Care
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Feature Grid — clip-path card reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
                variants={cardReveal}
                className="group p-7 rounded-2xl bg-white border border-border/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(26,18,7,0.07)] hover:border-border flex flex-col cursor-default"
              >
                {/* Icon with rotating ring on hover */}
                <div className="relative w-10 h-10 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-soft text-muted flex items-center justify-center transition-all duration-500 group-hover:bg-brown group-hover:text-cream relative z-10">
                    {feature.icon}
                  </div>
                  {/* Rotating ring */}
                  <svg
                    className="absolute inset-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-orbit"
                    viewBox="0 0 40 40"
                  >
                    <circle
                      cx="20" cy="20" r="18"
                      fill="none"
                      stroke="rgba(184,134,11,0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-[15px] text-brown mb-2 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[12px] text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent bottom line */}
                <div className="mt-auto pt-5">
                  <div className="h-px w-0 bg-gold group-hover:w-full transition-all duration-600 ease-out" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Bottle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={scaleIn}
            className="lg:col-span-5 relative flex justify-center items-center h-[280px] sm:h-[380px] select-none"
          >
            {/* Glow */}
            <div className="absolute w-[260px] h-[260px] radial-glow-gold rounded-full opacity-60 animate-breathe" />

            {/* Outer orbit ring */}
            <div className="absolute w-[240px] h-[240px] animate-orbit opacity-30">
              <svg width="240" height="240" viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="118" fill="none" stroke="rgba(184,134,11,0.4)" strokeWidth="1" strokeDasharray="3 8" />
              </svg>
            </div>

            {/* Bottle */}
            <div className="relative z-10 w-[150px] sm:w-[190px] h-auto animate-float-slow">
              <img
                src="/pinchBottle.png"
                alt="Pinch Jeera Bottle"
                className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:rotate-3"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(26, 18, 7, 0.12))' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
