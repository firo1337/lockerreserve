const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lockerSchema = new Schema({
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

const lockerModel = mongoose.model("locker", lockerSchema);
module.exports = lockerModel;
