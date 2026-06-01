import React from 'react';

export default function Footer() {
  const columns = [
    {
      title: 'Information',
      links: [
        { label: 'Our Story', href: '#discover' },
        { label: 'Ingredients', href: '#features' },
        { label: 'Breweries', href: '#discover' },
        { label: 'Certifications', href: '#features' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Direct Delivery', href: '#products' },
        { label: 'Corporate Gifting', href: '#products' },
        { label: 'Catering', href: '#products' },
        { label: 'Wholesale', href: '#products' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Awards', href: '#' },
        { label: 'Contact', href: '#newsletter' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'FSSAI', href: '#' },
        { label: 'BIS', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-cream pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <a href="#" className="flex items-baseline space-x-1 select-none self-start">
              <span className="font-heading italic font-bold text-xl text-cream leading-none tracking-tight">
                Pinch
              </span>
            </a>
            <p className="font-body text-[11px] text-cream/30 leading-relaxed max-w-[200px]">
              Indian carbonated craft beverages born in Jalgaon, Maharashtra.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col space-y-4">
              <span className="font-body text-[10px] font-semibold text-cream/50 uppercase tracking-[0.2em]">
                {col.title}
              </span>
              <div className="flex flex-col space-y-2.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-[12px] text-cream/30 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body text-[10px] text-cream/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Pinch Beverage Co. All rights reserved.
          </span>
          <span className="font-body text-[10px] text-cream/15 uppercase tracking-wider">
            Handcrafted in Jalgaon, India
          </span>
        </div>
      </div>
    </footer>
  );
}
