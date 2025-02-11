'use client';

import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { useState } from 'react';

interface BlockImageProps {
  image: {
    url: string;
    alternativeText?: string | null;
  };
}

const BlockImage = ({ image }: BlockImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <div className="w-full flex justify-center">
      <Image
        src={image.url}
        alt={image.alternativeText || ''}
        width={600}
        height={330}
        className={`max-w-full h-auto object-contain transition-opacity duration-500
          ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        quality={85}
        sizes="(max-width: 600px) 100vw, 600px"
        unoptimized={true}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

type ClientBlocksRendererProps = {
  content: BlocksContent;
};

export default function ClientBlocksRenderer({ content }: ClientBlocksRendererProps) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="my-4">{children}</p>,
        link: ({ children, url }) => <a href={url} className="text-blue-500 hover:underline">{children}</a>,
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>;
            case 2:
              return <h2 className="text-3xl font-semibold mb-5 mt-7">{children}</h2>;
            case 3:
              return <h3 className="text-2xl font-medium mb-4 mt-6">{children}</h3>;
            case 4:
              return <h4 className="text-xl font-medium mb-3 mt-5">{children}</h4>;
            default:
              return <p className="text-lg font-medium mb-3 mt-4">{children}</p>;
          }
        },
        image: ({ image }) => <BlockImage image={image} />,
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
      }}
    />
  );
}
