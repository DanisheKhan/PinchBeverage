import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-cream pt-20 pb-8 border-t border-border/10 select-text">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
        
        {/* Brand Column (Left) */}
        <div className="flex flex-col space-y-4 lg:col-span-1 select-text">
          <a href="#" className="flex flex-col select-none group self-start">
            <span className="font-heading italic font-bold text-2xl text-gold leading-none tracking-tight">
              Pinch
            </span>
            <span className="font-body text-[9px] uppercase tracking-[0.2em] text-muted font-bold leading-none mt-1">
              · Beverage Co. ·
            </span>
          </a>
          <p className="font-body text-xs text-muted leading-relaxed select-text">
            Indian carbonated craft beverages born in Jalgaon, Maharashtra. Elevating refreshments with natural spices.
          </p>
        </div>

        {/* Column 2: Information */}
        <div className="flex flex-col space-y-4 select-text">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.2em]">
            Information
          </span>
          <div className="flex flex-col space-y-2.5 text-xs text-muted">
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Our Story</a>
            <a href="#features" className="hover:text-gold transition-colors duration-300">Raw Ingredients</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Jalgaon MH Breweries</a>
            <a href="#features" className="hover:text-gold transition-colors duration-300">Certificates</a>
          </div>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col space-y-4 select-text">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.2em]">
            Services
          </span>
          <div className="flex flex-col space-y-2.5 text-xs text-muted">
            <a href="#flavours" className="hover:text-gold transition-colors duration-300">Direct Delivery</a>
            <a href="#flavours" className="hover:text-gold transition-colors duration-300">Corporate Gifting</a>
            <a href="#flavours" className="hover:text-gold transition-colors duration-300">Catering Deals</a>
            <a href="#flavours" className="hover:text-gold transition-colors duration-300">Wholesale Supply</a>
          </div>
        </div>

        {/* Column 4: About Us */}
        <div className="flex flex-col space-y-4 select-text">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.2em]">
            About Us
          </span>
          <div className="flex flex-col space-y-2.5 text-xs text-muted">
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Careers</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Press Kit</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Awards</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Contact Us</a>
          </div>
        </div>

        {/* Column 5: Privacy */}
        <div className="flex flex-col space-y-4 select-text">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.2em]">
            Privacy
          </span>
          <div className="flex flex-col space-y-2.5 text-xs text-muted">
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Terms of Use</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">FSSAI Standards</a>
            <a href="#discover" className="hover:text-gold transition-colors duration-300">BIS Guidelines</a>
          </div>
        </div>

      </div>

      {/* Copyright Bottom segment */}
      <div className="max-w-7xl mx-auto px-6 border-t border-border/10 pt-8 text-center select-text">
        <span className="font-body text-[10px] text-muted uppercase tracking-widest select-text">
          © {new Date().getFullYear()} Pinch Beverage Co. All rights reserved · Handcrafted in Jalgaon, MH, India.
        </span>
      </div>
    </footer>
  );
}
