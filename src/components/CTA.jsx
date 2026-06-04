import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export default function CTA() {
  return (
    <section className="bg-soft py-16 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="relative bg-brown rounded-2xl overflow-hidden"
        >
          {/* Subtle background texture */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-[-5%] top-[-20%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute left-[-5%] bottom-[-20%] w-[300px] h-[300px] bg-gold/3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 px-6 sm:px-16 py-12 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
            {/* Left text */}
            <div className="flex flex-col space-y-4 text-center lg:text-left max-w-lg">
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-cream leading-[1.12]">
                Ready to experience the finest Indian fizz?
              </h2>
              <p className="font-body text-[14px] text-cream/35 leading-relaxed">
                Order your first pack today and taste what thousands of customers are already enjoying.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 bg-cream text-brown font-body text-[12px] font-semibold tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-gold hover:text-cream select-none w-full sm:w-auto"
              >
                <span>Shop Now</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#discover"
                className="inline-flex items-center justify-center px-8 py-4 font-body text-[12px] font-medium text-cream/50 hover:text-cream uppercase tracking-wider transition-colors duration-300 select-none w-full sm:w-auto"
              >
                Our Story →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
