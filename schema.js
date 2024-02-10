export const typeDefs = `#graphql

type User {
  userId: ID
  name: String
  coordinates: String
  type: String
  availability: Boolean
}

type Disaster {
  disasterId: ID
  coordinates: String
  type: String
  severity: Int
}

type Resource {
  resourceId: ID
  type: String
  coordinates: String
  availability: Boolean
}

type Paragraph {
  paragraphId: ID!
  paragraph: String
}

type Query {
  users: [User!]!
  disasters: [Disaster]
  resources: [Resource]
}

type Mutation {
  createDisaster(coordinates: String, type: String, severity: Int): Disaster!
  createParagraph(paragraph: String!): Paragraph!
  getDisasterById(id: ID!): Disaster!
  getParagraphById(id: ID!): Paragraph!
}

`;
