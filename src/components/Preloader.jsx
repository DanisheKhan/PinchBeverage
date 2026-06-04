import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 80;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * 100), 100));
      if (frame >= totalFrames) clearInterval(interval);
    }, 20);

    const exitTimer = setTimeout(() => setExiting(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2700);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none">
      {/* Main cream panel — slides up on exit */}
      <motion.div
        className="absolute inset-0 bg-cream flex flex-col"
        animate={exiting ? { y: '-100%' } : { y: '0%' }}
        transition={exiting ? { duration: 0.9, ease: [0.76, 0, 0.24, 1] } : {}}
      >
        {/* Top-left: wordmark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute top-8 left-8 sm:top-10 sm:left-10"
        >
          <span className="font-heading italic font-bold text-xl text-brown tracking-tight">
            Pinch
          </span>
        </motion.div>

        {/* Bottom-right: tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10"
        >
          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-muted">
            Craft Beverage Co.
          </span>
        </motion.div>

        {/* Bottom-left: counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-7 left-8 sm:bottom-9 sm:left-10 flex items-baseline gap-1"
        >
          <span className="font-heading font-bold tabular-nums text-brown text-[13px] tracking-tight">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-body text-muted text-[9px]">%</span>
        </motion.div>

        {/* Centre: large editorial brand statement */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-center"
          >
            {/* Big serif wordmark — editorial size */}
            <p className="font-heading italic font-bold text-brown leading-none tracking-tight"
               style={{ fontSize: 'clamp(4.5rem, 14vw, 10rem)' }}>
              Pinch
            </p>

            {/* Thin divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="w-full h-px bg-border origin-left mt-5"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="font-body text-[10px] uppercase tracking-[0.35em] text-muted mt-4"
            >
              Authentic Indian Fizz
            </motion.p>
          </motion.div>
        </div>

        {/* Progress bar — full width, bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
          <div
            className="h-full bg-brown origin-left transition-transform duration-75 ease-linear"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
      </motion.div>

      {/* Dark accent curtain — exits slightly after */}
      <motion.div
        className="absolute inset-0 bg-brown"
        initial={{ y: '100%' }}
        animate={exiting ? { y: '-100%' } : { y: '100%' }}
        transition={exiting ? { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.08 } : {}}
      />
    </div>
  );
}
