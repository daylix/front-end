'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface BlockImageProps {
  image: {
    url: string;
    alternativeText?: string | null;
  };
}

const BlockImage: React.FC<BlockImageProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
    img.src = image.url;
  }, [image.url]);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current && dimensions.width && dimensions.height) {
        const containerWidth = containerRef.current.offsetWidth;
        const maxHeight = Math.min(600, window.innerHeight * 0.8);

        let imageHeight = (containerWidth / dimensions.width) * dimensions.height;
        imageHeight = Math.min(imageHeight, maxHeight);

        containerRef.current.style.height = `${imageHeight}px`;
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-video max-h-[600px] rounded-2xl overflow-hidden relative flex items-center justify-center bg-gray-800 transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />
      <Image
        src={image.url}
        alt={image.alternativeText || ''}
        layout="fill"
        objectFit="contain"
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        quality={85}
        unoptimized={true}
      />
    </div>
  );
};

export default BlockImage;
