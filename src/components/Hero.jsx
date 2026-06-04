import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 20 },
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
  const btnRef = useRef(null);

  // Magnetic button — desktop only
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
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
      className="relative bg-cream overflow-hidden"
    >
      {/* ─────────────────────────────────────────
          MOBILE layout  (< lg)
          Stack: navbar gap → text block → bottle
      ───────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col pt-24 pb-10 px-6 min-h-[100svh]">

        {/* Text block */}
        <div className="flex flex-col space-y-5 flex-1 justify-center">

          {/* Label */}
          <motion.span
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-[10px] uppercase tracking-[0.28em] font-medium text-muted"
          >
            Paris Award Winner · Est. Jalgaon
          </motion.span>

          {/* Heading */}
          <h1 className="font-heading font-bold text-[34px] sm:text-[50px] leading-[1.08] text-brown">
            {['Enhance Your', 'Jeera Experience', 'With Pinch'].map((line, i) => (
              <span key={line} className="text-reveal-wrap">
                <motion.span
                  className="text-reveal-line"
                  custom={i} variants={lineReveal} initial="hidden" animate="visible"
                >
                  {i === 1 ? (
                    <><em className="text-gold font-normal not-italic">Jeera</em>{' Experience'}</>
                  ) : line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-[13px] text-muted leading-[1.8] max-w-[320px]"
          >
            Carefully crafted Indian-inspired carbonated drinks that elevate every sip with authentic flavour.
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-5"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brown text-cream font-body text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full transition-colors duration-300 hover:bg-gold select-none"
            >
              <span>Shop Now</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#discover" className="font-body text-[11px] font-medium text-muted uppercase tracking-[0.12em] transition-colors duration-300">
              Our Story
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-6 pt-1"
          >
            {[
              { val: '19K+', lbl: 'Customers' },
              { val: '13+', lbl: 'Flavours' },
              { val: '4.9', lbl: 'Rating' },
            ].map((s, i) => (
              <React.Fragment key={s.lbl}>
                {i > 0 && <div className="w-px h-6 bg-border" />}
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[20px] text-brown leading-none">{s.val}</span>
                  <span className="font-body text-[9px] text-muted uppercase tracking-[0.16em] mt-0.5">{s.lbl}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Bottle — sits below text, centred */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pt-8 pb-4 select-none"
        >
          <img
            src="/pinchBottle.png"
            alt="Pinch Jeera Masala Premium Bottle"
            className="w-[160px] sm:w-[200px] h-auto object-contain animate-float"
            style={{ filter: 'drop-shadow(0 10px 20px rgba(26, 18, 7, 0.16))' }}
            loading="eager"
          />
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────
          DESKTOP layout  (lg+)
          Two-column side-by-side
      ───────────────────────────────────────── */}
      <div className="hidden lg:grid max-w-6xl mx-auto px-6 w-full grid-cols-2 gap-12 items-center min-h-[100svh] pt-24 pb-20">

        {/* Left — Text */}
        <div className="flex flex-col space-y-8">

          <motion.span
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-[10px] uppercase tracking-[0.28em] font-medium text-muted"
          >
            Paris Award Winner&nbsp;&nbsp;·&nbsp;&nbsp;Est. Jalgaon
          </motion.span>

          <h1 className="font-heading font-bold text-[56px] xl:text-[64px] leading-[1.06] text-brown">
            {['Enhance Your', 'Jeera Experience', 'With Pinch'].map((line, i) => (
              <span key={line} className="text-reveal-wrap">
                <motion.span
                  className="text-reveal-line"
                  custom={i} variants={lineReveal} initial="hidden" animate="visible"
                >
                  {i === 1 ? (
                    <><em className="text-gold font-normal not-italic">Jeera</em>{' Experience'}</>
                  ) : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-[15px] text-muted leading-[1.85] max-w-[400px]"
          >
            Carefully crafted Indian-inspired carbonated drinks that elevate every sip with authentic flavour.
          </motion.p>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
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
            <a href="#discover" className="font-body text-[11px] font-medium text-muted hover:text-brown uppercase tracking-[0.12em] transition-colors duration-300">
              Our Story
            </a>
          </motion.div>

          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-8 pt-2"
          >
            {[
              { val: '19K+', lbl: 'Customers' },
              { val: '13+', lbl: 'Flavours' },
              { val: '4.9', lbl: 'Rating' },
            ].map((s, i) => (
              <React.Fragment key={s.lbl}>
                {i > 0 && <div className="w-px h-7 bg-border" />}
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[22px] text-brown leading-none">{s.val}</span>
                  <span className="font-body text-[9px] text-muted uppercase tracking-[0.18em] mt-1">{s.lbl}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Right — Bottle */}
        <div className="relative flex justify-center items-center select-none" style={{ height: '600px' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <img
              src="/pinchBottle.png"
              alt="Pinch Jeera Masala Premium Bottle"
              className="w-auto object-contain animate-float"
              style={{
                height: '560px',
                maxHeight: '560px',
                filter: 'drop-shadow(0 14px 28px rgba(26, 18, 7, 0.16))'
              }}
              loading="eager"
            />
          </motion.div>

          {/* Award Winner badge — top right of column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-16 right-4 z-20 animate-float-delayed"
          >
            <div className="bg-white/90 backdrop-blur-sm border border-border/60 px-4 py-2.5 rounded-full shadow-sm">
              <span className="font-body text-[9px] font-semibold text-muted uppercase tracking-[0.15em]">
                Award Winner ✦
              </span>
            </div>
          </motion.div>

          {/* Natural badge — left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 left-4 z-20 animate-float"
          >
            <div className="bg-brown/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm">
              <span className="font-body text-[9px] font-semibold text-cream/80 uppercase tracking-[0.15em]">
                100% Natural
              </span>
            </div>
          </motion.div>
        </div>
      </div>



    </section>
  );
}
