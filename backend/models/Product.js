const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ArtikelName: {
    type: String,
    required: true,
  },
  ArtikelDeskription: {
    type: String,
    required: true,
  },
  ArtikelPreis: {
    type: Number,
    required: true,
  },
  Bestand: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
