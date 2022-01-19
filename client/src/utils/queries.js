import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query getMe($_id: ID!) {
  userData(_id: $_id) {
      username
      savedBooks {
          title
          description
          image
          bookId
          authors
      }
  }
}
`;