import { getPostData } from './post-api';
import { ClientBlocksRenderer } from '@daylix/core';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageSquare, Eye, ThumbsDown } from 'lucide-react';
import { Button } from '@daylix-ui/components';
import CardContainer from '@daylix/card-container';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function PostPage({ params: { locale, slug } }: PageProps) {
  const post = await getPostData(locale, slug);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <CardContainer>
        <article className="p-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src={post.users_permissions_user?.avatar?.url || '/default-avatar.png'}
                  alt={post.users_permissions_user?.username}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium">{post.users_permissions_user?.username}</div>
                  <div className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </div>
                </div>
              </div>
              {post.categories?.[0] && (
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium">
                  {post.categories[0].name}
                </span>
              )}
            </div>
          </header>

          {post.cover && (
            <img 
              src={post.cover[0]?.url}
              alt={post.title}
              className="w-full h-auto mb-8 rounded-lg object-cover"
            />
          )}

          <div className="prose prose-lg max-w-none mb-8">
            <ClientBlocksRenderer content={post.content} />
          </div>

          <footer className="flex items-center gap-6 pt-6">
            <Button size="sm" className="gap-2">
              <Heart className="w-4 h-4" />
              <span>{post.likes_count}</span>
            </Button>
            <Button size="sm" className="gap-2">
              <ThumbsDown className="w-4 h-4" />
              <span>{post.dislikes_count}</span>
            </Button>
            <Button size="sm" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>{post.comments_count}</span>
            </Button>
            <div className="flex items-center gap-2 ml-auto text-gray-500">
              <Eye className="w-4 h-4" />
              <span>{post.views_count}</span>
            </div>
          </footer>
        </article>
      </CardContainer>
    </div>
  );
}
