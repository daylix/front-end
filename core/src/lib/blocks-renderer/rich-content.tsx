'use client';

import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';
import BlockImage from './block-image';

type BlocksRendererProps = {
  content: BlocksContent;
};

export default function RichContent({ content }: BlocksRendererProps) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="my-3">{children}</p>,
        quote: (props) => <blockquote>{props.children}</blockquote>,
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
            case 5:
              return <h5 className="text-lg font-medium mb-2 mt-4">{children}</h5>;
            case 6:
              return <h6 className="text-base font-medium mb-1 mt-3">{children}</h6>;
            default:
              return <p className="text-lg font-medium mb-3 mt-4">{children}</p>;
          }
        },
        list: (props) => {
          if (props.format === 'ordered') {
            return <ol className="list-decimal list-inside">{props.children}</ol>;
          }

          return <ul className="list-disc list-inside">{props.children}</ul>;
        },
        'list-item': (props) => <li className="my-1">{props.children}</li>,
        image: ({ image }) => <BlockImage image={image} />,
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <u className="underline">{children}</u>,
        strikethrough: ({ children }) => <del className="line-through">{children}</del>,
        code: ({ children }) => <code className="font-mono text-sm bg-gray-100 rounded px-1 py-0.5">{children}</code>,
      }}
    />
  );
}
