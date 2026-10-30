import React from 'react';
import { ArrowUp, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171A1D] text-white pt-16 pb-12 border-t border-[#2A2E33]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-sans text-xs tracking-[0.24em] font-semibold text-white uppercase block">
              {PERSONAL_INFO.name}
            </span>
            <p className="font-serif italic text-lg sm:text-xl text-[#D1D7DC] font-light max-w-sm">
              “Turning ideas into real-world businesses.”
            </p>
            <p className="text-xs text-[#8C969E] max-w-sm leading-relaxed">
              Entrepreneur and digital growth strategist. Building scalable e-commerce systems, growth funnels, and automated business operations.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#8C969E] uppercase block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-[#D1D7DC] hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-[#D1D7DC] hover:text-white transition-colors">About Jarrar</a>
              </li>
              <li>
                <a href="#work" className="text-[#D1D7DC] hover:text-white transition-colors">Selected Work</a>
              </li>
              <li>
                <a href="#achievements" className="text-[#D1D7DC] hover:text-white transition-colors">Achievements & Honors</a>
              </li>
              <li>
                <a href="#vaxion" className="text-[#D1D7DC] hover:text-white transition-colors">VAXION Advertisements</a>
              </li>
              <li>
                <a href="#contact" className="text-[#D1D7DC] hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#8C969E] uppercase block">
              CONNECT & INQUIRE
            </span>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-1.5 text-[#D1D7DC] hover:text-white transition-colors"
                >
                  <span className="font-mono text-xs">{PERSONAL_INFO.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8C969E]" />
                </a>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {PERSONAL_INFO.whatsapp}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[#D1D7DC] hover:text-white transition-colors"
                >
                  <span>LinkedIn / in/jarrarjahangir</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8C969E]" />
                </a>
              </div>
            </div>

            {/* Social handles list */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-[#8C969E] block mb-2">
                Social ({PERSONAL_INFO.handle})
              </span>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <a
                  href="https://instagram.com/jarrarjahangir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[#D1D7DC] hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://tiktok.com/@jarrarjahangir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[#D1D7DC] hover:text-white transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="https://threads.net/@jarrarjahangir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[#D1D7DC] hover:text-white transition-colors"
                >
                  Threads
                </a>
                <a
                  href="https://facebook.com/jarrarjahangir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[#D1D7DC] hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

            <p className="text-[11px] text-[#8C969E] pt-1">
              {PERSONAL_INFO.locationDetail}
            </p>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C969E]">
          <p>© {CURRENT_YEAR} Jarrar Jahangir. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-[11px]">Bespoke Editorial Portfolio</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-white hover:text-[#8FAFC4] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
