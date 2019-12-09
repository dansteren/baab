import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]!
  }

  # interface MutationResponse {
  #   code: String!
  #   success: Boolean!
  #   message: String!
  # }

  # type UpdateUserEmailMutationResponse implements MutationResponse {
  #   code: String!
  #   success: Boolean!
  #   message: String!
  #   user: User
  # }
`;
