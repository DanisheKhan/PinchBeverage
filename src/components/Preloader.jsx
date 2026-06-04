import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Count from 0 to 100 over ~1.6s
    let frame = 0;
    const totalFrames = 80;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * 100), 100));
      if (frame >= totalFrames) clearInterval(interval);
    }, 20);

    // Begin exit after 1.8s
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1800);

    // Remove from DOM after curtain finishes
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2700);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none">
      {/* Main curtain panel */}
      <motion.div
        className="absolute inset-0 bg-cream flex flex-col items-center justify-center"
        animate={exiting ? { y: '-100%' } : { y: '0%' }}
        transition={exiting ? { duration: 0.9, ease: [0.76, 0, 0.24, 1] } : {}}
      >
        {/* Brand wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col items-center mb-12"
        >
          <span className="font-heading italic font-bold text-5xl md:text-7xl text-brown tracking-tight leading-none">
            Pinch
          </span>
          <span className="font-body text-[9px] uppercase tracking-[0.4em] text-muted mt-3">
            Beverage Co.
          </span>
        </motion.div>

        {/* Large counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-end space-x-1"
        >
          <span
            className="font-heading font-bold tabular-nums leading-none text-brown"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-body text-muted text-xl mb-2">%</span>
        </motion.div>

        {/* Progress track */}
        <div className="mt-8 w-40 h-px bg-border overflow-hidden">
          <div
            className="h-full bg-brown origin-left transition-all duration-75"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
      </motion.div>

      {/* Second curtain layer — dark accent overlay that exits slightly later */}
      <motion.div
        className="absolute inset-0 bg-brown"
        initial={{ y: '100%' }}
        animate={exiting ? { y: '-100%' } : { y: '100%' }}
        transition={exiting ? { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.08 } : {}}
      />
    </div>
  );
}
