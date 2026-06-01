import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';

const steps = [
  {
    number: '01',
    title: 'Source',
    description: 'We hand-select the finest cumin seeds, citrus fruits, and organic herbs from trusted Indian farms.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2c5.523 0 10 4.477 10 10-5.523 0-10-4.477-10-10Z" />
        <path d="M2 12c0 5.523 4.477 10 10 10 0-5.523-4.477-10-10-10Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Blend',
    description: 'Our master brewers craft each recipe using traditional techniques refined over years of experimentation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 2v4M16 2v4M6 6h12a2 2 0 0 1 2 2v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V8a2 2 0 0 1 2-2z" />
        <path d="M10 16v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Carbonate',
    description: 'State-of-the-art carbonation preserves natural flavour while delivering the perfect effervescent fizz.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="17" cy="8" r="1" />
        <circle cx="17" cy="16" r="1" />
        <circle cx="12" cy="19" r="1" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="7" cy="8" r="1" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Each bottle is quality-sealed and shipped fresh to ensure maximum fizz and flavour in every sip.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h1" />
        <path d="M15 18h6a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center max-w-lg mx-auto mb-20"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.25em] font-medium text-muted">
            The Process
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-brown">
            From Farm to Fizz
          </h2>
          <p className="mt-4 font-body text-[13px] text-muted leading-relaxed">
            Every bottle of Pinch follows a meticulous four-step journey to ensure perfection in every sip.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="group bg-cream p-8 flex flex-col items-start hover:bg-white transition-colors duration-500"
            >
              {/* Step number */}
              <span className="font-body text-[10px] font-semibold text-muted/50 uppercase tracking-widest mb-6">
                Step {step.number}
              </span>

              {/* Icon */}
              <div className="text-muted mb-5 transition-colors duration-500 group-hover:text-brown">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg text-brown mb-2 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[12px] text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
