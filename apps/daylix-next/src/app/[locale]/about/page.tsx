'use client';

import { GetAboutQuery, GetAboutQueryVariables } from '@daylix/core/graphql/generated';
import { client } from '@daylix/core';
import { gql, useQuery } from "@apollo/client";
import { useParams } from 'next/navigation';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { ReactNode } from 'react';

export const GET_ABOUT = gql`
  query GetAbout($locale: I18NLocaleCode!) {
    about(locale: $locale) {
      title
      content
    }
  }
`;

const convertStringToBlocks = (content: string) => {
  return [
    {
      type: 'paragraph',
      children: [{ type: 'text', text: content }],
    },
  ];
};

export default function AboutPage() {
  const { locale } = useParams();
  const { loading, error, data } = useQuery<GetAboutQuery, GetAboutQueryVariables>(GET_ABOUT, {
    variables: { locale },
    client: client
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const about = data?.about;

  if (!about) return <p>No about data found</p>;

  return (
    <main>
      <section>
        <div className="container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12 font-work">
          <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">{about.title}</h3>
          <div className="mt-8">
            <BlocksRenderer
              content={about.content}
              blocks={{
                paragraph: ({ children }: { children: ReactNode }) => <p className="my-4">{children}</p>,
                link: ({ children, url }: { children: ReactNode, url: string }) => <a href={url} className="text-blue-500 hover:underline">{children}</a>,
              }}
              modifiers={{
                bold: ({ children }: { children: ReactNode }) => <strong className="font-bold">{children}</strong>,
                italic: ({ children }: { children: ReactNode }) => <em className="italic">{children}</em>,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
