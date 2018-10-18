const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('There was an error: ', err);
    }

    console.log('Connected to MongoDB server!');

    // db.collection('Todos').insertOne({
    //   test: 'My first todo',
    //   completed: false
    // }, (err, result) => {
    //   if(err) {
    //     return console.log('Unable to insert todo', err);
    //   }

    //   console.log(JSON.stringify(result.ops), undefined, 2);
    // });

    // db.collection('Users').insertOne({
    //   name: 'Tom',
    //   age: 25,
    //   location: 'Brno'
    // }, (err, result) => {
    //   if(err) {
    //     return console.log('Not able to insert user', err);
    //   }

    //   console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
  }
);
