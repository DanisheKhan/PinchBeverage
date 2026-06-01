import React from 'react';

const words = [
  'Jeera Masala',
  'Orange Sip',
  'Minty Mojito',
  'Alphonso Mango',
  'Premium Fizz',
  'Craft Brewed',
  'Jalgaon, MH',
  'Paris Award',
  'Natural Spices',
  'Eco Packaging',
];

export default function Marquee() {
  const separator = (
    <span className="mx-6 text-border text-lg select-none">✦</span>
  );

  const renderWords = () =>
    words.map((word, i) => (
      <span key={i} className="flex items-center whitespace-nowrap">
        <span className="font-heading text-[15px] sm:text-lg font-bold text-brown/20 uppercase tracking-[0.15em]">
          {word}
        </span>
        {separator}
      </span>
    ));

  return (
    <section className="bg-cream py-6 overflow-hidden select-none border-y border-border/40">
      <div className="marquee-container flex">
        <div className="marquee-track flex animate-marquee">
          {renderWords()}
        </div>
        <div className="marquee-track flex animate-marquee" aria-hidden="true">
          {renderWords()}
        </div>
      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          flex-shrink: 0;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
