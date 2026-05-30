"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

interface ProtectedImageProps {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

export default function ProtectedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  sizes,
  priority,
}: ProtectedImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        className={className}
        sizes={sizes}
        priority={priority}
        quality={40}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div 
        className="absolute inset-0 z-10"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </>
  );
}
