import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
            duration: 2,
            ease: 'power3.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const currentVal = Math.ceil(this.targets()[0].textContent);
              // Format with '+' prefix or formatting
              counter.innerHTML = `+${currentVal.toLocaleString()}`;
            },
          }
        );
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rowRef} className="bg-cream border-y border-border py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-center">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center text-center md:border-r border-border py-4 md:py-0">
            <span
              className="stat-counter font-heading font-bold text-4xl sm:text-5xl text-gold"
              data-target="1000"
            >
              +0
            </span>
            <span className="font-body text-xs font-bold text-muted uppercase tracking-[0.2em] mt-3">
              Our Products
            </span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center justify-center text-center md:border-r border-border py-4 md:py-0">
            <span
              className="stat-counter font-heading font-bold text-4xl sm:text-5xl text-gold"
              data-target="7400"
            >
              +0
            </span>
            <span className="font-body text-xs font-bold text-muted uppercase tracking-[0.2em] mt-3">
              Total Sales
            </span>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center justify-center text-center py-4 md:py-0">
            <span
              className="stat-counter font-heading font-bold text-4xl sm:text-5xl text-gold"
              data-target="19000"
            >
              +0
            </span>
            <span className="font-body text-xs font-bold text-muted uppercase tracking-[0.2em] mt-3">
              Total Customers
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
