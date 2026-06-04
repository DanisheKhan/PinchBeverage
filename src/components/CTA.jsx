import React from 'react';
import { motion } from 'framer-motion';

const dots = [
  { x: '8%',  y: '20%', size: 3,   delay: 0 },
  { x: '18%', y: '70%', size: 2,   delay: 1 },
  { x: '25%', y: '40%', size: 4,   delay: 2 },
  { x: '72%', y: '15%', size: 2.5, delay: 0.5 },
  { x: '82%', y: '65%', size: 3.5, delay: 1.5 },
  { x: '92%', y: '35%', size: 2,   delay: 3 },
  { x: '55%', y: '80%', size: 3,   delay: 2.5 },
  { x: '45%', y: '12%', size: 2,   delay: 1.8 },
];

const dotClasses = ['dot-float-1','dot-float-2','dot-float-3','dot-float-4','dot-float-5','dot-float-6','dot-float-1','dot-float-3'];

const words = "Ready to experience the finest Indian fizz?".split(' ');

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function CTA() {
  return (
    <section className="bg-soft py-16 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-brown rounded-2xl overflow-hidden"
        >
          {/* Floating ambient dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {dots.map((dot, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gold/25 ${dotClasses[i]}`}
                style={{
                  left: dot.x,
                  top: dot.y,
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  animationDelay: `${dot.delay}s`,
                }}
              />
            ))}

            {/* Larger ambient blobs */}
            <div className="absolute right-[-5%] top-[-20%] w-[300px] h-[300px] bg-gold/4 rounded-full blur-3xl" />
            <div className="absolute left-[-5%] bottom-[-20%] w-[250px] h-[250px] bg-gold/3 rounded-full blur-3xl" />

            {/* Decorative orbit ring */}
            <div className="absolute right-16 top-1/2 -translate-y-1/2 animate-orbit-reverse opacity-10 hidden lg:block">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle cx="90" cy="90" r="88" fill="none" stroke="rgba(250,250,247,0.5)" strokeWidth="1" strokeDasharray="4 8" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 px-6 sm:px-16 py-12 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
            {/* Left text with split-word reveal */}
            <div className="flex flex-col space-y-4 text-center lg:text-left max-w-lg">
              <motion.h2
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-heading font-bold text-2xl sm:text-4xl text-cream leading-[1.12] flex flex-wrap gap-x-3 justify-center lg:justify-start"
              >
                {words.map((word, i) => (
                  <motion.span key={i} variants={wordItem} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="font-body text-[13px] text-cream/35 leading-relaxed"
              >
                Order your first pack today and taste what thousands of customers are already enjoying.
              </motion.p>
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-cream text-brown font-body text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 hover:bg-gold hover:text-cream select-none w-full sm:w-auto"
              >
                <span>Shop Now</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#discover"
                className="inline-flex items-center justify-center px-8 py-4 font-body text-[11px] font-medium text-cream/40 hover:text-cream uppercase tracking-[0.12em] transition-colors duration-300 select-none w-full sm:w-auto"
              >
                Our Story →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
