import { gql } from '@apollo/client';

export const getRockets = gql`
  query ExampleQuery {
    rockets {
      id
      name
      description
    }
  }
`;
