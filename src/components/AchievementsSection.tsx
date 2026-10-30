import React from 'react';
import { Award, Trophy, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ifg-tetr':
        return <Trophy className="w-6 h-6 text-amber-700" />;
      case 'ifg-scholarship':
        return <GraduationCap className="w-6 h-6 text-[#557487]" />;
      case 'college-leadership':
        return <Award className="w-6 h-6 text-[#557487]" />;
      case 'agency-founding':
        return <Building2 className="w-6 h-6 text-[#557487]" />;
      default:
        return <Award className="w-6 h-6 text-[#557487]" />;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
            RECOGNITION & LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171A1D] tracking-tight mb-4">
            Competitions, Honors <br className="hidden sm:inline" />
            & <span className="font-serif italic text-[#557487]">Milestones.</span>
          </h2>
          <p className="text-base text-[#626B73] max-w-xl">
            Selected accomplishments and leadership commitments reflecting real-world performance, strategic problem-solving, and entrepreneurial initiatives.
          </p>
        </div>

        {/* Featured Global Challenge Highlight (IFG x Tetr) */}
        <div className="mb-12 bg-white rounded-2xl border border-[#DFE2E2] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Plaque / Award Visual Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#171A1D] rounded-xl p-8 text-center text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[260px] shadow-inner">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                <Trophy className="w-7 h-7 text-amber-300" />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#8FAFC4] mb-1">
                GLOBAL COMPETITION
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-2">
                2nd Place Winner
              </h3>
              <p className="font-sans text-xs text-[#9DA8B0] max-w-xs">
                IFG × TETR Global Business Challenge 2026
              </p>
              <div className="mt-4 inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] text-amber-200 border border-amber-300/30">
                International Finalist
              </div>
            </div>

            {/* Content & Context (8 cols) */}
            <div className="lg:col-span-8 lg:pl-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-[#557487]">
                  HONOR 01 / 2026
                </span>
                <span className="text-[#8C969E]">•</span>
                <span className="text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                  Verified Result
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171A1D] mb-4">
                2nd Place — IFG × Tetr Global Business Challenge 2026
              </h3>

              <p className="text-base text-[#626B73] leading-relaxed mb-6">
                Proud to have secured 2nd place in the IFG × Tetr Global Business Challenge 2026, a valuable learning experience that strengthened my entrepreneurial and strategic thinking against international business student teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#DFE2E2]">
                <div>
                  <h4 className="text-xs font-semibold text-[#171A1D] uppercase tracking-wider mb-1">
                    Evaluated Competencies
                  </h4>
                  <p className="text-xs text-[#626B73]">
                    Business modeling, go-to-market feasibility, unit economics, and executive pitch clarity.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#171A1D] uppercase tracking-wider mb-1">
                    Partner Institutions
                  </h4>
                  <p className="text-xs text-[#626B73]">
                    International Foundation Group (IFG) & Tetr College of Business.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Other Verified Milestones & Honors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.slice(1).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#DFE2E2] flex flex-col justify-between transition-all hover:border-[#C5CACB] shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F2EE] border border-[#DFE2E2] flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs text-[#8C969E]">
                    {item.year}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#557487] bg-[#EEF3F6] px-2.5 py-0.5 rounded-full border border-[#DFE2E2]">
                    {item.statusTag}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-normal text-[#171A1D] mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-[#626B73] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFE2E2]/60 flex items-center space-x-1.5 text-[11px] text-[#8C969E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{item.organization}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
