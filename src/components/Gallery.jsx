import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';

const galleryImages = [
  {
    id: 1,
    src: '/jeera-masala.jpg',
    alt: 'Stamina Litchi premium fruit drink',
    label: 'Stamina Litchi',
    span: 'col-span-1 sm:row-span-2',
    aspect: 'aspect-[4/5] sm:aspect-auto sm:h-full',
  },
  {
    id: 2,
    src: '/orange.jpg',
    alt: 'Pink Guava premium fruit drink',
    label: 'Pink Guava',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    src: '/mojito.jpg',
    alt: 'Pomegranate premium fruit drink',
    label: 'Pomegranate',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 4,
    src: '/mango.jpg',
    alt: 'Refreshingly Low-Calorie Jeera Masala',
    label: 'Jeera Masala',
    span: 'col-span-1 sm:col-span-2',
    aspect: 'aspect-[4/3] sm:aspect-[16/7]',
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="bg-soft py-16 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center max-w-lg mx-auto mb-16"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.25em] font-medium text-muted">
            Gallery
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-brown">
            Visual Stories
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              variants={fadeUp}
              onClick={() => setActiveImage(img)}
              className={`${img.span} ${img.aspect} group relative overflow-hidden rounded-xl cursor-pointer select-none flex flex-col`}
            >
              <div className="relative w-full h-full flex-grow">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-500 flex items-end p-5 z-10">
                  <span className="font-body text-[11px] font-semibold text-cream uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[99998] bg-brown/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-2xl mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brown/50 to-transparent rounded-b-2xl">
                <span className="font-heading font-bold text-cream text-lg">
                  {activeImage.label}
                </span>
              </div>
              {/* Close button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
