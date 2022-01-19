import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query userData($_id: ID!) {
    userData(_id: $_id) {
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
