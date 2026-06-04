import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1000, label: 'Products Sold', suffix: '+' },
  { value: 7400, label: 'Total Sales', suffix: '+' },
  { value: 19000, label: 'Happy Customers', suffix: '+' },
];

export default function Stats() {
  const rowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up entire row
      gsap.fromTo(
        rowRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Counter animations
      const counters = rowRef.current.querySelectorAll('.stat-counter');
      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute('data-target'), 10);
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: targetVal,
            duration: 2.5,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const cur = Math.ceil(this.targets()[0].textContent);
              counter.innerHTML = cur.toLocaleString();
            },
          }
        );
      });

      // Underline draw animations
      const lines = rowRef.current.querySelectorAll('.stat-underline');
      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rowRef} className="bg-cream py-10 sm:py-16 relative z-10 opacity-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider mb-10 sm:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center py-2 ${
                i < stats.length - 1 ? 'md:border-r border-border/40' : ''
              }`}
            >
              <div className="relative">
                <span
                  className="stat-counter font-heading font-bold text-4xl sm:text-5xl text-brown"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="font-heading font-bold text-2xl sm:text-3xl text-brown ml-0.5">{stat.suffix}</span>
              </div>

              <span className="font-body text-[10px] font-medium text-muted uppercase tracking-[0.22em] mt-3 mb-3">
                {stat.label}
              </span>

              {/* Animated underline draw */}
              <div className="w-8 h-px bg-gold stat-underline origin-left" style={{ transform: 'scaleX(0)' }} />
            </div>
          ))}
        </div>

        <div className="section-divider mt-10 sm:mt-16" />
      </div>
    </section>
  );
}
