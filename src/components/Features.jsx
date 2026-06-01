import React from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, scaleIn } from '../utils/animations';

const featuresData = [
  {
    id: 1,
    title: 'Natural Ingredients',
    description: 'Brewed with raw, carefully selected cumin seeds, fresh lemons, and organic herbs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Global Reach',
    description: 'Pinch Beverage Co. is an international player, catering to Middle East & Dubai markets.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-cream py-24 border-b border-border select-text"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16 text-center lg:text-left select-text">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.25em]">
            Why Choose Pinch
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-brown select-text">
            Pinch made easy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: 2x2 Feature Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="group p-8 rounded-3xl glass-card bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_15px_35px_rgba(201,149,42,0.06)] flex flex-col justify-between select-text"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-accent text-gold flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-gold group-hover:text-cream">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-brown group-hover:text-gold transition-colors duration-300 select-text">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-3 font-body text-xs md:text-sm text-muted leading-relaxed select-text">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Centered Bottle with concentric rings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={scaleIn}
            className="lg:col-span-5 relative flex justify-center items-center h-[400px] select-none"
          >
            {/* Concentric rings pulse animations */}
            <div className="absolute w-[240px] h-[240px] border border-gold/10 rounded-full animate-ring-pulse"></div>
            <div className="absolute w-[340px] h-[340px] border border-gold/5 rounded-full animate-ring-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Concentric ring highlights */}
            <div className="absolute w-[180px] h-[180px] bg-accent/35 rounded-full blur-xl animate-ring-pulse"></div>

            {/* Glowing gold dot center */}
            <div className="absolute w-2 h-2 bg-gold rounded-full"></div>

            {/* Centered Pinch Bottle rotating and floating */}
            <div className="relative z-10 w-[180px] sm:w-[220px] h-auto animate-float">
              <img
                src="/pinchBottle.png"
                alt="Pinch Jeera Bottle Core"
                className="w-full h-auto object-contain select-none transition-transform duration-700 hover:rotate-12"
                style={{ filter: 'drop-shadow(0 15px 30px rgba(201,149,42,0.18))' }}
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
