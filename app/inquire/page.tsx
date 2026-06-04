"use client";

import UnderlineText from "@/components/ui/UnderlineText";
import { FormEvent, useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";



export default function Inquire() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const location = formData.get("location") as string;
    formData.set("subject", `Inquiry from ${location}`);

    try {
      const res = await sendContactEmail(formData);
      if (res.success) { 
        setSubmitted(true);
      } else {
        setError(res.error || "Failed to transmit message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-53px)] bg-[#FFFFFF] items-center py-24 md:py-32 px-6">
      <div className="w-full max-w-2xl">
        {/* Editorial Header */}
        <h1 className="font-serif text-[48px] md:text-[64px] text-[var(--color-text-primary)] mb-8 leading-[1.1]">
          Start the <UnderlineText text="conversation." variant="color" />
          <br />
          We’ll handle the rest.
        </h1>
        
        <p className="text-[16px] text-[var(--color-text-primary)] leading-[1.9] mb-16 max-w-lg">
          To acquire a <UnderlineText text="Contradiction" variant="underline"/> piece, tell us about the architecture and intent of your space. We will take it from there.
        </p>

        {submitted ? (
          <div className="border border-[var(--color-border-light)] border-[0.5px] p-12 text-center animate-[fadeIn_1s_ease-out_both]">
            <p className="font-serif italic text-2xl text-[var(--color-text-primary)] mb-4">Your inquiry has been sent.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-16 w-full animate-[fadeIn_1s_ease-out_both]">
            
            <div className="flex flex-col gap-12">
              <input 
                name="name"
                type="text" 
                placeholder="Full name"
                required
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />
              
              <input 
                name="email"
                type="email" 
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />

              <input 
                name="phone"
                type="tel" 
                placeholder="Phone number"
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />
              
              <input 
                name="location"
                type="text" 
                placeholder="City / Country"
                required
                className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300"
              />
            </div>

            <textarea 
              name="message"
              placeholder="Tell us about the space"
              required
              rows={6}
              className="w-full bg-transparent border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors duration-300 resize-none"
            ></textarea>
            {error && (
              <p className="text-[12px] text-[var(--color-brand-primary)] uppercase tracking-[0.2em] text-center font-medium animate-[fadeIn_0.5s_ease-out]">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-6 mt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-brand-primary)] text-white text-[10px] uppercase tracking-[0.3em] py-6 hover:bg-[var(--color-brand-hover)] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending inquiry..." : "Send inquiry →"}
              </button>
              <p className="font-serif italic text-[24px] text-[var(--color-text-secondary)] text-center">
                We respond to every inquiry within 2 days.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
