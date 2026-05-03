"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  width?: number;
  height?: number;
}

const LazyImage = ({ src, alt, className, placeholderColor = "bg-muted", width = 800, height = 600 }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className || ""}`}>
      {!isLoaded && <div className={`absolute inset-0 ${placeholderColor} animate-pulse`} />}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
};

export default LazyImage;
