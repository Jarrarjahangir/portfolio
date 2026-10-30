import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[640px]">
          
          {/* Left Column: Editorial Headline & Positioning (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#557487]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#626B73] uppercase">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>

            {/* Headline with Serif & Italic Accent */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-normal tracking-[-0.02em] leading-[1.08] text-[#171A1D] mb-6">
              Turning Ideas <br className="hidden sm:inline" />
              into <span className="font-serif italic font-normal text-[#557487]">Real-World</span> <br />
              Businesses.
            </h1>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-[#626B73] font-normal leading-relaxed max-w-xl mb-9">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 mb-14">
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#171A1D] text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-[#2C3338] transition-all shadow-sm active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171A1D]"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#171A1D] hover:text-[#557487] transition-colors py-2 px-3 rounded cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#557487]"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trusted By / Worked With Logos */}
            <div className="pt-8 border-t border-[#DFE2E2]">
              <p className="text-[10px] tracking-[0.24em] font-semibold text-[#8C969E] uppercase mb-4">
                TRUSTED BY / WORKED WITH
              </p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                {/* Embellish Gold */}
                <div className="flex items-center space-x-2.5 opacity-85 hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 rounded border border-[#171A1D]/20 flex items-center justify-center font-serif text-xs font-semibold text-[#171A1D]">
                    EG
                  </div>
                  <span className="font-serif text-sm tracking-wide text-[#171A1D] font-medium">
                    Embellish Gold
                  </span>
                </div>

                {/* FAM-TOURS */}
                <div className="flex items-center space-x-2.5 opacity-85 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-[#171A1D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 12c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
                    <path d="M2 17c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
                  </svg>
                  <span className="font-sans text-xs tracking-[0.18em] font-semibold text-[#171A1D] uppercase">
                    FAM-TOURS
                  </span>
                </div>

                {/* ROYAL GOLD */}
                <div className="flex items-center space-x-2 opacity-85 hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-[#171A1D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 18h18M4 18l2-10 6 5 6-5 2 10H4z" />
                  </svg>
                  <span className="font-serif text-xs tracking-[0.2em] font-semibold text-[#171A1D] uppercase">
                    ROYAL GOLD
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Mountain-Lake Portrait & Editorial Framing (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] lg:max-w-none">
              
              {/* Image Frame with Refined Border & Shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(23,26,29,0.08)] border border-[#DFE2E2] bg-[#E8E8E4]">
                <img
                  src="/assets/jarrar-portrait.jpg"
                  alt="Jarrar Jahangir — Entrepreneur & Digital Growth Strategist against snow-capped mountains and alpine lake"
                  className="w-full h-auto aspect-[4/5] object-cover object-center filter contrast-[1.03] transition-all duration-700 hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle soft gradient overlay matching background at bottom */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#171A1D]/40 via-transparent to-transparent opacity-60" />

                {/* Bottom badge on photo for mobile / tablet */}
                <div className="absolute bottom-4 left-4 right-4 sm:hidden bg-[#171A1D]/80 backdrop-blur-md rounded-xl p-3 text-white">
                  <p className="text-[10px] tracking-[0.16em] uppercase text-white/70 font-semibold">
                    Jarrar Jahangir
                  </p>
                  <p className="text-xs font-medium">Founder, VAXION Advertisements</p>
                </div>
              </div>

              {/* Editorial Side Annotation Strip (visible on desktop) */}
              <div className="hidden xl:flex flex-col absolute -right-9 top-1/2 -translate-y-1/2 items-center space-y-4 pointer-events-none">
                <div className="w-[1px] h-16 bg-[#DFE2E2]" />
                <div className="rotate-90 origin-center whitespace-nowrap">
                  <span className="text-[10px] tracking-[0.24em] font-medium text-[#8C969E] uppercase">
                    JARRAR JAHANGIR · PAKISTAN
                  </span>
                </div>
                <div className="w-[1px] h-16 bg-[#DFE2E2]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
