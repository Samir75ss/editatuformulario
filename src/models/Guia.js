const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuiaSchema = new Schema({
  descripcion: String,
  preguntas: [String]
});

const Guia = mongoose.model('Guia', GuiaSchema);

module.exports = Guia;