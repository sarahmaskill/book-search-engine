import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!, 
    $email: String!, 
    $password: String!
    ) {
    addUser(
      username: $username, 
      email: $email, 
      password: $password
      ) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($_id: ID!, $bookData: BookInput!) {
    saveBook(_id: $_id, bookData: $bookData) {
      _id
      username
      email
      savedBooks {
      title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($_id: ID!, $bookId: String!) {
    removeBook(_id: $_id, bookId: $bookId) {
      _id
      username
      savedBooks {
        title
      }
    }
  }
`;