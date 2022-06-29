const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lockerCSchema = new Schema({
  bloco: {
    type: String,
  },
  numCacifo: {
    type:Number,
  },
  requisitado: {
    type: Boolean,
  },
});

const lockerCModel = mongoose.model("lockerC", lockerCSchema);
module.exports = lockerCModel;
