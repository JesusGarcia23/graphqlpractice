import mongoose from 'mongoose'
import { Friends } from './dbConnectors'
// RESOLVER RETURNS THE DATA WHEN WE MAKE A QUERY QITH GRAPHQL

// resolver map
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id])
        }
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                   if(err) reject(err)
                   else resolve(newFriend) 
                })
            })
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({ _id: input.id}, input, {new: true}, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                })
            })
        }
    },
};







//WITHOUT MONGODB
// export const resolvers = {
//     Query: {
//         getFriend: ({id}) => {
//             return new Friend(id, friendDatabase[id])
//         }
//     },
//     Mutation: {
//         createFriend: (root, {input}) => {
//             let id = require('crypto').randomBytes(10).toString('hex');
//             friendDatabase[id] = input;
//             return new Friend(id, input)
//         }
//     }

// };



// ROOT RETURNS THE DATA WHEN WE MAKE A QUERY QITH GRAPHQL
//WITH AN ARRAY OF EMAILS
// const root = { friend: () => {
//     return {
//         "id": 28718992,
//         "firstName": "Manny",
//         "lastName": "Henri",
//         "gender": "Male",
//         "language": "English",
//         "emails": [{email: "me@me.com"}, 
//                     {email: "another@me.com"}]
//     }
// }};