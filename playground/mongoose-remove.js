const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

// Todo.remove({}).then(res => {
//   console.log(res);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({ _id: '5bcf50d455d1c3094eed9377' }).then(todo => {
  console.log(todo);
});

Todo.findByIdAndRemove('5bcf50d455d1c3094eed9377').then(todo => {
  console.log(todo);
});
