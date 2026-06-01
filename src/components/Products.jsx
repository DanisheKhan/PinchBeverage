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
    bgAccent: '#F2F0EB',
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
    bgAccent: '#F5F0E8',
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
    bgAccent: '#EDF2F0',
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
    bgAccent: '#F5F2E8',
    description: 'Rich, aromatic Konkan mango pulp with fizzy indulgence.',
  },
];

export default function Products() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const [cartStates, setCartStates] = useState({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = headingRef.current;
      if (!heading) return;

      gsap.fromTo(
        heading,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
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
      id="products"
      className="bg-cream py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-20">
          <span className="font-body text-[11px] uppercase tracking-[0.25em] font-medium text-muted">
            Collection
          </span>
          <h2
            ref={headingRef}
            className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-brown"
          >
            Explore Our Flavours
          </h2>
          <p className="mt-4 font-body text-[13px] text-muted leading-relaxed">
            A unique collection of carbonated beverages balancing traditional Indian essences with premium carbonation.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative bg-white rounded-2xl p-3 flex flex-col border border-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,18,7,0.06)] hover:border-border select-none"
              >

                {/* Image Container */}
                <div
                  className="relative h-56 rounded-xl overflow-hidden flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-[1.01]"
                  style={{ backgroundColor: product.bgAccent }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />
                  <video
                    ref={videoRef}
                    src={product.video}
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />

                  {/* Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-body text-[9px] text-muted font-medium uppercase tracking-wider">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="px-1 flex flex-col flex-grow">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <h3 className="font-heading font-bold text-base text-brown group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="font-body text-[10px] font-medium text-muted uppercase tracking-wider">
                      {product.size}
                    </span>
                  </div>

                  <p className="font-body text-[11px] text-muted leading-relaxed mb-5 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-heading font-bold text-lg text-brown">
                      {product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-body text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 select-none ${
                        cartStates[product.id]
                          ? 'bg-emerald-600 text-cream'
                          : 'bg-brown text-cream hover:bg-gold'
                      }`}
                    >
                      {cartStates[product.id] ? (
                        <span>✓ Added</span>
                      ) : (
                        <>
                          <span>Add to Cart</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 5v14M5 12h14" />
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
