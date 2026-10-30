import React, { useState } from 'react';
import { MapPin, Send, CheckCircle, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'E-commerce Growth',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Realistic feedback simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'E-commerce Growth',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F7F4] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171A1D] tracking-tight mb-4">
            Have a project, an idea, or an interesting problem to solve? <br />
            <span className="font-serif italic text-[#557487]">Let’s connect.</span>
          </h2>
          <p className="text-base text-[#626B73]">
            Whether you represent a growing brand looking to scale digital revenue, a founder seeking strategic collaboration, or an admissions committee, I welcome thoughtful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE2E2] shadow-sm space-y-5">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-[#8C969E] uppercase">
                DIRECT CONTACT CHANNELS
              </h3>

              {/* Email Address with Copy Helper */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#626B73] block">Direct Email</span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2]">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm text-[#171A1D] hover:text-[#557487] transition-colors truncate pr-2 font-medium"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-md hover:bg-white text-[#626B73] hover:text-[#171A1D] transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-600 font-medium">Email copied to clipboard!</p>
                )}
              </div>

              {/* WhatsApp Direct */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#626B73] block">WhatsApp Business / Direct</span>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2] hover:border-emerald-600 transition-colors group"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-[#171A1D] block">
                        {PERSONAL_INFO.whatsapp}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-medium block">
                        Chat directly on WhatsApp
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8C969E] group-hover:text-emerald-700 transition-colors" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#626B73] block">Professional Profile</span>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2] hover:border-[#557487] transition-colors group"
                >
                  <div className="flex items-center space-x-2.5">
                    <svg className="w-4 h-4 text-[#557487]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-xs sm:text-sm font-medium text-[#171A1D]">
                      linkedin.com/in/jarrarjahangir
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8C969E] group-hover:text-[#171A1D] transition-colors" />
                </a>
              </div>

              {/* Social Channels Strip (@jarrarjahangir) */}
              <div className="space-y-2 pt-2 border-t border-[#DFE2E2]/60">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider text-[#8C969E] uppercase">
                    SOCIAL CHANNELS
                  </span>
                  <span className="font-mono text-xs text-[#557487] font-medium">
                    {PERSONAL_INFO.handle}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://instagram.com/jarrarjahangir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F7F4] hover:bg-[#EAEAE6] border border-[#DFE2E2] text-xs text-[#171A1D] transition-colors group"
                  >
                    <span className="font-medium">Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C969E] group-hover:text-[#171A1D]" />
                  </a>

                  <a
                    href="https://tiktok.com/@jarrarjahangir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F7F4] hover:bg-[#EAEAE6] border border-[#DFE2E2] text-xs text-[#171A1D] transition-colors group"
                  >
                    <span className="font-medium">TikTok</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C969E] group-hover:text-[#171A1D]" />
                  </a>

                  <a
                    href="https://threads.net/@jarrarjahangir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F7F4] hover:bg-[#EAEAE6] border border-[#DFE2E2] text-xs text-[#171A1D] transition-colors group"
                  >
                    <span className="font-medium">Threads</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C969E] group-hover:text-[#171A1D]" />
                  </a>

                  <a
                    href="https://facebook.com/jarrarjahangir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F7F4] hover:bg-[#EAEAE6] border border-[#DFE2E2] text-xs text-[#171A1D] transition-colors group"
                  >
                    <span className="font-medium">Facebook</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C969E] group-hover:text-[#171A1D]" />
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="pt-3 border-t border-[#DFE2E2]/60 flex items-start space-x-3 text-xs text-[#626B73]">
                <MapPin className="w-4 h-4 text-[#557487] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#171A1D]">Based in Pakistan</p>
                  <p className="text-[11px] text-[#8C969E] mt-0.5">Operating across PKT (UTC+5), GST (UTC+4), and global timezones.</p>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-5 rounded-2xl bg-[#F2F2EE] border border-[#DFE2E2] text-xs text-[#626B73] space-y-1">
              <p className="font-medium text-[#171A1D]">Response Time</p>
              <p className="leading-relaxed">
                I personally review all inquiries. Inquiries regarding client projects or strategic partnerships typically receive a response within 24 to 48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#DFE2E2] shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <h3 className="font-serif text-2xl font-normal text-[#171A1D] mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-[#626B73] mb-8">
              Fill in your details below and I'll get back to you promptly.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-normal text-[#171A1D]">
                  Message Received
                </h4>
                <p className="text-sm text-[#626B73] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I’ve logged your note and will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#171A1D] text-white text-xs font-medium hover:bg-[#2C3338] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-medium text-[#171A1D]">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2] text-sm text-[#171A1D] placeholder:text-[#8C969E] focus:outline-none focus:border-[#557487] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-medium text-[#171A1D]">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2] text-sm text-[#171A1D] placeholder:text-[#8C969E] focus:outline-none focus:border-[#557487] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs font-medium text-[#171A1D]">
                    Nature of Inquiry
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2] text-sm text-[#171A1D] focus:outline-none focus:border-[#557487] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="E-commerce Growth">E-commerce Growth & Marketing</option>
                    <option value="Website Development">Website Development & Redesign</option>
                    <option value="Lead Generation">Lead Generation Funnels</option>
                    <option value="Automation & AI">Automation & Process Systems</option>
                    <option value="Partnership / Advisory">Partnership or Strategic Advisory</option>
                    <option value="University / Academic">University Admissions or Academic</option>
                    <option value="Other">Other Conversation</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-medium text-[#171A1D]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me a bit about your business, goal, or what you'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#DFE2E2] text-sm text-[#171A1D] placeholder:text-[#8C969E] focus:outline-none focus:border-[#557487] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-6 rounded-full bg-[#171A1D] text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-[#2C3338] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
