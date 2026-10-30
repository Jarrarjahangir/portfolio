import React from 'react';
import { ArrowUpRight, Compass, Target, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
            ABOUT ME
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171A1D] tracking-tight">
            A Student. An Entrepreneur. <br />
            <span className="font-serif italic text-[#557487]">A Builder.</span>
          </h2>
        </div>

        {/* Editorial 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Biography Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#171A1D] text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-lg sm:text-xl text-[#171A1D] leading-relaxed">
              I’m Jarrar Jahangir, a student and entrepreneur from Pakistan with a strong interest in business, technology, and building companies.
            </p>

            <p className="text-[#626B73]">
              My interest in entrepreneurship has grown through practical work across digital marketing, e-commerce, website development, and business operations. I enjoy understanding how businesses attract customers, improve their systems, and turn ideas into something people can actually use.
            </p>

            <p className="text-[#626B73]">
              Through <strong className="font-medium text-[#171A1D]">VAXION Advertisements</strong> and independent projects, I’ve had the opportunity to work on real business challenges, from digital growth and lead generation to online stores and automation workflows.
            </p>

            <p className="text-[#626B73]">
              I’m also exploring the intersection of artificial intelligence, business intelligence, and entrepreneurship. My long-term goal is to build technology-driven businesses that solve meaningful problems and create value beyond a single market.
            </p>

            <div className="p-6 rounded-xl bg-[#F2F2EE] border-l-2 border-[#557487] my-8">
              <p className="font-serif italic text-lg sm:text-xl text-[#171A1D] leading-snug">
                “I believe the strongest way to learn is to build, test, measure, and improve.”
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#171A1D] text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-[#2C3338] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171A1D]"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Focus Card & Core Tenets (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Currently Focused Card (as seen in visual reference) */}
            <div className="bg-white rounded-2xl p-7 border border-[#DFE2E2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#8C969E] uppercase">
                  ACTIVE FOCUS
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-normal text-[#171A1D] mb-3 leading-snug">
                Building VAXION Advertisements & Exploring Applied AI
              </h3>
              
              <p className="text-sm text-[#626B73] leading-relaxed">
                Currently focused on building VAXION Advertisements and working on new opportunities in business and technology.
              </p>

              <div className="mt-6 pt-5 border-t border-[#DFE2E2]/60 flex items-center justify-between text-xs text-[#626B73]">
                <span>Status: Client Engagements Active</span>
                <span className="font-mono text-[#557487]">Q4 2026</span>
              </div>
            </div>

            {/* Core Working Principles */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] text-[#8C969E] uppercase">
                CORE PRINCIPLES
              </h4>
              
              <div className="grid grid-cols-1 gap-3.5">
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white/70 border border-[#DFE2E2]">
                  <Target className="w-5 h-5 text-[#557487] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-[#171A1D]">Pragmatic Execution</h5>
                    <p className="text-xs text-[#626B73] mt-0.5">Prioritizing tested deliverables and real transactions over abstract theory.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white/70 border border-[#DFE2E2]">
                  <Compass className="w-5 h-5 text-[#557487] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-[#171A1D]">Systems Thinking</h5>
                    <p className="text-xs text-[#626B73] mt-0.5">Viewing every customer touchpoint as an interconnected machine that can be optimized.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white/70 border border-[#DFE2E2]">
                  <Sparkles className="w-5 h-5 text-[#557487] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-[#171A1D]">Continuous Iteration</h5>
                    <p className="text-xs text-[#626B73] mt-0.5">Constantly testing, refining, and applying learnings from each new initiative.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
