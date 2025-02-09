import { gql } from "@apollo/client";
import { GetRulesQuery, GetRulesQueryVariables } from '@daylix/core/graphql/generated';
import client from '@daylix/core/graphql';

export const GET_RULES = gql`
  query GetRules($locale: I18NLocaleCode!) {
    rule(locale: $locale) {
      title
      content
    }
  }
`;

export async function getRulesData(locale: string) {
  const { data } = await client.query<GetRulesQuery, GetRulesQueryVariables>({
    query: GET_RULES,
    variables: { locale },
    context: {
      fetchOptions: {
        cache: 'force-cache'
      }
    }
  });
  return data.rule;
}
