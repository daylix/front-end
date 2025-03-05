'use client';

import React, { useMemo, useState } from 'react';
import { Post } from '@daylix/core/graphql/generated';
import { PostCard } from '@daylix/components';
import useSWR from 'swr';
import { GetPostsDataAccess } from '@daylix/core/data-access';
import { Button, Pagination } from '@daylix-ui/components';

interface PostsProps {
  locale: string;
  initialData?: {
    posts: Post[];
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export default function Posts({ locale, initialData }: PostsProps) {
  const [page, setPage] = useState(initialData?.pagination.page || 1);
  const pageSize = initialData?.pagination.pageSize || 10;

  const { data, error, isLoading } = useSWR(
    ['posts', locale, page, pageSize],
    () => GetPostsDataAccess(locale, page, pageSize),
    {
      fallbackData: initialData,
      revalidateOnFocus: false
    }
  );

  const posts = data?.posts || [];
  const totalPages = data?.pagination.pageCount || 0;

  if (isLoading && posts.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const paginationButtons = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      return (
        <Button
          key={pageNumber}
          className="join-item"
          active={pageNumber === page}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Button>
      );
    });
  }, [totalPages, page, handlePageChange]);

  return (
    <div>
      {posts.map((post: Post) => (
        <PostCard
          key={post.documentId}
          id={post.documentId}
          slug={post.slug}
          title={post.title}
          content={post.content}
          avatar={post.users_permissions_user?.avatar?.url ?? ''}
          name={post.users_permissions_user?.username ?? ''}
          category={post.categories?.[0]?.name ?? ''}
          categorySlug={post.categories?.[0]?.slug ?? ''}
          cover={post.cover?.[0]?.url}
          youtube={post.youtube?.url}
          locale={locale}
          createdAt={post.createdAt ?? ''}
        />
      ))}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <Pagination>
            {paginationButtons}
          </Pagination>
        </div>
      )}
    </div>
  );
}
