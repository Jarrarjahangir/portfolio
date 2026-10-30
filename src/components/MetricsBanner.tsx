import React from 'react';
import { ArrowRight } from 'lucide-react';
import { KEY_METRICS } from '../data/portfolioData';

interface MetricsBannerProps {
  onExploreWork: () => void;
}

export const MetricsBanner: React.FC<MetricsBannerProps> = ({ onExploreWork }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 items-center">
          
          {/* Eyebrow Label Box */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-[#DFE2E2] pb-6 lg:pb-0 lg:pr-6">
            <p className="text-[10px] tracking-[0.24em] font-semibold text-[#8C969E] uppercase leading-relaxed">
              REAL WORK.
              <br />
              REAL RESULTS.
            </p>
          </div>

          {/* Metric 1: Businesses */}
          <div className="border-r border-[#DFE2E2]/60 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#171A1D] mb-1">
              {KEY_METRICS[0].value}
            </div>
            <p className="text-xs font-medium text-[#171A1D]">{KEY_METRICS[0].label}</p>
            <p className="text-[11px] text-[#8C969E] mt-0.5">{KEY_METRICS[0].sublabel}</p>
          </div>

          {/* Metric 2: Embellish Gold Growth */}
          <div className="border-r border-[#DFE2E2]/60 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#171A1D] mb-1">
              {KEY_METRICS[1].value}
            </div>
            <p className="text-xs font-medium text-[#171A1D]">{KEY_METRICS[1].label}</p>
            <p className="text-[11px] text-[#8C969E] mt-0.5">{KEY_METRICS[1].sublabel}</p>
          </div>

          {/* Metric 3: ROAS Achieved */}
          <div className="border-r border-[#DFE2E2]/60 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#171A1D] mb-1">
              {KEY_METRICS[2].value}
            </div>
            <p className="text-xs font-medium text-[#171A1D]">{KEY_METRICS[2].label}</p>
            <p className="text-[11px] text-[#8C969E] mt-0.5">{KEY_METRICS[2].sublabel}</p>
          </div>

          {/* Metric 4: FAM-Tours Leads */}
          <div className="border-r border-[#DFE2E2]/60 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#171A1D] mb-1">
              {KEY_METRICS[3].value}
            </div>
            <p className="text-xs font-medium text-[#171A1D]">{KEY_METRICS[3].label}</p>
            <p className="text-[11px] text-[#8C969E] mt-0.5">{KEY_METRICS[3].sublabel}</p>
          </div>

          {/* Right Action: Explore Button */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex items-center justify-start lg:justify-end pt-4 sm:pt-0">
            <button
              onClick={onExploreWork}
              className="group inline-flex items-center space-x-3 text-xs font-semibold tracking-wider text-[#171A1D] hover:text-[#557487] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#557487] rounded p-1"
            >
              <span className="uppercase">Explore Work</span>
              <span className="w-9 h-9 rounded-full border border-[#DFE2E2] group-hover:border-[#557487] group-hover:bg-[#557487] group-hover:text-white flex items-center justify-center transition-all">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
