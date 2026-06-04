import React from 'react';
import { motion } from 'framer-motion';

const words = [
  'Jeera Masala',
  'Orange Sip',
  'Minty Mojito',
  'Alphonso Mango',
  'Premium Fizz',
  'Craft Brewed',
  'Jalgaon, MH',
  'Paris Award',
  'Natural Spices',
  'Eco Packaging',
];

export default function Marquee() {
  const separator = (
    <span className="mx-8 text-[12px]" style={{ color: 'rgba(26,18,7,0.4)' }}>✦</span>
  );

  const renderWords = () =>
    words.map((word, i) => (
      <span key={i} className="flex items-center whitespace-nowrap">
        <span className="font-heading text-[15px] sm:text-[18px] font-bold uppercase tracking-[0.25em]" style={{ color: '#1A1207' }}>
          {word}
        </span>
        {separator}
      </span>
    ));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-8 border-b border-border/40 overflow-hidden select-none relative"
    >
      {/* Marquee tracks */}
      <div className="marquee-container flex">
        <div className="marquee-track flex animate-marquee">
          {renderWords()}
        </div>
        <div className="marquee-track flex animate-marquee" aria-hidden="true">
          {renderWords()}
        </div>
      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          flex-shrink: 0;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}
