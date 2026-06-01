import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // 2 seconds total load and show
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-cream"
        >
          <div className="text-center relative">
            <svg
              width="300"
              height="100"
              viewBox="0 0 300 100"
              fill="none"
              stroke="#C9952A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-48 md:w-72 h-auto"
            >
              {/* Elegant custom typography representation of PINCH in classic outlines */}
              <motion.path
                d="M30 80 V 20 Q 50 20 50 35 Q 50 50 30 50"
                className="animate-draw"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M75 25 V 80"
                className="animate-draw"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.path
                d="M95 80 V 25 L 135 75 V 20"
                className="animate-draw"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M185 20 Q 155 20 155 50 Q 155 80 185 80"
                className="animate-draw"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.path
                d="M210 20 V 80 M 210 50 H 240 M 240 20 V 80"
                className="animate-draw"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 font-heading italic text-gold text-lg tracking-widest font-medium"
            >
              · Beverage Co. ·
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
