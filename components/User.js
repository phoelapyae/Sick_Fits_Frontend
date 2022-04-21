import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

export default function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?._authenticatedItem;
}
