import React from 'react';

export const ApproachBanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#171A1D] text-white relative overflow-hidden">
      {/* Subtle architectural background texture / geometric grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-4">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] text-[#8C969E] uppercase block mb-3">
              MY APPROACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white">
              Strategy. <br />
              Execution. <br />
              <span className="font-serif italic text-[#8FAFC4]">Real Impact.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-white/10">
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-[#D1D7DC] leading-relaxed mb-6">
              "I focus on understanding the business, building a clear strategy, and executing it with discipline to deliver measurable results."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-xs font-mono text-[#8FAFC4] block mb-1">01 / DIAGNOSIS</span>
                <p className="text-xs text-[#9DA8B0] leading-normal">
                  Deeply evaluating customer bottlenecks, conversion leakage, and market positioning before touching a single line of copy or code.
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#8FAFC4] block mb-1">02 / ARCHITECTURE</span>
                <p className="text-xs text-[#9DA8B0] leading-normal">
                  Building cohesive digital infrastructure — from high-converting Shopify storefronts to high-intent paid acquisition funnels.
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#8FAFC4] block mb-1">03 / COMPOUNDING</span>
                <p className="text-xs text-[#9DA8B0] leading-normal">
                  Testing, measuring, automating, and iterating with discipline so performance strengthens month after month.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
