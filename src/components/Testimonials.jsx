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
    text: "Pinch Jeera Masala is a revelation! It has a perfect fizz combined with authentic spices that takes me back to my roots in Maharashtra. Unlike other sweet soda options, this has a rich, roasted cumin flavor that feels premium and clean.",
  },
  {
    id: 2,
    initials: 'VK',
    name: 'Vikram Kadam',
    role: 'F&B Restaurant Owner',
    rating: 5,
    text: "We started stocking Pinch Beverages at our upscale diner in Pune and the response has been phenomenal. Our customers love the Mojito and Mango flavors. It adds a sophisticated Indian flair to our beverage menu that guests thoroughly enjoy.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-soft py-24 border-b border-border select-text"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-text">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.25em]">
            Reviews
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-brown select-text">
            Our customer feedback
          </h2>
        </div>

        {/* 2-Column Testimonial Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="relative p-8 md:p-10 rounded-3xl bg-cream border border-border shadow-[0_15px_30px_rgba(61,32,0,0.015)] flex flex-col justify-between select-text hover:border-gold/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Mark Background Decoration */}
              <div className="absolute top-6 right-8 font-heading italic text-6xl md:text-8xl text-gold/15 select-none pointer-events-none">
                “
              </div>

              <div>
                {/* Stars Rating */}
                <div className="flex items-center space-x-1 mb-6 text-gold select-none">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-sm md:text-base text-text leading-relaxed italic mb-8 select-text">
                  "{item.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center space-x-4 border-t border-border/60 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-accent text-gold flex items-center justify-center font-heading italic font-bold text-sm select-none border border-gold/10">
                  {item.initials}
                </div>
                <div className="flex flex-col select-text">
                  <span className="font-heading italic font-bold text-brown text-base select-text">
                    {item.name}
                  </span>
                  <span className="font-body text-xs text-muted uppercase tracking-wider mt-0.5 select-text">
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
