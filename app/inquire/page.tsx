import type { Metadata } from "next";
import UnderlineText from "@/components/ui/UnderlineText";
import InquireForm from "@/components/inquire/InquireForm";

export const metadata: Metadata = {
  title: "Inquire Privately",
  description: "Acquire a Contradictions piece. Tell us about the architecture and intent of your space to initiate a private consultation.",
  openGraph: {
    title: "Inquire Privately",
    description: "Acquire a Contradictions piece. Tell us about the architecture and intent of your space to initiate a private consultation.",
    url: "https://contradictions.pk/inquire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inquire Privately",
    description: "Acquire a Contradictions piece. Tell us about the architecture and intent of your space to initiate a private consultation.",
  },
};

export default function Inquire() {
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
          To acquire a <UnderlineText text="Contradictions" variant="underline"/> piece, tell us about the architecture and intent of your space. We will take it from there.
        </p>

        <InquireForm />
      </div>
    </div>
  );
}
