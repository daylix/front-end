import { Posts } from "@daylix/components";
import { GetPostsDataAccess } from "@daylix/core/data-access";
import { Post } from '@daylix/core/graphql/generated';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function Page({ params: { locale } }: PageProps) {
  const initialData = await GetPostsDataAccess(locale);

  return (
    <section className="w-full min-h-screen">
      <div className="container relative flex flex-col min-h-screen px-6 py-4 mx-auto">
        <Posts locale={locale} initialData={initialData as Post[]} />
      </div>
    </section>
  );
}