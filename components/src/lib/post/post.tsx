'use client';

import { ClientBlocksRenderer } from '@daylix/core';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ru, uk } from 'date-fns/locale';
import Image from 'next/image';
import useSWR from 'swr';
import { GetPostDataAccess } from '@daylix/core/data-access';
import { Post as PostType } from '@daylix/core/graphql/generated';
import { PostHeader, YouTubeEmbed, PostFooter, CardContainer } from '@daylix/components';

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
      <div className="container mx-auto max-w-4xl">
        <CardContainer className="text-gray-200 p-5 rounded-[24px]">
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
      <div className="container mx-auto">
        <CardContainer className="text-gray-200 p-5 rounded-[24px]">
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
      <div className="container mx-auto">
        <CardContainer className="text-gray-200 p-5 rounded-[24px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-200">Пост не знайдено</h1>
          </div>
        </CardContainer>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <CardContainer className="text-gray-200 p-5 rounded-[24px]">
        <article className="flex flex-col gap-6">
          <PostHeader 
            avatar={post.users_permissions_user?.avatar?.url}
            name={post.users_permissions_user?.username ?? ''}
            category={post.categories?.[0]?.name}
            categorySlug={post.categories?.[0]?.slug ?? ''}
            formattedDate={formattedDate}
          /> 

          <div className="space-y-3">
            <h1 className="text-[22px] leading-[30px] font-medium text-gray-100">
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

          <div className="text-gray-300 mt-4 text-[17px] leading-[26px] font-light">
            <ClientBlocksRenderer content={post.content} />
          </div>

          {post.youtube && (
            <YouTubeEmbed url={post.youtube?.url} width={600} height={330} />
          )}

          <PostFooter />
        </article>
      </CardContainer>
    </div>
  );
}
