import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const productsData = [
  {
    id: 'jeera',
    name: 'Jeera Masala',
    tagline: 'जिरा मसाला',
    price: '₹25',
    size: '500ml',
    image: '/jeera-masala.jpg',
    video: '/jeera-masala.mp4',
    bgAccent: '#EAEFE5', // Muted herbal cream
    goldGlow: 'rgba(201, 149, 42, 0.15)',
    description: 'Deep roasted cumin spices infused with sparkling carbonation.',
  },
  {
    id: 'orange',
    name: 'Orange Sip',
    tagline: 'ऑरेंज सिप',
    price: '₹25',
    size: '500ml',
    image: '/orange.jpg',
    video: '/orange.mp4',
    bgAccent: '#FDF1E2', // Warm saffron orange tint
    goldGlow: 'rgba(232, 120, 10, 0.12)',
    description: 'Sizzling, citrusy Nagpur orange extract with a bubbly kick.',
  },
  {
    id: 'mojito',
    name: 'Minty Mojito',
    tagline: 'पुदिना मोझिटो',
    price: '₹25',
    size: '500ml',
    image: '/mojito.jpg',
    video: '/mojito.mp4',
    bgAccent: '#E8F5F1', // Minty clean aqua tint
    goldGlow: 'rgba(201, 149, 42, 0.15)',
    description: 'Fresh muddled lime and wild mint, perfectly carbonated.',
  },
  {
    id: 'mango',
    name: 'Alphonso Mango',
    tagline: 'हापूस आंबा',
    price: '₹25',
    size: '500ml',
    image: '/mango.jpg',
    video: '/mango.mp4',
    bgAccent: '#FCF5E0', // Mango cream gold tint
    goldGlow: 'rgba(201, 149, 42, 0.2)',
    description: 'Rich, aromatic Konkan mango pulp with fizzy indulgence.',
  },
];

export default function Products() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const [cartStates, setCartStates] = useState({});

  useEffect(() => {
    // Elegant letter-by-letter scroll text reveal
    const ctx = gsap.context(() => {
      const heading = headingRef.current;
      if (!heading) return;

      const text = heading.innerText;
      heading.innerHTML = '';
      
      // Wrap characters in span tags
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.className = 'inline-block opacity-0 translate-y-8 transition-transform';
        heading.appendChild(span);
      });

      // Animate character spans on scroll
      gsap.to(heading.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleAddToCart = (id) => {
    setCartStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCartStates((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section
      ref={containerRef}
      id="flavours"
      className="bg-cream py-24 border-b border-border select-text"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            ref={headingRef}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] text-brown select-text"
          >
            Explore Our Flavours
          </h2>
          <p className="mt-4 font-body text-sm text-muted leading-relaxed select-text">
            Discover a unique collection of carbonated beverages balancing traditional Indian essences with premium carbonation.
          </p>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product, idx) => {
            const videoRef = useRef(null);

            const handleMouseEnter = () => {
              if (videoRef.current) {
                videoRef.current.play().catch(() => {});
              }
            };

            const handleMouseLeave = () => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            };

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative glass-card rounded-3xl p-4 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_var(--color-accent)] hover:border-gold/30 bg-white select-none"
                style={{ '--color-accent': product.goldGlow }}
              >
                
                {/* Image & Video Container */}
                <div
                  className="relative h-64 rounded-2xl overflow-hidden flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: product.bgAccent }}
                >
                  
                  {/* Static Cover Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-opacity duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />

                  {/* Looping Ambient Fizz Video */}
                  <video
                    ref={videoRef}
                    src={product.video}
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />

                  {/* Brand Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur border border-border px-3 py-1 rounded-full">
                    <span className="font-heading italic text-[10px] text-gold font-bold uppercase tracking-wider">
                      {product.tagline}
                    </span>
                  </div>

                  {/* Heart Like Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/90 backdrop-blur border border-border flex items-center justify-center text-muted hover:text-red-500 transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>

                {/* Card Bottom Details */}
                <div className="px-1 flex flex-col flex-grow select-text">
                  <div className="flex justify-between items-baseline mb-2 select-text">
                    <h3 className="font-heading font-bold text-lg text-brown group-hover:text-gold transition-colors select-text">
                      {product.name}
                    </h3>
                    <span className="font-body text-xs font-bold text-muted uppercase tracking-wider select-text">
                      {product.size}
                    </span>
                  </div>
                  
                  <p className="font-body text-xs text-muted leading-relaxed mb-6 flex-grow select-text">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    {/* Price */}
                    <span className="font-heading font-bold text-xl text-brown select-text">
                      {product.price}
                    </span>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                        cartStates[product.id]
                          ? 'bg-emerald-600 text-cream scale-95 shadow-[0_4px_15px_rgba(5,150,105,0.2)]'
                          : 'bg-gold hover:bg-brown text-cream shadow-[0_4px_15px_rgba(201,149,42,0.15)]'
                      }`}
                    >
                      {cartStates[product.id] ? (
                        <>
                          <span>✓ Added!</span>
                        </>
                      ) : (
                        <>
                          <span>Add to cart</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
