import mongoose, { mongo } from 'mongoose';
// PART OF SQL
// import Sequelize from 'sequelize';
// import _ from 'lodash';
// import casual from 'casual';

// Mongo connection

mongoose.Promise = global.Promise;
mongo.connect('mongodb://localhost/friends', {
 useUnifiedTopology: true
})

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: Array
    },
})

const Friends = mongoose.model('Friend', friendSchema);

// SQL

// const sequelize = new Sequelize('database', null, null, {
//     dialect: 'sqlite',
//     storage: './aliens.sqlite',
// });

// const Aliens = sequelize.define('aliens', {
//     firstName: {type: Sequelize.STRING},
//     lastName: {type: Sequelize.STRING},
//     planet: {type: Sequelize.STRING},
// })

// Aliens.sync({ force: true }).then(() => {
//     _.times(10, (i) => {
//         Aliens.create({
//             firstName: casual.first_name,
//             lastName: casual.last_name,
//             planet: casual.word,
//         });
//     });
// }).catch(err => console.log(err))

//Aliens (THIS GOES IN EXPORT)
export { Friends };