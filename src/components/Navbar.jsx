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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav border-b border-border shadow-[0_4px_30px_rgba(61,32,0,0.02)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo Left */}
        <a href="#" className="flex flex-col select-none group">
          <span className="font-heading italic font-bold text-2xl text-gold leading-none tracking-tight transition-transform duration-300 group-hover:scale-102">
            Pinch
          </span>
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-muted font-bold leading-none mt-1">
            · Beverage Co. ·
          </span>
        </a>

        {/* Navigation Links Center (Desktop Only) */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#" className="font-body text-sm font-medium text-text hover:text-gold transition-colors duration-300">
            Home
          </a>
          
          {/* Flavours Dropdown Toggle */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 font-body text-sm font-medium text-text hover:text-gold transition-colors duration-300">
              <span>Flavours</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-52 z-50"
                >
                  <div className="glass-card rounded-2xl overflow-hidden p-2 shadow-2xl">
                    <a
                      href="#products"
                      className="block px-4 py-3 text-xs font-bold text-text hover:bg-accent hover:text-gold rounded-xl transition-all"
                    >
                      Jeera Masala
                    </a>
                    <a
                      href="#products"
                      className="block px-4 py-3 text-xs font-bold text-text hover:bg-accent hover:text-gold rounded-xl transition-all"
                    >
                      Orange Sip
                    </a>
                    <a
                      href="#products"
                      className="block px-4 py-3 text-xs font-bold text-text hover:bg-accent hover:text-gold rounded-xl transition-all"
                    >
                      Minty Mojito
                    </a>
                    <a
                      href="#products"
                      className="block px-4 py-3 text-xs font-bold text-text hover:bg-accent hover:text-gold rounded-xl transition-all"
                    >
                      Alphonso Mango
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#discover" className="font-body text-sm font-medium text-text hover:text-gold transition-colors duration-300">
            About
          </a>
          <a href="#newsletter" className="font-body text-sm font-medium text-text hover:text-gold transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Navigation Icons Right */}
        <div className="hidden md:flex items-center space-x-6 text-text">
          {/* Search Icon */}
          <button className="hover:text-gold transition-colors duration-300 p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          {/* Cart Icon */}
          <button className="hover:text-gold transition-colors duration-300 p-1 relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="absolute -top-1 -right-1.5 bg-gold text-cream text-[9px] font-bold px-1.5 py-0.5 rounded-full scale-85">
              0
            </span>
          </button>
          {/* User Icon */}
          <button className="hover:text-gold transition-colors duration-300 p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburguer Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden hover:text-gold text-text p-1.5 z-50 transition-colors duration-300"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 bg-cream z-40 pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col space-y-6">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading italic text-3xl font-bold text-text hover:text-gold"
              >
                Home
              </a>
              <div className="border-b border-border pb-4">
                <span className="font-body text-sm font-bold text-muted uppercase tracking-wider block mb-3">
                  Flavours
                </span>
                <div className="grid grid-cols-2 gap-3 pl-2">
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-sm text-text hover:text-gold py-1"
                  >
                    Jeera Masala
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-sm text-text hover:text-gold py-1"
                  >
                    Orange Sip
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-sm text-text hover:text-gold py-1"
                  >
                    Minty Mojito
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-sm text-text hover:text-gold py-1"
                  >
                    Alphonso Mango
                  </a>
                </div>
              </div>
              <a
                href="#discover"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading italic text-3xl font-bold text-text hover:text-gold"
              >
                About
              </a>
              <a
                href="#newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading italic text-3xl font-bold text-text hover:text-gold"
              >
                Contact
              </a>
            </div>

            {/* Mobile Footer Actions */}
            <div className="flex items-center justify-around border-t border-border pt-6 text-text">
              <button className="flex flex-col items-center space-y-1 hover:text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="text-[10px] font-body">Search</span>
              </button>
              <button className="flex flex-col items-center space-y-1 hover:text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span className="text-[10px] font-body">Cart</span>
              </button>
              <button className="flex flex-col items-center space-y-1 hover:text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-[10px] font-body">Account</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
