import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolver';

const typeDefs = `
    input BookInput {
        id: String
        name: String
    }

    type Book {
        id: String
        name: String
    }

    type Author {
        id: String
        age: Int
        name: String
        books: [Book]
    }

    type Query {
        authors(age: Int): [Author]
        author(id: String): Author
    }

    type Mutation {
        addAuthor(name: String!, age: Int!, books: [BookInput]!): Author
        deleteAuthor(id: String!): Author
        updateAuthor(id: String!, name: String!): Author
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;