"use client";

import { FormEvent, useState } from "react";

export default function Inquire() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, handle submission logic here
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFFFFF] items-center justify-center px-6 py-24 md:py-32">
      <div className="w-full max-w-2xl">
        {/* Editorial Header */}
        <h1 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] mb-16 text-center md:text-left leading-tight">
          We don't take orders.<br />
          We begin <i className="text-[var(--color-brand-primary)]">conversations</i>.
        </h1>

        {submitted ? (
          <div className="border border-[var(--color-border-light)] border-[0.5px] p-12 text-center animate-[fadeIn_1s_ease-out_both]">
            <p className="font-serif text-2xl text-[var(--color-text-primary)] mb-4">Your letter has been sent.</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">We will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-full animate-[fadeIn_1s_ease-out_both]">
            {/* Form Fields */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-8">
              <div className="flex-1 relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] py-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300 placeholder-transparent"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] transition-all duration-300 peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-[var(--color-brand-primary)] peer-[not(:placeholder-shown)]:-top-4 peer-[not(:placeholder-shown)]:text-[8px]"
                >
                  Name
                </label>
              </div>
              
              <div className="flex-1 relative group">
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] py-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300 placeholder-transparent"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] transition-all duration-300 peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-[var(--color-brand-primary)] peer-[not(:placeholder-shown)]:-top-4 peer-[not(:placeholder-shown)]:text-[8px]"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea 
                id="space"
                required
                rows={4}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] py-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300 placeholder-transparent resize-none"
              ></textarea>
              <label 
                htmlFor="space" 
                className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] transition-all duration-300 peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-[var(--color-brand-primary)] peer-[not(:placeholder-shown)]:-top-4 peer-[not(:placeholder-shown)]:text-[8px]"
              >
                Tell us about the space
              </label>
            </div>

            <div className="relative group">
              <select 
                id="source"
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] py-4 text-xs uppercase tracking-[0.1em] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300 appearance-none rounded-none"
              >
                <option value="" disabled className="text-[var(--color-text-secondary)]">How did you hear about us</option>
                <option value="exhibition">An Exhibition</option>
                <option value="architect">My Architect / Designer</option>
                <option value="press">Press / Editorial</option>
                <option value="other">Other</option>
              </select>
              {/* Custom select arrow */}
              <div className="absolute right-0 top-4 pointer-events-none text-[var(--color-text-secondary)] text-xs">
                ▼
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[var(--color-brand-primary)] text-white text-xs uppercase tracking-[0.2em] py-6 hover:bg-[var(--color-brand-hover)] transition-colors duration-500 rounded-none border-none mt-8"
            >
              Send a letter →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
