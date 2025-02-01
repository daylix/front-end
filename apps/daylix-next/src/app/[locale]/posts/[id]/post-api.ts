import { gql } from '@apollo/client';
import { client } from '@daylix/core';
import { GetPostQuery, GetPostQueryVariables } from '@daylix/core/graphql/generated';
import { mockPostDetails } from './mock-data';

export const GET_POST = gql`
  query GetPost($locale: I18NLocaleCode!, $documentId: ID!) {
    post(locale: $locale, documentId: $documentId) {
      documentId
      title
      content
      cover {
        url
      }
      categories {
        name
      }
      createdAt
      reactions {
        type
      }
    }
  }
`;

export async function getPostData(locale: string, id: string) {
  // Use mock data for development
  const reactions = mockPostDetails.reactions || [];
  const likes = reactions.filter(r => r?.type === 'like').length;
  const dislikes = reactions.filter(r => r?.type === 'dislike').length;

  return {
    id: mockPostDetails.documentId,
    title: mockPostDetails.title,
    content: mockPostDetails.content,
    category: mockPostDetails.categories?.[0]?.name || '',
    image: mockPostDetails.cover?.[0]?.url,
    name: 'Микита Єнтус', // Mock author name
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4", // Mock avatar
    time: new Date(mockPostDetails.createdAt).toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    likes,
    dislikes,
    comments: 0,
    views: 0,
  };

//  const { data } = await client.query<GetPostQuery, GetPostQueryVariables>({
//    query: GET_POST,
//    variables: {
//      locale,
//      documentId: id,
//    },
//  });
//
//  if (!data.post) return null;
//
//  const reactions = data.post.reactions || [];
//  const likes = reactions.filter(r => r?.type === 'like').length;
//  const dislikes = reactions.filter(r => r?.type === 'dislike').length;
//
//  return {
//    id: data.post.documentId,
//    title: data.post.title,
//    content: data.post.content,
//    category: data.post.categories?.[0]?.name || '',
//    image: data.post.cover?.[0]?.url,
//    name: 'Anonymous', // We don't have author field yet
//    avatar: undefined,
//    time: new Date(data.post.createdAt).toLocaleDateString(),
//    likes,
//    dislikes,
//    comments: 0, // We don't have comments field yet
//    views: 0, // We don't have views field yet
//  };
}
