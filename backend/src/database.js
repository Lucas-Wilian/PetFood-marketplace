const mongoose = require('mongoose');
const URI = '';

mongoose.set('debug', true);

mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log('Conectado ao DB - localhost');
  }
);
