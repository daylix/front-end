import React from 'react';
import { Heart, MessageSquare, Eye, MoreVertical, ThumbsDown } from 'lucide-react';
import { Button } from '@daylix-ui/components';
import Link from 'next/link';
import CardContainer from '../card-container';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ClientBlocksRenderer } from '@daylix/core';

// Old interfaces
interface PostProps {
  id: string;
  avatar: string;
  name: string;
  category: string;
  time: string;
  title: string;
  content: string | BlocksContent;
  image?: string;
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  views: number;
  locale: string;
}

// New interfaces for Strapi
interface StrapiImage {
  url: string;
}

interface Category {
  name: string;
}

interface User {
  username: string;
  email: string;
  avatar: StrapiImage;
}

interface StrapiPostProps {
  id: string;
  slug: string;
  avatar: string;
  name: string;
  title: string;
  category: string;
  content: BlocksContent;
  cover?: string;
  locale: string;
}

// Helper function to get preview from Strapi blocks content
function getContentPreview(content: BlocksContent, maxLength: number = 150): BlocksContent {
  let textLength = 0;
  const previewBlocks = [];

  for (const block of content) {
    if (textLength >= maxLength) break;

    if (block.type === 'paragraph') {
      const text = block.children
        .filter(child => typeof child === 'object' && 'text' in child)
        .map(child => (typeof child === 'object' && 'text' in child) ? child.text : '')
        .join('');

      if (textLength + text.length <= maxLength) {
        previewBlocks.push(block);
        textLength += text.length;
      } else {
        const remainingLength = maxLength - textLength;
        const truncatedText = text.slice(0, remainingLength) + '...';
        previewBlocks.push({
          type: 'paragraph',
          children: [{ type: 'text' as const, text: truncatedText }]
        });
        break;
      }
    }
  }

  return previewBlocks as BlocksContent;
}

// New component implementation with Strapi data
const PostCard: React.FC<StrapiPostProps> = ({
  id,
  slug,
  avatar,
  name,
  category,
  title,
  content,
  cover,
  locale,
}) => {
  const contentPreview = getContentPreview(content);

  return (
    <CardContainer>
      {/* Header */}
      <div className="flex flex-wrap items-start gap-3 sm:items-center">
        <div className="avatar">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
            <img 
              src={avatar || '/default-avatar.png'} 
              alt={name || 'User'} 
            />
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium">{name}</h3>
            {category && (
              <>
                <span className="text-gray-400">в</span>
                <Link
                  href={`/category/${category}`}
                  className="text-primary hover:underline"
                >
                  {category}
                </Link>
              </>
            )}
          </div>
          <div className="text-sm text-gray-400">
            {/* Тут можна додати дату створення, якщо вона є в даних */}
          </div>
        </div>
        <Button size="sm" className="ml-auto">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Image */}
      {cover && (
        <div className="mt-4">
          <img
            src={cover}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="mt-4">
        <Link href={`/${locale}/post/${encodeURIComponent(slug)}`} className="hover:underline">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
        </Link>
        <div className="prose prose-sm mb-4">
          <ClientBlocksRenderer content={contentPreview} />
        </div>
        <Link 
          href={`/${locale}/post/${encodeURIComponent(slug)}`}
        >
          <Button 
            variant="outline" 
            size="sm"
            color='primary'
          >
            Читати далі...
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <Button size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          <span>0</span>
        </Button>
        <Button size="sm" className="gap-2">
          <ThumbsDown className="h-4 w-4" />
          <span>0</span>
        </Button>
        <Button size="sm" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          <span>0</span>
        </Button>
        <div className="ml-auto flex items-center gap-2 text-gray-400">
          <Eye className="h-4 w-4" />
          <span>0</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default PostCard;
