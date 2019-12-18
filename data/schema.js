import { resolvers } from './resolvers'
import { makeExecutableSchema } from 'graphql-tools';

// "!" means mandatory
const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input ContactInput{
        firstName: String
        lastName: String
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
    }

`;

const schema = makeExecutableSchema({typeDefs, resolvers});


export { schema };


//WITH ARRAY OF EMAILS
// type Friend {
//     id: ID
//     firstName: String,
//     lastName: String,
//     gender: String,
//     language: String,
//     emails: [Email]! 
// }

// type Email {
//     email: String
// }