import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type User{
        id: ID!
        name: String!
        email: String!
    }
    
    type Query{
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => [{id: 1, name: 'Test', email: 'a@b.com'}]
    }
};

export default makeExecutableSchema({typeDefs, resolvers});