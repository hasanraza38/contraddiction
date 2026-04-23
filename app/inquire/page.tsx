"use client";

import { FormEvent, useState } from "react";

export default function Inquire() {
  const [submitted, setSubmitted] = useState(false);
  const [designerStatus, setDesignerStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-53px)] bg-[#FFFFFF] items-center py-24 md:py-32 px-6">
      <div className="w-full max-w-2xl">
        {/* Editorial Header */}
        <h1 className="font-serif text-[48px] md:text-[64px] text-[var(--color-text-primary)] mb-8 leading-[1.1]">
          We don't take orders.<br />
          We begin conversations.
        </h1>
        
        <p className="text-[16px] text-[var(--color-text-primary)] leading-[1.9] mb-16 max-w-lg">
          Contradiction accepts a limited number of commissions each year. If you are considering one, tell us about the space, not the piece. We will take it from there.
        </p>

        {submitted ? (
          <div className="border border-[var(--color-border-light)] border-[0.5px] p-12 text-center animate-[fadeIn_1s_ease-out_both]">
            <p className="font-serif italic text-2xl text-[var(--color-text-primary)] mb-4">Your letter has been sent.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-16 w-full animate-[fadeIn_1s_ease-out_both]">
            
            <div className="flex flex-col gap-12">
              <input 
                type="text" 
                placeholder="Full name"
                required
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />
              
              <input 
                type="email" 
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />
              
              <input 
                type="text" 
                placeholder="City / Country"
                required
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />
            </div>

            <textarea 
              placeholder="Tell us about the space"
              required
              rows={6}
              className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300 resize-none"
            ></textarea>

            <div className="relative group border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4">
              <select 
                required
                defaultValue=""
                className="w-full bg-transparent text-[14px] text-[var(--color-text-primary)] focus:outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-[var(--color-text-secondary)]">How did you come to know us?</option>
                <option value="client">Through a client</option>
                <option value="architect">Through an architect</option>
                <option value="word">By word of mouth</option>
                <option value="cannot-say">I cannot say</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-secondary)] text-[10px]">
                ▼
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[14px] text-[var(--color-text-secondary)]">Are you working with an architect or interior designer?</span>
              <div className="flex gap-8">
                {['Yes', 'No', 'Prefer not to say'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDesignerStatus(option)}
                    className={`relative text-[14px] transition-colors duration-300 pb-1 ${designerStatus === option ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
                  >
                    {option}
                    {designerStatus === option && (
                      <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)]"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <button 
                type="submit"
                className="w-full bg-[var(--color-brand-primary)] text-white text-[10px] uppercase tracking-[0.3em] py-6 hover:bg-[var(--color-brand-hover)] transition-colors duration-500"
              >
                Send a letter →
              </button>
              <p className="font-serif italic text-[14px] text-[var(--color-text-secondary)] text-center">
                We respond to every letter within 14 days. We do not follow up.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
