import { useTranslations } from 'next-intl';
import PostCard from '@daylix/post-card';
import { getPostsData } from './page-api';

interface PageProps {
  params: {
    locale: string;
  };
}

export const fetchCache = 'force-no-store';

export default async function Page({ params: { locale } }: PageProps) {
  const posts = await getPostsData(locale);

  return (
    <section className="w-full min-h-screen">
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        {posts?.filter(post => post !== null).map((post) => (
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
            locale={locale}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </section>
  );
}
