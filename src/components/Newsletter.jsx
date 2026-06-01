import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../utils/animations';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section
      id="newsletter"
      className="bg-brown py-24 relative overflow-hidden select-text text-cream"
    >
      {/* Background soft glowing highlights */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-[10%] bottom-0 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text and Form Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
            className="flex flex-col space-y-6 select-text"
          >
            <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.25em]">
              Stay Refreshed
            </span>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-cream select-text">
              Join in and get 25% OFF!
            </h2>

            <p className="font-body text-sm md:text-base text-muted/80 leading-relaxed select-text">
              Subscribe to the Pinch newsletter to receive updates on new flavours, seasonal Indian carbonated releases, and exclusive member discount campaigns direct to your inbox.
            </p>

            {/* Email form pill shape */}
            <form onSubmit={handleSubscribe} className="pt-4 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 bg-dark/70 border border-border/20 text-cream placeholder-muted rounded-full focus:outline-none focus:border-gold/80 transition-all font-body text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-cream text-brown hover:text-brown font-body text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-colors duration-300 select-none whitespace-nowrap active:scale-97"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
          </motion.div>

          {/* Right Silhouette Decorative Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInRight}
            className="relative flex justify-center items-center h-[350px] lg:h-[400px] select-none"
          >
            {/* Ambient gold glow */}
            <div className="absolute w-[260px] h-[260px] bg-gold/10 rounded-full blur-2xl z-0 animate-ring-pulse"></div>

            {/* Concentric rings */}
            <div className="absolute w-[200px] h-[200px] border border-gold/15 rounded-full animate-ring-pulse"></div>
            <div className="absolute w-[300px] h-[300px] border border-gold/5 rounded-full animate-ring-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Elegant SVG outline silhouette representing our beverage bottle */}
            <svg
              width="150"
              height="350"
              viewBox="0 0 100 230"
              fill="none"
              stroke="#C9952A"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              className="relative z-10 w-[120px] sm:w-[150px] h-auto opacity-70 animate-float"
            >
              {/* Bottle silhouette using similar proportions */}
              <path d="M 50 10 C 60 10, 62 15, 62 30 C 62 45, 75 75, 80 120 C 85 170, 80 220, 50 220 C 20 220, 15 170, 20 120 C 25 75, 38 45, 38 30 C 38 15, 40 10, 50 10 Z" />
              {/* Internal abstract liquid ripple details */}
              <path d="M 23 150 Q 50 160 77 150" strokeOpacity="0.2" />
              <path d="M 25 180 Q 50 190 75 180" strokeOpacity="0.1" />
              {/* Label area outline */}
              <rect x="23" y="100" width="54" height="40" rx="3" strokeWidth="1" strokeOpacity="0.3" />
              {/* Cap outline details */}
              <rect x="42" y="3" width="16" height="7" rx="1.5" strokeOpacity="0.5" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
