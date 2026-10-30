import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'work', 'achievements', 'vaxion', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'VAXION', href: '#vaxion', id: 'vaxion' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F7F4]/90 backdrop-blur-md border-b border-[#DFE2E2] shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#557487] rounded-sm"
            aria-label="Jarrar Jahangir - Home"
          >
            <span className="font-sans text-xs tracking-[0.24em] font-semibold text-[#171A1D] uppercase transition-colors group-hover:text-[#557487]">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs tracking-[0.08em] font-medium transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#557487] rounded-sm ${
                    isActive ? 'text-[#171A1D]' : 'text-[#626B73] hover:text-[#171A1D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#171A1D]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Let's Connect */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#171A1D] text-white text-xs font-medium tracking-wide hover:bg-[#2C3338] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#171A1D] cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-[#171A1D] hover:text-[#557487] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#557487] rounded cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#171A1D]/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#F7F7F4] shadow-2xl p-6 flex flex-col justify-between border-l border-[#DFE2E2]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#DFE2E2]">
                <span className="font-sans text-xs tracking-[0.2em] font-semibold text-[#171A1D] uppercase">
                  {PERSONAL_INFO.name}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#626B73] hover:text-[#171A1D] focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-serif font-medium text-[#171A1D] hover:text-[#557487] py-2 border-b border-[#DFE2E2]/60 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#DFE2E2] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-[#171A1D] text-white text-xs font-medium tracking-wide hover:bg-[#2C3338] transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-[#626B73] tracking-wide">
                {PERSONAL_INFO.locationDetail}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
