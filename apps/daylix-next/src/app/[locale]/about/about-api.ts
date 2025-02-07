import { gql } from "@apollo/client";
import { client } from '@daylix/core';
import { GetAboutQuery, GetAboutQueryVariables } from '@daylix/core/graphql/generated';

export const GET_ABOUT = gql`
  query GetAbout($locale: I18NLocaleCode!) {
    about(locale: $locale) {
      title
      content
    }
  }
`;

export async function getAboutData(locale: string) {
  const { data } = await client.query<GetAboutQuery, GetAboutQueryVariables>({
    query: GET_ABOUT,
    variables: { locale },
    context: {
      fetchOptions: {
        cache: 'force-cache'
      }
    }
  });
  return data.about;
}
