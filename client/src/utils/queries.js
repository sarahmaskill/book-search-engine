import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query getMe($_id: ID!) {
  getMe(_id: $_id) {
      username
      _id
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