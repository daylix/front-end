import { useTranslations } from 'next-intl';
import PostCard from '@daylix/post-card';

export const mockPost = {
  avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  name: "Микита Єнтус",
  category: "Ігри",
  time: "5 хв",
  title: "Far Cry New Dawn",
  content: "Far Cry New Dawn отримає 60 fps на PS5 та Xbox Series X|S. 4 лютого гра з'явиться у Game Pass.",
  image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  likes: 11,
  dislikes: 1,
  comments: 21,
  shares: 2,
  views: 274,
  fires: 1,
  laughs: 1,
};


export default function Page() {
  console.log('ENV', process.env.NEXT_PUBLIC_API_URL);
  const t = useTranslations('soonPage');
  return (
    <>
    <section className="w-full min-h-screen">
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <PostCard {...mockPost} />
        <PostCard {...mockPost} />
        <PostCard {...mockPost} />
      </div>
    </section>
  </>
  )
}
