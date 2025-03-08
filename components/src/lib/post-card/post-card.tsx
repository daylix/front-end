'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ru, uk } from 'date-fns/locale';
import { RichContent } from '@daylix/core';
import PostHeader from '../post-header';
import PostFooter from '../post-footer';
import CardContainer from '../card-container';

interface PostProps {
  id: string;
  slug: string;
  avatar: string;
  name: string;
  title: string;
  category: string;
  categorySlug: string;
  content: BlocksContent;
  cover?: string;
  youtube?: string;
  locale: string;
  createdAt: any;
}

function getContentPreview(
  content: BlocksContent,
  maxLength = 150
): BlocksContent {
  let textLength = 0;
  const previewBlocks = [];

  for (const block of content) {
    if (textLength >= maxLength && block.type !== 'image') break;

    if (block.type === 'paragraph') {
      const text = block.children
      .filter((child) => typeof child === 'object' && 'text' in child)
      .map((child) =>
        typeof child === 'object' && 'text' in child ? child.text : ''
      )
      .join('');

      if (textLength + text.length <= maxLength) {
        previewBlocks.push(block);
        textLength += text.length;
      } else {
        const remainingLength = maxLength - textLength;
        const truncatedText = text.slice(0, remainingLength) + '...';
        previewBlocks.push({
          type: 'paragraph',
          children: [{ type: 'text' as const, text: truncatedText }],
        });
        break;
      }
    } else if (block.type === 'image') {
      previewBlocks.push({
        type: 'image',
        image: {
          ...block.image,
          url: block.image.url,
          width: 600,
          height: 400,
          alt: block.image.alternativeText || '',
        },
      });
    }
  }

  return previewBlocks as BlocksContent;
}

const PostCard: React.FC<PostProps> = ({
  slug,
  avatar,
  name,
  title,
  category,
  categorySlug,
  content,
  cover,
  locale,
  createdAt,
}) => {
  const preview = getContentPreview(content);
  const parsedDate = parseISO(createdAt);
  const formattedDate = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    locale: locale === 'ru' ? ru : uk,
  });

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <CardContainer className="text-gray-200 p-5 rounded-[24px]">
      <article className="flex flex-col gap-6">
        {/* Header with avatar and category */}
        <PostHeader 
          avatar={avatar}
          name={name}
          category={category}
          categorySlug={categorySlug}
          formattedDate={formattedDate}
        />

        <Link
          href={`/${locale}/post/${encodeURIComponent(slug)}`}
          scroll={true}
          prefetch={true}
        >
          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-[22px] leading-[30px] font-medium text-gray-100">
              {title}
            </h2>
          </div>

          {/* Content */}
          <div className="text-gray-300 mt-4 text-[17px] leading-[26px] font-light">
            <RichContent content={preview} />
          </div>

          {/* Cover image */}
          {cover && (
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden relative">
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
              )}

              <Image
                src={cover}
                alt={title}
                width={600}
                height={330}
                className={`w-full h-full object-cover transition-opacity duration-500
                  ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                sizes="(max-width: 600px) 100vw, 600px"
                onLoad={() => setIsImageLoaded(true)}
                quality={85}
              />
            </div>
          )}
        </Link>

        {/* Footer with interaction buttons */}
        <PostFooter />
      </article>
    </CardContainer>
  );
};

export default PostCard;
