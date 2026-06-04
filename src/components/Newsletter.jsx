import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, fadeUp } from '../utils/animations';

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
    <section id="newsletter" className="bg-brown py-16 sm:py-28 relative overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[5%] bottom-[-20%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute right-[10%] top-[-10%] w-[300px] h-[300px] bg-gold/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="flex flex-col items-center space-y-6"
          >
            <span className="font-body text-[11px] uppercase tracking-[0.25em] font-medium text-gold/70">
              Stay Refreshed
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.12] text-cream">
              Get 25% off your first order
            </h2>

            <p className="font-body text-[14px] text-cream/40 leading-relaxed max-w-md">
              Subscribe to receive updates on new flavours, seasonal releases, and exclusive member discounts.
            </p>

            {/* Email form */}
            <form
              onSubmit={handleSubscribe}
              className="pt-4 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-cream/5 border border-cream/10 text-cream placeholder-cream/25 rounded-full focus:outline-none focus:border-cream/30 transition-all duration-300 font-body text-[13px]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 bg-cream text-brown font-body text-[11px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-gold hover:text-cream select-none whitespace-nowrap"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>

            <p className="font-body text-[10px] text-cream/20 pt-2">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
