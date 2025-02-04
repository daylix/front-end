import { gql } from '@apollo/client';
import { client } from '@daylix/core';
import { GetPostQuery, GetPostQueryVariables } from '@daylix/core/graphql/generated';

export const GET_POST = gql`
  query GetPost($locale: I18NLocaleCode!, $slug: String!) {
    posts(locale: $locale, filters: { slug: { eq: $slug } }) {
      title
      slug
      content
      createdAt
      cover {
        url
      }
      users_permissions_user {
        username
        email
        avatar {
          url
        }
      }
      categories {
        name
      }
    }
  }
`;

export async function getPostData(locale: string, slug: string) {  
  const { data } = await client.query<GetPostQuery, GetPostQueryVariables>({
    query: GET_POST,
    variables: {
      locale: locale as any,
      slug: decodeURIComponent(slug),
    },
  });

  if (!data.posts?.[0]) {
    return null;
  }

  const post = data.posts[0];
  
  return {
    title: post.title,
    content: post.content,
    cover: post.cover,
    users_permissions_user: post.users_permissions_user,
    categories: post.categories,
    locale,
    createdAt: post.createdAt,
    likes_count: 0,
    dislikes_count: 0,
    comments_count: 0,
    views_count: 0
  };
}