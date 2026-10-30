import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'tourism'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const featuredProject = PROJECTS[0]; // Embellish Gold

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#DFE2E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
              SELECTED WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171A1D] tracking-tight mb-4">
              Building, testing, <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#557487]">improving.</span>
            </h2>
            <p className="text-base text-[#626B73] max-w-xl">
              A few of the businesses I’ve worked with, where I helped grow their online presence, improve performance and create a stronger digital foundation.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-2 p-1.5 rounded-full bg-[#EAEAE6] border border-[#DFE2E2] self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#171A1D] shadow-sm'
                  : 'text-[#626B73] hover:text-[#171A1D]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('ecommerce')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'ecommerce'
                  ? 'bg-white text-[#171A1D] shadow-sm'
                  : 'text-[#626B73] hover:text-[#171A1D]'
              }`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setFilter('tourism')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'tourism'
                  ? 'bg-white text-[#171A1D] shadow-sm'
                  : 'text-[#626B73] hover:text-[#171A1D]'
              }`}
            >
              Tourism & Charters
            </button>
          </div>
        </div>

        {/* Featured Case Study Hero (Embellish Gold - as shown in visual reference 1) */}
        {filter === 'all' && (
          <div className="mb-16 bg-white rounded-2xl border border-[#DFE2E2] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden transition-all hover:border-[#C5CACB]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Laptop Display Showcase (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-[#F2F2EE]/80 border-b lg:border-b-0 lg:border-r border-[#DFE2E2]">
                <div className="relative group cursor-pointer" onClick={() => onSelectProject(featuredProject)}>
                  {/* Laptop Mockup Container */}
                  <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-[#171A1D] bg-[#171A1D]">
                    <div className="w-full bg-[#2A2E33] px-3 py-1.5 flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                      <span className="text-[10px] text-[#A0ABB2] font-mono mx-auto truncate pr-6">
                        embellishgold.com — UAE Luxury Jewellery
                      </span>
                    </div>
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.imageAlt}
                      className="w-full h-auto aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  {/* Subtle hover prompt */}
                  <div className="absolute inset-0 bg-[#171A1D]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-[#171A1D] text-white text-xs font-medium shadow-lg">
                      View Full Case Study
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Information Details (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#557487]">
                      FEATURED CASE STUDY · 01
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Completed Project
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171A1D] mb-2 hover:text-[#557487] transition-colors cursor-pointer" onClick={() => onSelectProject(featuredProject)}>
                    {featuredProject.title}
                  </h3>

                  <p className="text-xs text-[#557487] font-medium tracking-wide mb-4">
                    E-commerce Growth · Ads · Website · Business Profile
                  </p>

                  <p className="text-sm text-[#626B73] leading-relaxed mb-8">
                    Helped Embellish Gold increase sales by 40% within 3 months and achieve a 7X ROAS within 5 months. Also optimized their business profiles and developed their website to strengthen their online presence.
                  </p>

                  {/* Reported Outcomes Statistics */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#DFE2E2] mb-8">
                    <div>
                      <div className="font-serif text-3xl lg:text-4xl font-normal text-[#171A1D]">
                        +40%
                      </div>
                      <p className="text-xs font-medium text-[#171A1D] mt-1">Sales growth</p>
                      <p className="text-[11px] text-[#8C969E]">in 3 months</p>
                    </div>

                    <div>
                      <div className="font-serif text-3xl lg:text-4xl font-normal text-[#171A1D]">
                        7X
                      </div>
                      <p className="text-xs font-medium text-[#171A1D] mt-1">ROAS achieved</p>
                      <p className="text-[11px] text-[#8C969E]">in 5 months</p>
                    </div>
                  </div>
                </div>

                {/* Case study trigger button */}
                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="group inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#F7F7F4] hover:bg-[#EAEAE6] border border-[#DFE2E2] transition-colors cursor-pointer"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#171A1D]">
                    Read Detailed Case Study & Strategy
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#171A1D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Project Grid for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-[#DFE2E2] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#557487]/50 hover:shadow-lg cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F2EE] border-b border-[#DFE2E2]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold text-[#171A1D] border border-black/5">
                  {project.number}
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md backdrop-blur-md ${
                      project.status === 'Pre-Launch'
                        ? 'bg-amber-100/90 text-amber-900 border border-amber-200'
                        : 'bg-white/90 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-wider text-[#557487] uppercase mb-1.5">
                    {project.industry}
                  </p>
                  
                  <h3 className="font-serif text-xl font-normal text-[#171A1D] mb-2 group-hover:text-[#557487] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#626B73] line-clamp-3 mb-6 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Outcome badge & action button */}
                <div className="pt-4 border-t border-[#DFE2E2]/60 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-lg font-normal text-[#171A1D]">
                      {project.reportedOutcomes[0]?.value}
                    </span>
                    <span className="text-[11px] text-[#626B73] ml-1.5">
                      {project.reportedOutcomes[0]?.label}
                    </span>
                  </div>

                  <span className="p-2 rounded-full bg-[#F7F7F4] group-hover:bg-[#171A1D] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
