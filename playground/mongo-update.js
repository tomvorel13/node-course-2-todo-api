const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('There was an error: ', err);
    }

    console.log('Connected to MongoDB server!');

    // db.collection('Todos')
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID('5bc8b8ac55d1c3094eed76b0')
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5bc8ab758f49a7469cf43879')
        },
        {
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    // db.close();
  }
);
