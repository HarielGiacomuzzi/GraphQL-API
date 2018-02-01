"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
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
        allUsers: () => [{ id: 1, name: 'Test', email: 'a@b.com' }]
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
