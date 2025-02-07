import { gql } from '@apollo/client';
import { GetPostsQuery, GetPostsQueryVariables } from '../graphql/generated';
import client from '../graphql/client';

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

export async function GetPostsDataAccess(locale: string): Promise<GetPostsQuery['posts']> {
  const { data } = await client.query<GetPostsQuery, GetPostsQueryVariables>({
    query: GET_POSTS,
    variables: { locale }
  });
  return data.posts;
}