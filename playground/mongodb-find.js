const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('There was an error: ', err);
    }

    console.log('Connected to MongoDB server!');

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5bc8b01555d1c3094eed74a0') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log('Todos');
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Tom' })
      .count()
      .then(
        count => {
          console.log(`Amount of users with the name Tom : ${count}`);
        },
        err => {
          console.log('Something went wrong', err);
        }
      );

    // db.close();
  }
);
