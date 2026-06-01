import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#discover' },
    { label: 'Contact', href: '#newsletter' },
  ];

  const flavours = [
    'Jeera Masala',
    'Orange Sip',
    'Minty Mojito',
    'Alphonso Mango',
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'glass-nav shadow-[0_1px_0_0_var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-baseline space-x-1 select-none group">
          <span className="font-heading italic font-bold text-xl text-brown leading-none tracking-tight transition-colors duration-300 group-hover:text-gold">
            Pinch
          </span>
          <span className="font-body text-[8px] uppercase tracking-[0.15em] text-muted font-medium hidden sm:inline">
            Beverage Co.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[13px] font-medium text-muted hover:text-brown transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Flavours dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 font-body text-[13px] font-medium text-muted hover:text-brown transition-colors duration-300">
              <span>Flavours</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-48 z-50"
                >
                  <div className="bg-white rounded-xl overflow-hidden p-1.5 shadow-xl border border-border">
                    {flavours.map((name) => (
                      <a
                        key={name}
                        href="#products"
                        className="block px-4 py-2.5 text-[12px] font-medium text-muted hover:text-brown hover:bg-soft rounded-lg transition-all duration-200"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-5 text-muted">
          <button className="hover:text-brown transition-colors duration-300 p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button className="hover:text-brown transition-colors duration-300 p-1 relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-0.5 -right-1 w-3.5 h-3.5 bg-brown text-cream text-[8px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brown p-1 z-50 transition-colors duration-300"
        >
          <div className="w-5 flex flex-col space-y-1.5">
            <span className={`block h-[1.5px] bg-brown transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block h-[1.5px] bg-brown transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block h-[1.5px] bg-brown transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-cream z-40 pt-24 px-8 flex flex-col"
          >
            <div className="flex flex-col space-y-1 flex-grow">
              {['Home', 'Flavours', 'About', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '#' : item === 'Flavours' ? '#products' : item === 'About' ? '#discover' : '#newsletter'}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-3xl font-bold text-brown py-3 border-b border-border/50 hover:text-gold transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="py-8 border-t border-border">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted">
                © {new Date().getFullYear()} Pinch Beverage Co.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
