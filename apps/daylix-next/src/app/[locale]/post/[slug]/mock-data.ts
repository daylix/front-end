import { BlocksContent } from '@strapi/blocks-react-renderer';

export const mockPostDetails = {
  documentId: "1",
  title: "Far Cry New Dawn отримає оновлення",
  content: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Far Cry New Dawn отримає 60 fps на PS5 та Xbox Series X|S. 4 лютого гра з'явиться у Game Pass."
        }
      ]
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Ubisoft анонсувала, що популярний шутер Far Cry New Dawn отримає оновлення для консолей нового покоління. Оновлення додасть підтримку 60 кадрів на секунду на PlayStation 5 та Xbox Series X|S."
        }
      ]
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Крім того, компанія оголосила, що гра стане доступною в сервісі Game Pass вже 4 лютого. Це дозволить передплатникам сервісу безкоштовно зіграти в гру."
        }
      ]
    }
  ] as BlocksContent,
  cover: [
    {
      url: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/BgUcl5T7p1YNLrck0FlvI/eb636d7f4fa7170e1c69c4e0663bcb8c/feature5_960x540.jpg"
    }
  ],
  categories: [
    {
      name: "Ігри"
    },
    {
      name: "Новини"
    }
  ],
  createdAt: "2025-02-01T16:53:04+02:00",
  reactions: [
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "like" },
    { type: "dislike" }
  ]
};
