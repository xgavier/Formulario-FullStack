const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Poesias = Schema({
  nombre: String,
});

module.exports = mongoose.model("Poesias", Poesias);
