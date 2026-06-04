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
    <section id="discover" className="bg-cream py-16 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideInLeft}
            className="flex flex-col space-y-6"
          >
            <span className="font-body text-[11px] uppercase tracking-[0.25em] font-medium text-muted">
              Our Heritage
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.12] text-brown">
              Discover the Best Indian Carbonated Drinks
            </h2>

            <p className="font-body text-[14px] text-muted leading-[1.8]">
              Crafted in Jalgaon, Maharashtra, Pinch Beverages blends local heritage with state-of-the-art carbonation. We create drinks that are crisp, bold, and bursting with authentic flavours representing India's culinary tapestry.
            </p>

            <p className="font-body text-[14px] text-muted leading-[1.8]">
              Each recipe is curated under strict quality standards using natural ingredients, bringing you a premium carbonated experience rooted in tradition.
            </p>

            {/* Learn More */}
            <div className="pt-2">
              <a
                href="#features"
                className="inline-flex items-center space-x-2 font-body text-[12px] font-semibold text-brown uppercase tracking-wider group select-none hover:text-gold transition-colors duration-300"
              >
                <span>Learn More</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideInRight}
            className="relative flex justify-center items-center select-none"
          >
            {/* Video */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-soft rounded-2xl overflow-hidden border border-border group">
              <video
                ref={videoRef}
                src="/brand-showcase.mp4"
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/20 via-transparent to-transparent pointer-events-none"></div>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-brown hover:text-gold transition-all duration-300 hover:scale-105 z-20"
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Floating detail card */}
            <div className="absolute -bottom-5 -left-4 z-20 hidden sm:flex flex-col bg-white border border-border p-4 rounded-xl shadow-sm animate-float-delayed select-none">
              <span className="font-heading font-bold text-brown text-sm">100% Natural</span>
              <span className="font-body text-[9px] text-muted uppercase tracking-wider mt-1">
                Preservative Free
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
