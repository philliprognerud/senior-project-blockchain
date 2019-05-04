const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  vin: String,
  records: { data: Object, blockAddr: String },
  history: { data: Object, blockAddr: String },
  component: { data: Object, blockAddr: String }
});

mongoose.model("cars", carSchema);