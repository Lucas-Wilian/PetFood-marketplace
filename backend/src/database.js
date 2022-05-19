const mongoose = require('mongoose');
const mongoPath =
  'mongodb+srv://petfood:petfood26042001@pet-food.b2lj9.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('debug', true);

mongoose.connect(
  mongoPath,
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
