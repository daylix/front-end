'use client';

import { Post } from '@daylix/core/graphql/generated';
import PostCard from '../post-card';
import useSWR from 'swr';
import { GetPostsDataAccess } from '@daylix/core/data-access';

interface PostsProps {
  locale: string;
  initialData?: Post[];
}

export default function Posts({ locale, initialData = [] }: PostsProps) {
  const { data: posts, error, isLoading } = useSWR(
    ['posts', locale],
    () => GetPostsDataAccess(locale).then(data => data as Post[]),
    {
      fallbackData: initialData,
      revalidateOnFocus: false
    }
  );

  if (isLoading && (!posts || posts.length === 0)) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-500 mb-2">Помилка завантаження постів</div>
        <div className="text-gray-600">{error}</div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        Немає доступних постів
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.documentId}
          id={post.documentId}
          slug={post.slug}
          title={post.title}
          content={post.content}
          avatar={post.users_permissions_user?.avatar?.url ?? ''}
          name={post.users_permissions_user?.username ?? ''}
          category={post.categories?.[0]?.name ?? ''}
          cover={post.cover?.[0]?.url}
          youtube={post.youtube?.url}
          locale={locale}
          createdAt={post.createdAt ?? ''}
        />
      ))}
    </div>
  );
}
