import React from 'react';
import { Rocket, Sparkles, Target, Boxes } from 'lucide-react';
import { FUTURE_INTERESTS } from '../data/portfolioData';

export const FutureDirection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#557487]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#557487]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#557487]" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-[#557487]" />;
      default:
        return <Rocket className="w-5 h-5 text-[#557487]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
            INTERESTS & FUTURE TRAJECTORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171A1D] tracking-tight mb-4">
            Where I’m focused <br />
            & <span className="font-serif italic text-[#557487]">what I’m exploring.</span>
          </h2>
          <p className="text-base text-[#626B73]">
            My long-term ambition is to build scalable technology-driven businesses that solve meaningful problems. Here are the core areas I continually study, experiment with, and invest my time into.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FUTURE_INTERESTS.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-[#DFE2E2] flex flex-col justify-between transition-all hover:border-[#557487]/50 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F2EE] border border-[#DFE2E2] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-mono text-xs text-[#8C969E]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#171A1D] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#626B73] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFE2E2]/60 flex items-center justify-between text-xs text-[#8C969E]">
                <span>Active Research & Experimentation</span>
                <span className="font-mono text-[#557487]">Continuous</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
