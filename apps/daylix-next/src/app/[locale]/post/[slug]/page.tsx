import { getPostData } from './post-api';
import { ClientBlocksRenderer } from '@daylix/core';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { Heart, MessageSquare, Eye, ThumbsDown, EyeIcon, MoreVertical, BookmarkIcon, Share2Icon } from 'lucide-react';
import { Button } from '@daylix-ui/components';
import CardContainer from '@daylix/card-container';
import Link from 'next/link';
import { ru, uk } from 'date-fns/locale';
import Image from 'next/image';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export const dynamic = 'force-dynamic';

export default async function PostPage({ params: { locale, slug } }: PageProps) {
  const post = await getPostData(locale, slug);

  let formattedDate = '';

  if (post?.createdAt) {
    const parsedDate = parseISO(post?.createdAt);
    formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true, locale: locale === 'ru' ? ru : uk });  
  }

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
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

          {post.cover && (
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
