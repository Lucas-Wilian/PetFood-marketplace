const mongose = require('mongoose');
const Schema = mongose.Schema;

const product = new Schema({
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: 'Petshop',
  },
  nome: String,
  capa: String,
  preco: Number,
  avaliacoes: Number,
});

module.exports = mongose.model('Product', product);
