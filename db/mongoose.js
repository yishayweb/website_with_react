const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yishay-web-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const new_user = new User({
  name: "Yishay",
  age: 34
});

new_user.save().then(() => {
  console.log(new_user);
}).catch((error) => {
  console.log(error);
})

// to run local db from C: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb_data
