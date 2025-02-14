import { gql } from '@apollo/client';
import client from '../graphql/client';
import { GetPostQuery, GetPostQueryVariables, Post } from '../graphql/generated';

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
      youtube
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

export async function GetPostDataAccess(locale: string, slug: string) {
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

  return post as Post;
}
