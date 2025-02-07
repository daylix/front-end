'use client';

import { ClientBlocksRenderer } from '@daylix/core';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { Heart, MessageSquare, Eye, ThumbsDown, EyeIcon, MoreVertical } from 'lucide-react';
import { Button } from '@daylix-ui/components';
import Link from 'next/link';
import { ru, uk } from 'date-fns/locale';
import Image from 'next/image';
import useSWR from 'swr';
import { GetPostDataAccess } from '@daylix/core/data-access';
import CardContainer from '../card-container';
import { Post as PostType } from '@daylix/core/graphql/generated';

interface PostProps {
  locale: string;
  slug: string;
  initialData: PostType;
}

export default function Post({ locale, slug, initialData }: PostProps) {
  const { data: post, error, isLoading } = useSWR(
    ['post', locale, slug],
    () => GetPostDataAccess(locale, slug),
    { 
      fallbackData: initialData,
      revalidateOnFocus: false,
      suspense: false
    }
  );

  let formattedDate = '';
  if (post?.createdAt) {
    const parsedDate = parseISO(post.createdAt);
    formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true, locale: locale === 'ru' ? ru : uk });  
  }

  if (isLoading && !initialData) {
    return (
      <div className="container mx-auto px-6 max-w-4xl">
        <CardContainer className="bg-[#1a1a1a] text-gray-200 p-5 rounded-[24px]">
          <div className="animate-pulse">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-700"></div>
              <div className="flex-1">
                <div className="h-4 w-24 bg-gray-700 rounded mb-2"></div>
                <div className="h-3 w-32 bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-8 bg-gray-700 rounded w-3/4"></div>
              <div className="h-[300px] bg-gray-700 rounded-2xl"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </CardContainer>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6">
        <CardContainer className="bg-[#1a1a1a] text-gray-200 p-5 rounded-[24px]">
          <div className="text-center">
            <div className="text-red-500 mb-2">Помилка завантаження поста</div>
            <div className="text-gray-400">{error instanceof Error ? error.message : 'Failed to fetch post'}</div>
          </div>
        </CardContainer>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-6">
        <CardContainer className="bg-[#1a1a1a] text-gray-200 p-5 rounded-[24px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-200">Пост не знайдено</h1>
          </div>
        </CardContainer>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <CardContainer className="bg-[#1a1a1a] text-gray-200 p-5 rounded-[24px]">
        <article className="flex flex-col gap-6">
          <header className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gray-700">
              <Image
                src={post.users_permissions_user?.avatar?.url || '/default-avatar.png'}
                alt={post.users_permissions_user?.username || ''}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-100">{post.users_permissions_user?.username}</span>
              </div>
              <span className="text-sm text-gray-500">
                {post.categories?.[0] && (
                  <Link
                    href={`/category/${post.categories[0].name}`}
                    className="text-gray-400 hover:underline"
                  >
                    {post.categories[0].name}
                  </Link>
                )}
                {post.categories?.[0] && " "}
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

          <div className="space-y-3">
            <h1 className="text-[28px] font-semibold leading-tight text-gray-100">
              {post.title}
            </h1>
          </div>

          {post.cover && post.cover.length > 0 && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={post.cover[0]?.url ?? ''}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="text-gray-400 text-[15px] leading-relaxed">
            <ClientBlocksRenderer content={post.content} />
          </div>

          <footer className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-6">
              <Button color="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                <Heart className="h-5 w-5" />
              </Button>
              <Button color="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                <ThumbsDown className="h-5 w-5" />
              </Button>
              <Button color="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
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
    </div>
  );
}