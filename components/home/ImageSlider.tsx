"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images?: string[];
  interval?: number;
}

export default function ImageSlider({
  images = [
    "https://darkgreen-deer-608928.hostingersite.com/wp-content/uploads/2026/05/bed1-3.jpeg",
    "https://images.unsplash.com/photo-1676807882739-d4c9deaf1fee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1640357960494-9242650846d3?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  interval = 5000,
}: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [images.length, interval]);

  const goTo = (index: number) => setActiveIndex(index);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-black/50" />

        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 pointer-events-auto">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-1 w-1 rounded-full transition-colors ${index === activeIndex ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
