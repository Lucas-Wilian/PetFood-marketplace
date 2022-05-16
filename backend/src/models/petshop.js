const mongose = require('mongoose');
const Schema = mongose.Schema;

const petshop = new Schema({
  nome: String,
  logo: String,
  categoria: String,
  destaque: Number,
  location: Object,
  recipient_id: String,
});

module.exports = mongose.model('Petshop', petshop);
