import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';

const faqData = [
  {
    id: 1,
    question: 'What makes Pinch beverages different from other sodas?',
    answer: 'Pinch uses 100% natural ingredients — real cumin seeds, fresh citrus extracts, and organic herbs. No artificial flavours, colours, or preservatives. Each recipe is crafted to celebrate authentic Indian taste profiles with premium carbonation.',
  },
  {
    id: 2,
    question: 'Where are Pinch beverages manufactured?',
    answer: 'All Pinch beverages are crafted in our state-of-the-art facility in Jalgaon, Maharashtra, India. We follow strict FSSAI and BIS quality standards to ensure every bottle meets our premium quality benchmarks.',
  },
  {
    id: 3,
    question: 'Do you offer bulk or wholesale orders?',
    answer: 'Yes, we offer wholesale pricing for retailers, restaurants, and corporate clients. We also provide bespoke corporate gifting packages. Contact us through the newsletter section or reach out to our sales team directly.',
  },
  {
    id: 4,
    question: 'Is Pinch available outside India?',
    answer: 'We currently export to select Middle East and Dubai markets, with plans to expand into Southeast Asia and the UK in 2026. Sign up for our newsletter to stay updated on international availability.',
  },
  {
    id: 5,
    question: 'Are Pinch bottles recyclable?',
    answer: 'Absolutely. We use 100% recyclable glass and premium PET bottles. Our packaging is designed to minimize environmental impact while preserving the freshness and carbonation of our beverages.',
  },
  {
    id: 6,
    question: 'How should I store Pinch beverages?',
    answer: 'For the best experience, store bottles in a cool, dry place away from direct sunlight. Refrigerate before serving for optimal fizz and flavour. Once opened, consume within 24 hours.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-cream py-28">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.25em] font-medium text-muted">
            Questions
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-brown">
            Frequently Asked
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="flex flex-col"
        >
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="border-b border-border/60"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-heading font-bold text-[15px] sm:text-base text-brown group-hover:text-gold transition-colors duration-300 pr-4">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                    openId === item.id
                      ? 'bg-brown border-brown rotate-45'
                      : 'bg-transparent group-hover:border-brown'
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={openId === item.id ? '#FAFAF7' : 'currentColor'}
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-[13px] text-muted leading-[1.8] pb-6 pr-12">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
