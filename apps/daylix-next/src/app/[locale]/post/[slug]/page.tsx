import { Post} from "@daylix/components";
import { GetPostDataAccess } from "@daylix/core/data-access";
import { Post as PostType } from '@daylix/core/graphql/generated';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}
export const revalidate = 60;

export default async function Page({ params: { locale, slug } }: PageProps) {
  const initialData = await GetPostDataAccess(locale, slug);

  return (
    <section className="w-full min-h-screen">
      <div className="container relative flex flex-col min-h-screen px-4 py-4 mx-auto">
        <Post locale={locale} slug={slug} initialData={initialData as PostType} />
      </div>
    </section>
  );
}
