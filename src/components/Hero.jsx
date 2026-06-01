import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const btnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP Entrance Timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 }); // Wait for preloader to finish

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
      )
        .fromTo(
          '.hero-title .char-group',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power4.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-subtext',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-btn',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.3'
        )
        .fromTo(
          '.hero-avatars',
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );

      // Spring drop-in animation for bottle
      gsap.fromTo(
        '.hero-bottle-wrap',
        { opacity: 0, y: -180, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.6, delay: 2.3, ease: 'bounce.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Magnetic Button Logic
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Apply dampening so it moves up to 8px maximum
    const offsetX = Math.min(Math.max(x * 0.25, -8), 8);
    const offsetY = Math.min(Math.max(y * 0.25, -8), 8);
    
    btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
    btn.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  const handleMouseEnter = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transition = 'none';
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-cream pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[60vw] h-[60vw] radial-glow rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Left Text Column */}
        <div className="flex flex-col space-y-8 select-text">
          {/* Label */}
          <div className="hero-badge opacity-0 inline-flex items-center self-start px-4 py-1.5 rounded-full border border-border bg-soft/50 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block animate-pulse"></span>
              <span>Paris Award Winner · Est. Jalgaon, MH</span>
            </span>
          </div>

          {/* Heading H1 */}
          <h1 className="hero-title font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] text-brown select-text">
            <span className="char-group inline-block">Enhance Your </span>{' '}
            <span className="char-group inline-block font-heading italic text-gold font-normal">Jeera</span>{' '}
            <span className="char-group inline-block">Experience </span>
            <span className="char-group inline-block">With Pinch</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext opacity-0 font-body text-base md:text-lg text-muted max-w-xl leading-relaxed select-text">
            Enhance your refreshment with carefully crafted Indian-inspired carbonated drinks that elevate every sip.
          </p>

          {/* Magnetic CTA button */}
          <div className="hero-btn opacity-0 inline-block self-start">
            <a
              ref={btnRef}
              href="#products"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gold hover:bg-brown text-cream font-body text-sm font-bold tracking-wider uppercase rounded-full shadow-[0_10px_25px_rgba(201,149,42,0.18)] transition-colors duration-300 transform select-none"
            >
              <span>Shop Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Customer Row */}
          <div className="hero-avatars opacity-0 flex items-center space-x-4 border-t border-border/80 pt-6 max-w-md">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-cream bg-accent flex items-center justify-center font-body text-xs font-bold text-gold">
                AK
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-cream bg-accent flex items-center justify-center font-body text-xs font-bold text-gold">
                RJ
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-cream bg-accent flex items-center justify-center font-body text-xs font-bold text-gold">
                MN
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-cream bg-gold text-cream flex items-center justify-center font-body text-xs font-bold">
                +
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading italic font-bold text-gold text-sm leading-none">19K+</span>
              <span className="font-body text-xs text-muted leading-tight mt-0.5">Happy Customers Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Product Image Column */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[600px] select-none">
          {/* Radial Aura Background */}
          <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] bg-accent/40 rounded-full blur-3xl z-0 animate-ring-pulse"></div>

          {/* Floating seeds background overlay (8 scattered dots) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[20%] left-[25%] w-3 h-2 bg-[#4A321A]/70 rounded-full rotate-45 animate-float-fast"></div>
            <div className="absolute top-[35%] right-[20%] w-2 h-4 bg-[#C9952A]/50 rounded-full -rotate-12 animate-float-delayed"></div>
            <div className="absolute bottom-[25%] left-[15%] w-2.5 h-3 bg-[#4A321A]/60 rounded-full rotate-12 animate-float"></div>
            <div className="absolute bottom-[40%] right-[15%] w-3 h-2 bg-[#C9952A]/80 rounded-full rotate-[110deg] animate-float-fast"></div>
            <div className="absolute top-[60%] left-[30%] w-2 h-2.5 bg-[#4A321A]/40 rounded-full rotate-[35deg] animate-float-delayed"></div>
            <div className="absolute top-[15%] right-[35%] w-3.5 h-1.5 bg-[#C9952A]/60 rounded-full -rotate-45 animate-float"></div>
            <div className="absolute bottom-[15%] right-[30%] w-2 h-3.5 bg-[#4A321A]/80 rounded-full rotate-[65deg] animate-float-fast"></div>
            <div className="absolute top-[45%] left-[10%] w-2.5 h-2 bg-[#C9952A]/50 rounded-full -rotate-[85deg] animate-float-delayed"></div>
          </div>

          {/* Floating badge top-right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: 'easeOut' }}
            className="absolute top-16 right-4 sm:right-10 z-20 shadow-xl bg-brown border border-brown/50 px-5 py-2.5 rounded-full flex items-center space-x-2 animate-float-delayed select-none"
          >
            <span className="text-cream text-xs font-body font-bold uppercase tracking-wider">
              Paris Award
            </span>
            <span className="text-gold text-sm">✦</span>
          </motion.div>

          {/* Floating card bottom-left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-16 left-4 sm:left-10 z-20 shadow-xl bg-cream/90 backdrop-blur border border-border p-4 rounded-2xl flex flex-col animate-float select-none"
          >
            <span className="font-heading italic text-gold font-bold text-lg leading-none">13+</span>
            <span className="font-body text-[10px] text-muted uppercase tracking-wider mt-1.5 font-bold">
              Bold Flavours
            </span>
          </motion.div>

          {/* Primary Bottle Graphic */}
          <div className="hero-bottle-wrap opacity-0 z-10 w-[240px] sm:w-[300px] h-auto pointer-events-none select-none">
            <img
              src="/pinchBottle.png"
              alt="Pinch Jeera Masala Premium Bottle"
              className="w-full h-auto object-contain animate-float animate-glow-pulse"
              style={{ filter: 'drop-shadow(0 20px 30px rgba(201, 149, 42, 0.25))' }}
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
