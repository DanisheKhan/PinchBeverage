import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1000, label: 'Products', suffix: '+' },
  { value: 7400, label: 'Total Sales', suffix: '+' },
  { value: 19000, label: 'Customers', suffix: '+' },
];

export default function Stats() {
  const rowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const currentVal = Math.ceil(this.targets()[0].textContent);
              counter.innerHTML = currentVal.toLocaleString();
            },
          }
        );
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rowRef} className="bg-cream py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Divider */}
        <div className="section-divider mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center py-2 ${
                i < stats.length - 1 ? 'md:border-r border-border/50' : ''
              }`}
            >
              <span
                className="stat-counter font-heading font-bold text-4xl sm:text-5xl text-brown"
                data-target={stat.value}
              >
                0
              </span>
              <span className="font-body text-[11px] font-medium text-muted uppercase tracking-[0.2em] mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mt-16"></div>
      </div>
    </section>
  );
}
