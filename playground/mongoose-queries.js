const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

let id = '5bcae217913e1a440ec534ed';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid!');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('ID not found!');
//     }
//     console.log('Todo By ID', todo);
//   })
//   .catch(e => console.log(e));

// User.findById(id)
//   .then(user => {
//     if (!user) {
//       return console.log('User not found ya fuck!');
//     }

//     console.log('User', user);
//   })
//   .catch(e => console.log('USER NOT FOUND', e));
