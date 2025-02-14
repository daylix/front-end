'use client';

import React, { useState } from 'react';
import {
  Heart,
  MoreVertical,
  Eye as EyeIcon,
  MessageSquare,
  ThumbsDown,
} from 'lucide-react';
import { Button, Avatar } from '@daylix-ui/components';
import Link from 'next/link';
import CardContainer from '../card-container';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ru, uk } from 'date-fns/locale';
import { ClientBlocksRenderer } from '@daylix/core';

interface PostProps {
  id: string;
  slug: string;
  avatar: string;
  name: string;
  title: string;
  category: string;
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
    <CardContainer className="bg-[#1a1a1a] text-gray-200 p-5 rounded-[24px]">
      <article className="flex flex-col gap-6">
        {/* Header with avatar and category */}
        <header className="flex items-center gap-3">
          <Avatar
            src={avatar}
            letters={!avatar ? name.charAt(0).toUpperCase() : undefined}
            border={true}
            borderColor="primary"
            color="neutral"
            shape="circle"
            size="sm"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-100">{name}</span>
            </div>
            <span className="text-sm text-gray-500">
              {category && (
                <Link
                  href={`/category/${category}`}
                  className="text-gray-400 hover:underline"
                >
                  {category}
                </Link>
              )}
              {category && ' '}
              {formattedDate}
            </span>
          </div>
          <Button
            color="ghost"
            size="sm"
            className="ml-auto text-gray-400 hover:text-gray-300"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </header>

        <Link
          href={`/${locale}/post/${encodeURIComponent(slug)}`}
          scroll={true}
          prefetch={true}
        >
          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-[28px] font-semibold leading-tight text-gray-100">
              {title}
            </h2>
          </div>

          {/* Content */}
          <div className="text-gray-400 mt-4 text-[15px] leading-relaxed">
            <ClientBlocksRenderer content={preview} />
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
        <footer className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-6">
            <Button
              color="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              color="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300"
            >
              <ThumbsDown className="h-5 w-5" />
            </Button>
            <Button
              color="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300"
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-400">255</span>
          </div>
        </footer>
      </article>
    </CardContainer>
  );
};

export default PostCard;
