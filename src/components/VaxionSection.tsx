import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface VaxionSectionProps {
  onOpenContact: () => void;
}

export const VaxionSection: React.FC<VaxionSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="vaxion" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Dedicated Framed Agency Showcase Card */}
        <div className="bg-[#171A1D] rounded-3xl p-8 sm:p-12 lg:p-16 text-white border border-[#2A2E33] relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#557487]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Brand & Mission (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-widest text-[#8FAFC4] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FAFC4]" />
                <span>THE AGENCY INITIATIVE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white">
                VAXION <br />
                <span className="font-serif italic text-[#8FAFC4]">Advertisements.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#BAC2C7] font-light leading-relaxed max-w-xl">
                VAXION Advertisements is my agency arm — where I help businesses scale through digital growth, high-converting e-commerce storefronts, and automated workflows.
              </p>

              <p className="text-sm text-[#8C969E] leading-relaxed max-w-xl">
                As founder and lead strategist, I work directly with business owners across the UAE and international markets, delivering measurable customer acquisition and operational clarity without agency bloat.
              </p>

              {/* Scope of Agency Operations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-center space-x-2.5 text-xs text-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAFC4] shrink-0" />
                  <span>Paid Advertising (Meta & Google)</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAFC4] shrink-0" />
                  <span>Shopify Store & Web Development</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAFC4] shrink-0" />
                  <span>High-Intent Lead Gen Systems</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAFC4] shrink-0" />
                  <span>Business Process & AI Automation</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="group inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-white text-[#171A1D] text-xs sm:text-sm font-medium tracking-wide hover:bg-[#F2F2EE] transition-all cursor-pointer shadow-md"
                >
                  <span>Inquire for VAXION Engagements</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Operating Model & Transparency (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#8FAFC4]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Direct Execution Model</h3>
                  <p className="text-[11px] text-[#8C969E]">No junior hand-offs, no generic retainers</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#BAC2C7] leading-relaxed">
                <p>
                  Every client engagement is managed directly with a focus on real revenue drivers: improving conversion rates, lowering acquisition costs, and establishing sustainable digital equity.
                </p>
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-[11px] text-[#8FAFC4] font-mono mb-1">CAPACITY PHILOSOPHY</p>
                  <p className="text-xs text-white/90">
                    Operating selectively each quarter to maintain rigorous execution standards for every partner.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8C969E]">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Client Case Studies</span>
                </span>
                <span>Active 2026</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
