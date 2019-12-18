const mongoose = require('mongoose')
// PART OF SQL
// import Sequelize from 'sequelize';
// import _ from 'lodash';
// import casual from 'casual';

// Mongo connection

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(x => {
    console.log("CONNECTED TO MONGO! DATABASE!")
}).catch(err => {
    console.error('Error connecting to Mongo', err)
})

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
// export { Friends };