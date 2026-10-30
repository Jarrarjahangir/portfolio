import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#171A1D]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F7F4] rounded-2xl border border-[#DFE2E2] shadow-2xl p-6 sm:p-8 lg:p-10 text-[#171A1D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white hover:bg-[#E8E8E4] border border-[#DFE2E2] text-[#171A1D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#557487] cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs font-semibold text-[#557487]">
              PROJECT {project.number}
            </span>
            <span className="text-[#8C969E]">•</span>
            <span className="text-xs uppercase tracking-wider text-[#626B73] font-medium">
              {project.industry}
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                project.status === 'Pre-Launch'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}
            >
              {project.status}
            </span>
          </div>

          <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#171A1D] mb-2">
            {project.title}
          </h2>
          <p className="text-base text-[#626B73]">
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Preview */}
        <div className="mb-8 rounded-xl overflow-hidden border border-[#DFE2E2] bg-white shadow-sm">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-auto max-h-[420px] object-cover object-top"
          />
        </div>

        {/* Reported Metrics Cards */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-[#8C969E] uppercase mb-4">
            REPORTED OUTCOMES & METRICS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.reportedOutcomes.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-[#DFE2E2] shadow-sm">
                <div className="font-serif text-3xl font-normal text-[#171A1D] mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#171A1D] mb-2">
                  {metric.label}
                </div>
                {metric.disclaimer && (
                  <p className="text-[11px] text-[#626B73] leading-relaxed">
                    {metric.disclaimer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-[#F2F2EE] border border-[#DFE2E2]/80">
            <h4 className="text-xs font-semibold tracking-wider text-[#171A1D] uppercase mb-2">
              The Challenge
            </h4>
            <p className="text-sm text-[#626B73] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#DFE2E2]">
            <h4 className="text-xs font-semibold tracking-wider text-[#171A1D] uppercase mb-2">
              The Execution & Strategy
            </h4>
            <p className="text-sm text-[#626B73] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Specific Role & Contributions */}
        <div className="mb-8 p-6 rounded-xl bg-white border border-[#DFE2E2]">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#8C969E] uppercase mb-4">
            ROLE & DIRECT CONTRIBUTIONS ({project.role})
          </h4>
          <ul className="space-y-3">
            {project.contributions.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-[#171A1D]">
                <CheckCircle2 className="w-4 h-4 text-[#557487] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transparent Disclaimer Box */}
        {project.disclaimer && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#626B73] flex items-start space-x-2.5 mb-8">
            <AlertCircle className="w-4 h-4 text-[#557487] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-medium text-[#171A1D]">Data Transparency Notice:</strong> {project.disclaimer}
            </p>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#DFE2E2] flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-[#626B73] bg-[#F2F2EE] px-3 py-1 rounded-full border border-[#DFE2E2]"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#171A1D] text-white text-xs font-medium hover:bg-[#2C3338] transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
