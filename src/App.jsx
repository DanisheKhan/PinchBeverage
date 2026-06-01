import React, { useEffect, useRef, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Products from './components/Products';
import Process from './components/Process';
import Discover from './components/Discover';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import './App.css';

function App() {
  const scrollProgress = useScrollProgress();

  // Custom Cursor
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
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

    // Smooth lerp for ring
    let animId;
    const tick = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.12;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringRef.current.x}px`;
        cursorRingRef.current.style.top = `${ringRef.current.y}px`;
      }

      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

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
      <Preloader />

      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[1.5px] bg-brown z-[99999] origin-left w-full pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      {/* Custom cursor (Desktop only) */}
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

      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <Marquee />
          <Stats />
          <Products />
          <Process />
          <Discover />
          <Features />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Newsletter />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;