const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }


  type Auth {
    token: ID!
    user: User
  }


  type Query {
    userData(_id:ID!): User
  }

  type Book {
    bookId: String!
    authors: [String!]
    description: String!
    image: String!
    link: String!
    title: String!
  }
input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    title: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(_id: ID!, book: BookInput!): User
    removeBook(_id: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;
