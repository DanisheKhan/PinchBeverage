import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const btnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.9 });

      tl.fromTo(
        '.hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-title-line',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtext',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-btn',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          '.hero-meta',
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        );

      // Bottle fade-in with subtle rise
      gsap.fromTo(
        '.hero-bottle-wrap',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, delay: 2.1, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Gentle magnetic effect
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
    btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseEnter = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transition = 'none';
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-cream pt-24 pb-20 flex items-center overflow-hidden"
    >
      {/* Soft background accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[10%] w-[50vw] h-[50vw] radial-glow rounded-full opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full z-10">

        {/* Left — Text */}
        <div className="flex flex-col space-y-7">

          {/* Label */}
          <div className="hero-label opacity-0">
            <span className="font-body text-[11px] uppercase tracking-[0.2em] font-medium text-muted">
              Paris Award Winner · Est. Jalgaon
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-bold text-[32px] sm:text-5xl lg:text-[52px] leading-[1.08] text-brown">
            <span className="hero-title-line block">Enhance Your</span>
            <span className="hero-title-line block">
              <em className="text-gold font-normal not-italic">Jeera</em> Experience
            </span>
            <span className="hero-title-line block">With Pinch</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext opacity-0 font-body text-[15px] text-muted leading-relaxed max-w-md">
            Carefully crafted Indian-inspired carbonated drinks that elevate every sip with authentic flavour.
          </p>

          {/* CTA */}
          <div className="hero-btn opacity-0 flex items-center space-x-6">
            <a
              ref={btnRef}
              href="#products"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-brown text-cream font-body text-[12px] font-semibold tracking-wider uppercase rounded-full transition-colors duration-300 hover:bg-gold select-none"
            >
              <span>Shop Now</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#discover"
              className="font-body text-[12px] font-medium text-muted hover:text-brown uppercase tracking-wider transition-colors duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Meta row */}
          <div className="hero-meta opacity-0 flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-brown leading-none">19K+</span>
              <span className="font-body text-[10px] text-muted uppercase tracking-wider mt-1">Customers</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-brown leading-none">13+</span>
              <span className="font-body text-[10px] text-muted uppercase tracking-wider mt-1">Flavours</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-brown leading-none">4.9</span>
              <span className="font-body text-[10px] text-muted uppercase tracking-wider mt-1">Rating</span>
            </div>
          </div>
        </div>

        {/* Right — Product */}
        <div className="relative flex justify-center items-center h-[320px] sm:h-[420px] lg:h-[560px] select-none">
          {/* Soft circular accent */}
          <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] bg-accent/50 rounded-full blur-3xl z-0 animate-breathe"></div>

          {/* Bottle */}
          <div className="hero-bottle-wrap opacity-0 z-10 w-[160px] sm:w-[220px] lg:w-[260px] h-auto pointer-events-none select-none">
            <img
              src="/pinchBottle.png"
              alt="Pinch Jeera Masala Premium Bottle"
              className="w-full h-auto object-contain animate-float"
              style={{ filter: 'drop-shadow(0 25px 40px rgba(26, 18, 7, 0.12))' }}
              loading="eager"
            />
          </div>

          {/* Small floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-16 right-8 sm:right-12 z-20 bg-white border border-border px-4 py-2 rounded-full shadow-sm animate-float-delayed select-none"
          >
            <span className="font-body text-[10px] font-semibold text-muted uppercase tracking-wider">
              Award Winner ✦
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
