import React, { useEffect, useRef, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Discover from './components/Discover';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import './App.css';

function App() {
  const scrollProgress = useScrollProgress();
  
  // Custom Cursor References
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile to disable custom cursor on touch devices
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic Lerp Animation Frame Loop for Outer Ring Lag
    let animId;
    const tick = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.15;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.15;
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringRef.current.x}px`;
        cursorRingRef.current.style.top = `${ringRef.current.y}px`;
      }
      
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    // Global Hover Detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, select, input, [role="button"]');
      setIsHovered(!!isInteractive);
    };
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* 1. Preloader drawing entrance */}
      <Preloader />

      {/* 2. Top Scroll Progress Indicator */}
      <div
        className="progress fixed top-0 left-0 h-[2.5px] bg-gold z-[99999] origin-left w-full pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      {/* 3. Custom double-ring cursor (Desktop Only) */}
      {!isMobile && (
        <>
          <div
            ref={cursorDotRef}
            className="custom-cursor pointer-events-none"
          ></div>
          <div
            ref={cursorRingRef}
            className={`custom-cursor-ring pointer-events-none ${isHovered ? 'hovered' : ''}`}
          ></div>
        </>
      )}

      {/* 4. Main App Layout Grid */}
      <div className="relative min-h-screen flex flex-col">
        {/* Fixed Header */}
        <Navbar />

        {/* Content stream */}
        <main className="flex-grow">
          <Hero />
          <Stats />
          <Products />
          <Discover />
          <Features />
          <Testimonials />
          <Newsletter />
        </main>

        {/* Footer info blocks */}
        <Footer />
      </div>
    </>
  );
}

export default App;