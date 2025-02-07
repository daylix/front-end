import { getRulesData } from './rules-api';
import { ClientBlocksRenderer } from '@daylix/core';
import CardContainer from '@daylix/card-container';

export async function generateStaticParams() {
  return [
    { locale: 'uk' },
    { locale: 'ru' }
  ];
}

export default async function RulesPage({ params }: { params: { locale: string } }) {
  const rules = await getRulesData(params.locale);

  if (!rules) return <p>No rules data found</p>;

  return (
    <main>
      <section className="py-4 md:py-12">
        <div className="container mx-auto px-5 md:px-0 font-work">
          <CardContainer>
            <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">{rules.title}</h3>
            <div className="mt-4">
              <ClientBlocksRenderer content={rules.content} />
            </div>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
