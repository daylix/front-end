import { getRulesData } from './rules-api';
import { ClientBlocksRenderer } from '@daylix/core';

export const dynamic = 'force-dynamic';

export default async function RulesPage({ params }: { params: { locale: string } }) {
  const rules = await getRulesData(params.locale);

  if (!rules) return <p>No rules data found</p>;

  return (
    <main>
      <section>
        <div className="container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12 font-work">
          <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">{rules.title}</h3>
          <div className="mt-8">
            <ClientBlocksRenderer content={rules.content} />
          </div>
        </div>
      </section>
    </main>
  );
}
