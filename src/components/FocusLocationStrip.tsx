import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FocusLocationStrip: React.FC = () => {
  return (
    <div className="w-full border-y border-[#DFE2E2] bg-[#F2F2EE]/60 py-3.5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs tracking-wider">
        
        {/* Left: Focused On areas */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#171A1D]">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#8C969E] uppercase">
            FOCUSED ON:
          </span>
          {PERSONAL_INFO.focusAreas.map((area, index) => (
            <React.Fragment key={area}>
              <span className="font-medium text-[#171A1D] hover:text-[#557487] transition-colors">
                {area}
              </span>
              {index < PERSONAL_INFO.focusAreas.length - 1 && (
                <span className="text-[#8C969E]/50 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Location Marker */}
        <div className="flex items-center space-x-2 text-[11px] sm:text-xs tracking-[0.16em] text-[#626B73] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span>BASED IN PAKISTAN · AVAILABLE GLOBALLY</span>
        </div>

      </div>
    </div>
  );
};
