import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';

const testimonialsData = [
  {
    id: 1,
    initials: 'SA',
    name: 'Shreya Amin',
    role: 'Connoisseur & Blogger',
    rating: 5,
    text: "Pinch Jeera Masala is a revelation! It has a perfect fizz combined with authentic spices that takes me back to my roots in Maharashtra. This has a rich, roasted cumin flavor that feels premium and clean.",
  },
  {
    id: 2,
    initials: 'VK',
    name: 'Vikram Kadam',
    role: 'F&B Restaurant Owner',
    rating: 5,
    text: "We started stocking Pinch Beverages at our upscale diner in Pune and the response has been phenomenal. Our customers love the Mojito and Mango flavors. It adds a sophisticated Indian flair to our menu.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-28">
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
            Reviews
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-brown">
            What people say
          </h2>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="relative p-8 md:p-10 rounded-2xl bg-white border border-border/60 flex flex-col justify-between hover:border-border hover:shadow-[0_8px_24px_rgba(26,18,7,0.04)] transition-all duration-500"
            >
              {/* Quote decoration */}
              <div className="absolute top-6 right-8 font-heading text-6xl text-border/50 select-none pointer-events-none leading-none">
                "
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-0.5 mb-6 text-gold select-none">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-[14px] text-text leading-[1.8] mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-border/40 mt-auto">
                <div className="w-10 h-10 rounded-full bg-soft text-muted flex items-center justify-center font-body text-[11px] font-semibold select-none">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-brown text-[14px]">
                    {item.name}
                  </span>
                  <span className="font-body text-[10px] text-muted uppercase tracking-wider mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
