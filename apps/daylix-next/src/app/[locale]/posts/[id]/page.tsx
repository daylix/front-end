import { getPostData } from './post-api';
import { ClientBlocksRenderer } from '@daylix/core';
import CardContainer from '@daylix/card-container';
import { Heart, MessageSquare, Eye, MoreVertical, ThumbsDown } from 'lucide-react';
import { Button } from '@daylix-ui/components';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function PostPage({ params }: { params: { locale: string; id: string } }) {
  const post = await getPostData(params.locale, params.id);

  if (!post) return <p>Post not found</p>;

  return (
    <main>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-0 font-work">
          <CardContainer>
            {/* Header */}
            <div className="flex flex-wrap items-start gap-3 sm:items-center">
              <div className="avatar">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                  <img src={post.avatar} alt={post.name} />
                </div>
              </div>
              <div className="flex-1 min-w-[140px]">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg">{post.name}</h3>
                  {/* Category badge */}
                  <span className="text-xs sm:text-sm opacity-70">{post.category}</span>
                </div>
                <p className="text-xs sm:text-sm opacity-50">{post.time}</p>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Button
                  color="primary"
                  size="sm"
                  className="justify-center"
                >
                  Підписатися
                </Button>
                <div className="dropdown dropdown-end">
                  <Button
                    color="ghost"
                    shape="circle"
                    size="sm"
                    className="justify-center"
                    startIcon={<MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-4">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{post.title}</h2>
              <div>
                <div className="text-base sm:text-lg">
                  {/* Image */}
                  {post.image && (
                    <div className="mt-6 rounded-lg overflow-hidden">
                      <img src={post.image} alt="Post content" className="w-full object-cover" />
                    </div>
                  )}
                  {/* Content */}
                  <ClientBlocksRenderer content={post.content} />
                </div>
              </div>
            </div>

            {/* Interaction buttons */}
            <div className="flex items-center gap-2 sm:gap-4 mt-6">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <Button
                  color="ghost"
                  size="sm"
                  className="justify-center"
                  startIcon={<Heart className="w-4 h-4 sm:w-5 sm:h-5" />}
                >
                  {post.likes > 0 && <span className="text-xs sm:text-sm">{post.likes}</span>}
                </Button>
                <Button
                  color="ghost"
                  size="sm"
                  className="justify-center"
                  startIcon={<ThumbsDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                >
                  {post.dislikes > 0 && <span className="text-xs sm:text-sm">{post.dislikes}</span>}
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm opacity-70">
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  color="ghost"
                  size="sm"
                  className="justify-center"
                  startIcon={<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />}
                >
                  {post.comments > 0 && <span>{post.comments}</span>}
                </Button>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 ml-auto">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                {post.views > 0 && post.views}
              </div>
            </div>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
