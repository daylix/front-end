import { gql } from '@apollo/client';
import { GetPostsQuery, GetPostsQueryVariables, Post } from '../graphql/generated';
import client from '../graphql/client';

export const GET_POSTS = gql`
  query GetPosts($locale: I18NLocaleCode!, $page: Int!, $pageSize: Int!) {
    posts_connection(
      locale: $locale,
      pagination: { page: $page, pageSize: $pageSize },
      sort: "createdAt:desc"
    ) {
      nodes {
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
      pageInfo {
        page
        pageSize
        pageCount
        total
      }
    }
  }
`;

export async function GetPostsDataAccess(
  locale: string,
  page: number = 1,
  pageSize: number = 10
): Promise<{ posts: Post[]; pagination: { page: number; pageSize: number; pageCount: number; total: number } }> {
  const { data } = await client.query<GetPostsQuery, GetPostsQueryVariables>({
    query: GET_POSTS,
    variables: { locale, page, pageSize }
  });

  return {
    posts: (data.posts_connection?.nodes ?? []) as Post[],
    pagination: data.posts_connection?.pageInfo ?? { page: 1, pageSize: 10, pageCount: 1, total: 0 }
  };
}
