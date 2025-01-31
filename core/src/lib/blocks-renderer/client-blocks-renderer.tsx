'use client';

import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';

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
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
      }}
    />
  );
}
