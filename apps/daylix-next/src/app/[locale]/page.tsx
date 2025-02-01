import { useTranslations } from 'next-intl';
import PostCard from '@daylix/post-card';

export const mockPost = {
  id: "1", 
  avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  name: "Микита Єнтус",
  category: "Ігри",
  time: "5 хв",
  title: "Far Cry New Dawn",
  content: "Far Cry New Dawn отримає 60 fps на PS5 та Xbox Series X|S. 4 лютого гра з'явиться у Game Pass.",
  image: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/BgUcl5T7p1YNLrck0FlvI/eb636d7f4fa7170e1c69c4e0663bcb8c/feature5_960x540.jpg",
  likes: 11,
  dislikes: 0, 
  comments: 21,
  shares: 2,
  views: 274,
};

interface PageProps {
  params: {
    locale: string;
  };
}

export default function Page({ params: { locale } }: PageProps) {
  console.log('ENV', process.env.NEXT_PUBLIC_API_URL);
  const t = useTranslations('soonPage');

  return (
    <>
      <section className="w-full min-h-screen">
        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
          <PostCard {...mockPost} locale={locale} />
          <PostCard {...mockPost} locale={locale} id="2" />
          <PostCard {...mockPost} locale={locale} id="3" />
        </div>
      </section>
    </>
  )
}
