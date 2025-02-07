import { gql } from '@apollo/client';
import { client } from '@daylix/core';
import { GetPostsQuery, GetPostsQueryVariables } from '@daylix/core/graphql/generated';

export const GET_POSTS = gql`
  query GetPosts($locale: I18NLocaleCode!) {
    posts(locale: $locale, sort: "createdAt:desc") {
      documentId
      slug
      title
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

export async function getPostsData(locale: string) {
  const { data } = await client.query<GetPostsQuery, GetPostsQueryVariables>({
    query: GET_POSTS,
    variables: { locale }
  });
  return data.posts;
}