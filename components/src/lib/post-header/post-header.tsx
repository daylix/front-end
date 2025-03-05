import React from 'react';
import Link from 'next/link';
import { Avatar } from '@daylix-ui/components';

interface PostHeaderProps {
  avatar?: string;
  name: string;
  category?: string;
  categorySlug?: string;
  formattedDate: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  avatar,
  name,
  category,
  categorySlug,
  formattedDate,
}) => {
  return (
    <header className="flex items-center gap-3">
      <Avatar
        src={avatar}
        letters={!avatar ? name.charAt(0).toUpperCase() : undefined}
        border={true}
        borderColor="primary"
        color="neutral"
        shape="circle"
        size="sm"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-100">{name}</span>
        </div>
        <span className="text-sm text-gray-500">
          {category && (
            <Link
              href={`/category/${categorySlug}`}
              className="text-gray-400 hover:underline"
            >
              {category}
            </Link>
          )}
          {category && ' '}
          {formattedDate}
        </span>
      </div>
    </header>
  );
};

export default PostHeader;