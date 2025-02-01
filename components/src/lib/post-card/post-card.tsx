import React from 'react';
import { Heart, MessageSquare, Eye, MoreVertical, ThumbsDown } from 'lucide-react';
import { Button } from '@daylix-ui/components';
import Link from 'next/link';
import CardContainer from '../card-container';

interface PostProps {
  avatar: string;
  name: string;
  category: string;
  time: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  views: number;
  href?: string;
}

const PostCard: React.FC<PostProps> = ({
  avatar,
  name,
  category,
  time,
  title,
  content,
  image,
  likes,
  dislikes,
  comments,
  views,
  href = '#',
}) => {
  return (
    <CardContainer>
      {/* Header */}
      <div className="flex flex-wrap items-start gap-3 sm:items-center">
        <div className="avatar">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
            <img src={avatar} alt={name} />
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-base sm:text-lg">{name}</h3>
            {/* Category badge */}
            <span className="text-xs sm:text-sm opacity-70">{category}</span>
          </div>
          <p className="text-xs sm:text-sm opacity-50">{time}</p>
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
      <Link href={href} className="block mt-3 sm:mt-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
        <div>
          <p className="text-base sm:text-lg">{content}</p>

          {/* Image */}
          {image && (
            <div className="mt-3 sm:mt-4 rounded-lg overflow-hidden">
              <img src={image} alt="Post content" className="w-full object-cover" />
            </div>
          )}
        </div>
      </Link>

      {/* Interaction buttons */}
      <div className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <Button
            color="ghost"
            size="sm"
            className="justify-center"
            startIcon={<Heart className="w-4 h-4 sm:w-5 sm:h-5" />}
          >
            {likes > 0 && <span className="text-xs sm:text-sm">{likes}</span>}
          </Button>
          <Button
            color="ghost"
            size="sm"
            className="justify-center"
            startIcon={<ThumbsDown className="w-4 h-4 sm:w-5 sm:h-5" />}
          >
            {dislikes > 0 && <span className="text-xs sm:text-sm">{dislikes}</span>}
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
            {comments > 0 && <span>{comments}</span>}
          </Button>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          {views > 0 && views}
        </div>
      </div>
    </CardContainer>
  );
};

export default PostCard;
