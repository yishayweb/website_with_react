const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// to run local db from C: C:\mongodb\bin\mongod.exe --dbpath=C:\mongodb_data
