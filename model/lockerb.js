const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lockerBSchema = new Schema({
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

const lockerBModel = mongoose.model("lockerb", lockerBSchema);
module.exports = lockerBModel;
