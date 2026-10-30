import React from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  Cpu, 
  Compass, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

interface CapabilitiesSectionProps {
  onOpenContact: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#557487]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#557487]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#557487]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#557487]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#557487]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
              WHAT I DO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171A1D] tracking-tight mb-4">
              From Strategy to <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#557487]">Execution.</span>
            </h2>
            <p className="text-base text-[#626B73] max-w-xl">
              I help businesses build a strong online presence and turn it into real growth through a combination of strategy, marketing and technology.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#171A1D] hover:text-[#557487] transition-colors py-2 group self-start md:self-auto cursor-pointer"
          >
            <span className="uppercase">Discuss Your Requirements</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.title}
              className="bg-white rounded-2xl p-7 border border-[#DFE2E2] flex flex-col justify-between transition-all duration-300 hover:border-[#557487]/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F2EE] border border-[#DFE2E2] flex items-center justify-center">
                    {getIcon(cap.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#8C969E]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#171A1D] mb-2.5">
                  {cap.title}
                </h3>

                <p className="text-xs text-[#626B73] leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#DFE2E2]/70">
                <ul className="space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-xs text-[#171A1D]">
                      <Check className="w-3.5 h-3.5 text-[#557487] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
