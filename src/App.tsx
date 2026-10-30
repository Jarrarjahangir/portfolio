import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FocusLocationStrip } from './components/FocusLocationStrip';
import { MetricsBanner } from './components/MetricsBanner';
import { ApproachBanner } from './components/ApproachBanner';
import { AboutSection } from './components/AboutSection';
import { SelectedWork } from './components/SelectedWork';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { VaxionSection } from './components/VaxionSection';
import { FutureDirection } from './components/FutureDirection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './types';

export function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#171A1D] selection:bg-[#557487] selection:text-white flex flex-col font-sans">
      {/* Primary Sticky Editorial Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with authentic portrait and reference layout */}
        <Hero onExploreWork={handleExploreWork} onOpenContact={handleOpenContact} />

        {/* 2. Focused On & Location Strip */}
        <FocusLocationStrip />

        {/* 3. Real Work & Quantified Metrics Banner */}
        <MetricsBanner onExploreWork={handleExploreWork} />

        {/* 4. Strategy, Execution, Real Impact Approach */}
        <ApproachBanner />

        {/* 5. Biography & About Me */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* 6. Selected Work & Case Studies Showcase */}
        <SelectedWork onSelectProject={(project) => setActiveProject(project)} />

        {/* 7. What I Do: From Strategy to Execution */}
        <CapabilitiesSection onOpenContact={handleOpenContact} />

        {/* 8. Achievements, Honors & Milestones */}
        <AchievementsSection />

        {/* 9. Dedicated VAXION Advertisements Showcase */}
        <VaxionSection onOpenContact={handleOpenContact} />

        {/* 10. Personal Interests & Future Direction */}
        <FutureDirection />

        {/* 11. Contact & Conversation Invitation */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* In-depth Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default App;
