const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('There was an error: ', err);
    }

    console.log('Connected to MongoDB server!');

    //deleteMany
    // db.collection('Todos')
    //   .deleteMany({ text: 'Eat dinner' })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    //CHALLENGE
    // db.collection('Users')
    //   .deleteMany({ name: 'Tom' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users')
    //   .findOneAndDelete({ _id: new ObjectID('5bc8ad54b78ac40b3cd165b9') })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.close();
  }
);
