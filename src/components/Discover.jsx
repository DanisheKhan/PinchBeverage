import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../utils/animations';

export default function Discover() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="discover"
      className="bg-cream py-24 border-b border-border select-text"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
            className="flex flex-col space-y-6 select-text"
          >
            <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.25em]">
              Our Heritage
            </span>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-brown select-text">
              Discover the Best Indian Carbonated Drinks
            </h2>

            <p className="font-body text-sm md:text-base text-muted leading-relaxed select-text">
              Crafted in Jalgaon, Maharashtra, Pinch Beverages blends local heritage with state-of-the-art carbonation. We pride ourselves on creating drinks that are crisp, bold, and bursting with authentic flavours that represent the culinary tapestry of India.
            </p>

            <p className="font-body text-sm md:text-base text-muted leading-relaxed select-text">
              Each recipe is curated under strict quality standards using natural ingredients, bringing you a premium carbonated experience that respects traditional culinary roots while setting new heights of beverage luxury.
            </p>

            {/* Learn More slide-hover link */}
            <div className="pt-4">
              <a
                href="#features"
                className="inline-flex items-center space-x-2 font-body text-sm font-bold text-gold uppercase tracking-wider group select-none"
              >
                <span>Learn More</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transform transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Video Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInRight}
            className="relative flex justify-center items-center select-none"
          >
            {/* Radial Backglow */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-accent/40 rounded-full blur-3xl z-0 animate-ring-pulse"></div>

            {/* Video container with thick luxury gold border */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] sm:aspect-square bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(201,149,42,0.15)] border-4 border-accent p-1.5 group select-none">
              <video
                ref={videoRef}
                src="/brand-showcase.mp4"
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-103"
              />

              {/* Muted video filter overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 via-transparent to-transparent pointer-events-none rounded-[18px]"></div>

              {/* Play / Pause floating controller overlay */}
              <button
                onClick={togglePlay}
                className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-cream/90 backdrop-blur border border-border flex items-center justify-center text-brown hover:text-gold shadow-lg transition-all duration-300 hover:scale-105 z-25 active:scale-95"
              >
                {isPlaying ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-brown text-cream border border-brown/50 px-4 py-1.5 rounded-full">
                <span className="font-body text-[9px] uppercase tracking-[0.2em] font-bold text-gold">
                  Authentic Fizzy Sip
                </span>
              </div>
            </div>

            {/* Minor overlapping elements for depth */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden sm:block p-4 glass-card rounded-2xl animate-float-delayed shadow-xl border border-border select-none">
              <span className="font-heading italic text-gold font-bold text-sm block">100% Raw Ingredients</span>
              <span className="font-body text-[9px] text-muted uppercase tracking-wider mt-1 block">Preservative Free</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
