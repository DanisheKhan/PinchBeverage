import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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

  // Framer variants for desktop nav link stagger
  const navContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 1.8 } },
  };

  const navItem = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/85 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-[60px]' : 'h-[72px]'}`}>

        {/* Brand */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex items-baseline space-x-1.5 select-none group"
        >
          <span className="font-heading italic font-bold text-xl text-brown leading-none tracking-tight transition-colors duration-300 group-hover:text-gold">
            Pinch
          </span>
          <span className="font-body text-[8px] uppercase tracking-[0.18em] text-muted font-medium hidden sm:inline">
            Beverage Co.
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.nav
          ref={navRef}
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={navItem}
              onClick={() => setActiveLink(link.label)}
              className={`relative font-body text-[12px] font-medium transition-colors duration-300 pb-0.5 ${
                activeLink === link.label ? 'text-brown' : 'text-muted hover:text-brown'
              }`}
            >
              {link.label}
              {/* Animated underline */}
              <span
                className="absolute bottom-0 left-0 h-px bg-gold transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] w-full origin-left"
                style={{ transform: activeLink === link.label ? 'scaleX(1)' : 'scaleX(0)' }}
              />
            </motion.a>
          ))}

          {/* Flavours dropdown */}
          <motion.div
            variants={navItem}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 font-body text-[12px] font-medium text-muted hover:text-brown transition-colors duration-300">
              <span>Flavours</span>
              <motion.svg
                width="11" height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path d="m6 9 6 6 6-6" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-48 z-50"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden p-1.5 shadow-xl border border-border">
                    {flavours.map((name, i) => (
                      <motion.a
                        key={name}
                        href="#products"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.25 }}
                        className="block px-4 py-2.5 text-[11px] font-medium text-muted hover:text-brown hover:bg-soft rounded-lg transition-all duration-200"
                      >
                        {name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.nav>

        {/* Desktop Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="hidden md:flex items-center space-x-5 text-muted"
        >
          <button className="hover:text-brown transition-colors duration-300 p-1">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button className="hover:text-brown transition-colors duration-300 p-1 relative">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-0.5 -right-1 w-3.5 h-3.5 bg-brown text-cream text-[8px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brown p-1 z-50 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col space-y-[5px]">
            <span className={`block h-px bg-brown transition-all duration-400 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px bg-brown transition-all duration-400 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px bg-brown transition-all duration-400 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-cream z-40 pt-24 px-8 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col flex-grow">
              {['Home', 'Flavours', 'About', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={
                    item === 'Home' ? '#'
                    : item === 'Flavours' ? '#products'
                    : item === 'About' ? '#discover'
                    : '#newsletter'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative font-heading text-[clamp(2rem,7vw,3rem)] font-bold text-brown py-5 border-b border-border/40 hover:text-gold transition-colors duration-300 overflow-hidden"
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-gold"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="py-8 border-t border-border/30"
            >
              <span className="font-body text-[10px] uppercase tracking-[0.22em] text-muted">
                © {new Date().getFullYear()} Pinch Beverage Co.
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
