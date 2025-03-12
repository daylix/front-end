import { gql } from '@apollo/client';
import client from '../graphql/client';

export interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export interface LoginVariables {
  identifier: string;
  password: string;
}

export const LOGIN_MUTATION = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export async function loginUser(identifier: string, password: string): Promise<LoginResponse> {
  try {
    const { data } = await client.mutate<{ login: LoginResponse }, LoginVariables>({
      mutation: LOGIN_MUTATION,
      variables: { identifier, password }
    });

    if (!data || !data.login) {
      throw new Error('Authentication error');
    }

    return data.login;
  } catch (error: any) {
    console.error('Error during login attempt:', error);

    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      const gqlError = error.graphQLErrors[0];

      if (gqlError.extensions?.error?.message) {
        throw new Error(gqlError.extensions.error.message);
      }

      if (gqlError.message) {
        throw new Error(gqlError.message);
      }
    }
    throw new Error('Invalid email or password');
  }
}
