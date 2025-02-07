import { getAboutData } from './about-api';
import { ClientBlocksRenderer } from '@daylix/core';
import CardContainer from '@daylix/card-container';

export async function generateStaticParams() {
  return [
    { locale: 'uk' },
    { locale: 'ru' }
  ];
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const about = await getAboutData(params.locale);

  if (!about) return <p>No about data found</p>;

  return (
    <main>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-0 font-work">
          <CardContainer>
            <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">{about.title}</h3>
            <div className="mt-4">
              <ClientBlocksRenderer content={about.content} />
            </div>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
