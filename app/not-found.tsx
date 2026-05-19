import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-background">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-serif italic text-(--color-text-primary) mb-8 leading-relaxed">
          404<br />
          Nothing here.
        </h1>
        <p className="text-[14px] text-(--color-text-secondary) mb-12 max-w-md">
          The requested path leads nowhere. It may have been moved, or it simply never existed.
        </p>
        
        <Link 
          href="/" 
          className="text-(--color-brand-primary) text-[10px] uppercase tracking-[0.3em] hover:text-(--color-brand-hover) transition-colors"
        >
          Return to Main →
        </Link>
      </div>
    </div>
  );
}
