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
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
      }}
    />
  );
}
