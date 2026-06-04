import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Clip-path text reveal variants
const lineReveal = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: '0%',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.9 + i * 0.13,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 2.1 + i * 0.1,
    },
  }),
};

export default function Hero() {
  const containerRef = useRef(null);
  const bottleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bottle subtle parallax on scroll
      if (bottleRef.current) {
        gsap.to(bottleRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
    btn.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseEnter = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transition = 'none';
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] bg-cream flex items-center overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6 w-full z-10 pt-28 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">

        {/* ── Left — Text ── */}
        <div className="flex flex-col space-y-8">

          {/* Label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.28em] font-medium text-muted">
              Paris Award Winner&nbsp;&nbsp;·&nbsp;&nbsp;Est. Jalgaon
            </span>
          </motion.div>

          {/* Heading — clip-path reveal per line */}
          <h1 className="font-heading font-bold text-[36px] sm:text-[54px] lg:text-[62px] leading-[1.06] text-brown">
            {['Enhance Your', 'Jeera Experience', 'With Pinch'].map((line, i) => (
              <span key={line} className="text-reveal-wrap">
                <motion.span
                  className="text-reveal-line"
                  custom={i}
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                >
                  {i === 1 ? (
                    <>
                      <em className="text-gold font-normal not-italic">Jeera</em>
                      {' Experience'}
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-[14px] sm:text-[15px] text-muted leading-[1.85] max-w-[380px]"
          >
            Carefully crafted Indian-inspired carbonated drinks that elevate every sip with authentic flavour.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6"
          >
            <a
              ref={btnRef}
              href="#products"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brown text-cream font-body text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full transition-colors duration-300 hover:bg-gold select-none"
            >
              <span>Shop Now</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#discover"
              className="font-body text-[11px] font-medium text-muted hover:text-brown uppercase tracking-[0.12em] transition-colors duration-300"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats mini-row */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-2"
          >
            {[
              { val: '19K+', lbl: 'Customers' },
              { val: '13+', lbl: 'Flavours' },
              { val: '4.9', lbl: 'Rating' },
            ].map((s, i) => (
              <React.Fragment key={s.lbl}>
                {i > 0 && <div className="w-px h-7 bg-border hidden sm:block" />}
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[22px] text-brown leading-none">{s.val}</span>
                  <span className="font-body text-[9px] text-muted uppercase tracking-[0.18em] mt-1">{s.lbl}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ── Right — Bottle Visual ── */}
        <div className="relative flex justify-center items-center h-[280px] sm:h-[380px] lg:h-[580px] select-none">

          {/* Bottle */}
          <motion.div
            ref={bottleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[180px] sm:w-[220px] lg:w-[260px] h-auto"
          >
            <img
              src="/pinchBottle.png"
              alt="Pinch Jeera Masala Premium Bottle"
              className="w-full h-auto object-contain animate-float"
              style={{ filter: 'drop-shadow(0 12px 24px rgba(26, 18, 7, 0.18))' }}
              loading="eager"
            />
          </motion.div>

          {/* Floating badge — Award Winner (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-10 right-2 sm:right-10 z-20 hidden sm:block animate-float-delayed"
          >
            <div className="bg-white/90 backdrop-blur-sm border border-border/60 px-4 py-2.5 rounded-full shadow-sm">
              <span className="font-body text-[9px] font-semibold text-muted uppercase tracking-[0.15em]">
                Award Winner ✦
              </span>
            </div>
          </motion.div>

          {/* Floating badge — Natural */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 left-4 sm:left-2 z-20 hidden sm:block animate-float"
          >
            <div className="bg-brown/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm">
              <span className="font-body text-[9px] font-semibold text-cream/80 uppercase tracking-[0.15em]">
                100% Natural
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[9px] uppercase tracking-[0.25em] text-muted/60">Scroll</span>
        <div className="animate-scroll-bob">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted/50">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
