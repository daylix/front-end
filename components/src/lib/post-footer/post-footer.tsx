import React from 'react';
import { Button } from '@daylix-ui/components';
import { EyeIcon, Heart, MessageSquare, ThumbsDown } from 'lucide-react';

interface PostFooterProps {
  likes?: number;
  dislikes?: number;
  comments?: number;
  views?: number;
}

const PostFooter: React.FC<PostFooterProps> = ({ likes, dislikes, comments, views }) => {
  const hasInteractions = likes || dislikes || comments;

  if (!hasInteractions && !views) {
    return null;
  }

  return (
    <footer className="flex items-center justify-between pt-2">
      {hasInteractions && (
        <div className="flex items-center gap-6">
          {likes !== undefined && likes > 0 && (
            <Button color="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
              <Heart className="h-5 w-5" />
              <span className="ml-1">{likes}</span>
            </Button>
          )}
          {dislikes !== undefined && dislikes > 0 && (
            <Button color="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
              <ThumbsDown className="h-5 w-5" />
              <span className="ml-1">{dislikes}</span>
            </Button>
          )}
          {comments !== undefined && comments > 0 && (
            <Button color="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
              <MessageSquare className="h-5 w-5" />
              <span className="ml-1">{comments}</span>
            </Button>
          )}
        </div>
      )}
      {views !== undefined && views > 0 && (
        <div className="flex items-center gap-2">
          <EyeIcon className="h-5 w-5 text-gray-400" />
          <span className="text-gray-400">{views}</span>
        </div>
      )}
    </footer>
  );
};

export default PostFooter;
